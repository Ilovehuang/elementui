("use strict");
require("./extends");
let express = require("express");
let cache = require("memory-cache");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let path = require("path");
let async = require("async");
let os = require("os");
let tracer = require("tracer");

let app = express();
let logger = tracer.create(path.join("AppLog", "App.log"), "App");

let pluginBase = path.join(process.cwd(), "plugins");

process.on("uncaughtException", function(err) {
   logger.fatal(err);
});

app.use(express.static(path.join(process.cwd(), "website/views")));
app.use(express.static(path.join(process.cwd(), "website/public/static")));

app.use(
   bodyParser.json({
      limit: 20480000 //20M
   })
);

app.use(
   bodyParser.urlencoded({
      limit: 20480000, //20M
      extended: false
   })
);
app.use(cookieParser());

let getIp = function(req) {
   let ip = req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
   if (ip.split(",").length > 0) {
      ip = ip.split(",")[0];
   }
   if (ip == "::1") {
      let network = os.networkInterfaces();
      if (network.WLAN) {
         for (let i = 0; i < network.WLAN.length; i++) {
            let ipInfo = network.WLAN[i];
            if (ipInfo.family == "IPv4") {
               ip = ipInfo.address;
            }
         }
      }
   }
   if(ip.indexOf("::ffff:") > -1) {
      ip = ip.replace("::ffff:", "");
   }
   return ip;
};

app.post("*.html", (req, res) => {
   let serviceLoader = cache.get("App.ServiceLoader");
   let userIp = getIp(req);
   req.headers["x-clientip"] = userIp;
   let op = req.query.op;
   serviceLoader.runService(req, { Url: req.path, op: op }, req.body, (err, result) => {
      if (err) {
         errMsg = "访问服务时出错：" + err;
         res.send({ status: 1001, showText: errMsg });
      } else res.send({ status: 1000, data: result });
   });
});

app.runServer = function(callback) {
   async.auto(
      {
         Config: function(cb) {
            let configLoader = require(pluginBase + "/ConfigLoader.js");
            configLoader.init("App", path.join(process.cwd(), "config.json"), cb);
         },
         Service: [
            "Config",
            function(data, cb) {
               let serviceLoader = require(pluginBase + "/ServiceLoader.js");
               cache.put("App.ServiceLoader", serviceLoader);
               serviceLoader.init(cb);
            }
         ],
         Plugins: [
            "Service",
            function(data, cb) {
               let pluginLoader = require(pluginBase + "/PluginLoader.js");
               pluginLoader.init("App", cb);
            }
         ]
      },
      function() {
         /// catch 404 and forward to error handler
         app.use(function(req, res) {
            let err = new Error("404: Not Found ... " + req.url);
            logger.error(err.message);

            err.status = 404;
            res.send(err);
         });

         // production error handler
         // no stacktraces leaked to user
         app.use(function(err, req, res) {
            logger.error(err);
            let errMsg = new Error("500: Undefined Internal Server Error ... " + req.url);

            errMsg.status = 500;
            res.send(errMsg);
         });

         if (callback) callback();
      }
   );
};

module.exports = app;
