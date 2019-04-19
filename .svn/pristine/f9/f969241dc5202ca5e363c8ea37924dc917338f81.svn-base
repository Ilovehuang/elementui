let fs = require("fs");
let tracer = require("tracer");
let cache = require("memory-cache");

let configLoader = function() {
   let me = this;
   this.Name = "ConfigLoader";
   let logger = tracer.create("AppLog/App.log", this.Name);

   this.ConfigPath = {};

   this.init = function(configName, configPath, callback) {
      logger.info("init " + this.Name);
      this.load(configName, configPath, callback);
   };

   this.unload = function() {
      for (let configKey in this.configPath) fs.unwatchFile(this.configPath[configKey]);
   };

   this.load = function(configName, configPath, callback) {
      if (configPath && !this.ConfigPath[configName]) {
         this.ConfigPath[configName] = configPath;
         fs.watchFile(configPath, { persistent: true, interval: 5000 }, function(cur, prev) {
            if (cur.mtime != prev.mtime) {
               me.load(configName);
            }
         });
      }
      fs.readFile(this.ConfigPath[configName], "utf-8", function(err, data) {
         if (err) logger.error("load - err: " + err);
         else {
            let lines = data
               .trim()
               .replace(/\r\n/g, "\n")
               .split("\n");
            for (let line in lines) {
               if (lines[line].indexOf("//") > -1 && lines[line].indexOf("://") == -1)
                  lines[line] = lines[line].substring(0, lines[line].indexOf("//"));
            }
            let configData = JSON.parse(lines.join("\n"));
            for (let key in configData) {
               switch (key) {
                  case "mongodb":
                     if (typeof configData[key] == "string") {
                        let buf = new Buffer(configData[key], "base64").toString();
                        let config = JSON.parse(buf);
                        cache.put(configName + "." + key, config);
                     } else {
                        cache.put(configName + "." + key, configData[key]);
                     }
                     break;
                  case "mysqldb":
                     if (typeof configData[key] == "string") {
                        let buf = new Buffer(configData[key], "base64").toString();
                        let config = JSON.parse(buf);
                        cache.put(configName + "." + key, config);
                     } else {
                        cache.put(configName + "." + key, configData[key]);
                     }
                     break;
                  case "LocalServer":
                     if (!configData[key]["host"]) configData[key]["host"] = process.env.Host_Server;
                     if (!configData[key]["port"]) configData[key]["port"] = process.env.Host_Port;
                     cache.put(configName + "." + key, configData[key]);
                     break;
                  default:
                     cache.put(configName + "." + key, configData[key]);
                     break;
               }
            }
         }

         if (callback) callback(null);
      });
   };

   this.getIPAddress = function() {
      let interfaces = require("os").networkInterfaces();
      for (let devName in interfaces) {
         let iface = interfaces[devName];
         for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1") {
               return alias.address;
            }
         }
      }
   };
};

module.exports = new configLoader();
