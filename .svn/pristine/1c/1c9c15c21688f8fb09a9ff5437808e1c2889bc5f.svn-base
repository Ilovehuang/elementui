let path = require("path");
let fs = require("fs");
let cache = require("memory-cache");
let tracer = require("tracer");

let pluginLoader = function() {
   this.RootPath = path.join(process.cwd(), "plugins");
   this.Name = "PluginLoader";
   let logger = tracer.create("AppLog/App.log", this.Name);

   this.watchedFiles = {};
   this.pluginCount = 0;
   this.plugins = {};
   this.priorityPlugins = [];
   this.interval = 5000;

   this.init = (configName, callback) => {
      logger.info("init " + this.Name);
      if (callback) {
         let timerId = setInterval(() => {
            if (this.pluginCount > 0) {
               let allPluginLoaded = true;
               for (let key in this.plugins) {
                  if (!this.plugins[key]) {
                     allPluginLoaded = false;
                  }
               }
               if (allPluginLoaded) {
                  clearInterval(timerId);
                  callback();
               }
            } else {
               clearInterval(timerId);
               callback();
            }
         }, 10);
      }

      this.refresh(configName);
   };

   this.refresh = configName => {
      this.priorityPlugins = cache.get(configName + ".plugins");
      this.plugins = [];
      this.readDir(this.RootPath);
   };

   this.readDir = filePath => {
      fs.readdir(filePath, (err, files) => {
         if (err) {
            logger.error("readDir - err: " + err);
         } else {
            files.forEach(file => {
               this.readFile(filePath, file);
            });
         }
      });
   };

   this.readFile = (filePath, file) => {
      let fileFullName = path.join(filePath, file);

      let stat = fs.lstatSync(fileFullName);

      if (stat.isFile()) {
         if (file.indexOf(".plugin.js") > -1) {
            /// .plugin.js
            let fileExt = file.substring(file.lastIndexOf(".plugin"));
            if (fileExt == ".plugin.js") {
               if (!this.watchedFiles[fileFullName]) {
                  this.loadPluginJs(fileFullName, true);
               }
            }
         }
      } else if (stat.isDirectory()) {
         this.readDir(path.join(filePath, file));
      } else if (stat.isSymbolicLink()) {
         if (file.indexOf(".plugin.js") > -1) {
            /// .plugin.js
            let fileExt = file.substring(file.lastIndexOf(".plugin"));
            if (fileExt == ".plugin.js") {
               if (!this.watchedFiles[fileFullName]) {
                  this.loadPluginJs(fileFullName, true);
               }
            }
         } else if (file.indexOf(".js") == -1) {
            this.readDir(path.join(filePath, file));
         }
      }
   };

   this.reloadPluginJs = fileFullName => {
      this.unloadPluginJs(fileFullName, false);
      setTimeout(() => {
         this.loadPluginJs(fileFullName, false);
      }, 50);
   };

   this.loadPluginJs = (fileFullName, addWatch) => {
      try {
         if (!this.watchedFiles[fileFullName]) this.watchedFiles[fileFullName] = {};

         this.plugins[fileFullName] = false;

         let loadedPlugin = require(fileFullName);
         this.initPlugin(loadedPlugin, fileFullName);

         if (addWatch) {
            fs.watchFile(fileFullName, { persistent: true, interval: this.interval }, (cur, prev) => {
               if (cur.mtime != prev.mtime) {
                  fs.exists(fileFullName, exists => {
                     if (exists) {
                        this.reloadPluginJs(fileFullName, false);
                     } else {
                        this.unloadPluginJs(fileFullName, true);
                     }
                  });
               }
            });
         }

         this.pluginCount++;
         this.watchedFiles[fileFullName].Plugin = loadedPlugin;
         this.plugins[fileFullName] = true;
      } catch (ep) {
         let fileName = fileFullName.substring(fileFullName.lastIndexOf("/") + 1);
         fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
         logger.error("loadPluginJs: " + fileName + ", " + ep);
      }
   };

   this.clearPlugins = () => {
      for (let fileFullName in this.watchedFiles) {
         this.unloadPluginJs(fileFullName, true);
      }
   };

   this.unloadPluginJs = (fileFullName, isRemove) => {
      try {
         this.pluginCount--;
         this.plugins[fileFullName] = false;
         let watchedFile = this.watchedFiles[fileFullName];
         if (watchedFile && watchedFile.Plugin) {
            if (typeof watchedFile.Plugin.destroy == "function") watchedFile.Plugin.destroy();
            delete watchedFile.Plugin;
            if (isRemove) {
               delete this.watchedFiles[fileFullName];
            }
         }

         let fileName = fileFullName.substring(fileFullName.lastIndexOf(path.sep) + 1);
         for (let key in require.cache) {
            if (key.indexOf(fileName) > -1) {
               delete require.cache[key];
               break;
            }
         }
      } catch (ep) {
         let fileName = fileFullName.substring(fileFullName.lastIndexOf("/") + 1);
         fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
         logger.error("unloadPluginJs: " + fileName + ", " + ep);
      } finally {
         if (isRemove) fs.unwatchFile(fileFullName);
      }
   };

   this.initPlugin = (loadedPlugin, fileFullName) => {
      if (!loadedPlugin.init) {
         loadedPlugin.init = () => {
            let serviceLoader = cache.get("App.ServiceLoader");
            let fileName = fileFullName.substring(fileFullName.lastIndexOf(path.sep) + 1).replace(".plugin.js", "");
            for (let method in serviceLoader) {
               if (typeof serviceLoader[method] == "function") loadedPlugin[method] = serviceLoader[method];
            }
            if (!loadedPlugin.Name) loadedPlugin.Name = fileName;
            if (!loadedPlugin.Url) loadedPlugin.Url = "/" + fileName + ".html";
            doPuginInit({
               Name: loadedPlugin.Name,
               Url: loadedPlugin.Url,
               Service: loadedPlugin,
               Register: loadedPlugin.Register
            });
            loadedPlugin.logger = tracer.create("ServiceLog", loadedPlugin.Name);
            if (loadedPlugin.onInit) loadedPlugin.onInit(this);
         };
      }

      if (!loadedPlugin.destroy) {
         loadedPlugin.destroy = () => {
            if (loadedPlugin.onDestroy) {
               loadedPlugin.onDestroy();
            }
            logger.info("destroy " + loadedPlugin.Name);
         };
      }

      loadedPlugin.init();
   };

   let doPuginInit = pluginInfo => {
      logger.info("init " + pluginInfo.Name);

      //本地注册host和port
      let serverInfo = cache.get("App.LocalServer");
      let serviceInfo = {
         Name: pluginInfo.Name,
         Url: pluginInfo.Url,
         Service: pluginInfo.Service,
         Register: pluginInfo.Register
      };
      if (serverInfo) {
         serviceInfo.host = serverInfo.host;
         serviceInfo.port = serverInfo.port;
      }
      cache.put("ServiceName:" + pluginInfo.Name, serviceInfo);
      cache.put("ServiceUrl:" + pluginInfo.Url, serviceInfo);
   };
};

module.exports = new pluginLoader();
