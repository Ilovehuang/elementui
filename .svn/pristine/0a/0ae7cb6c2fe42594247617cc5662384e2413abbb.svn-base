#!/usr/bin/env nodejs
require("./extends");
let cache = require("memory-cache");
let websiteApp = require("./app.js");
let cluster = require("cluster");
let tracer = require("tracer");

let forkWorker = function() {
   let worker = cluster.fork();
   return worker;
};

let runServer = function() {
   let port = 80;
   let logger = tracer.create("AppLog/App.log", "IntForce");
   let website = cache.get("App.website");
   if (website) {
      if (website.port) port = website.port;
      websiteApp.set("port", port);

      let websiteServer = websiteApp.listen(websiteApp.get("port"), function() {
         logger.log("启动组件开发测试环境，端口号：" + websiteServer.address().port);
      });

      if (process.env.MAX_RUN_THREAD) {
         setTimeout(function() {
            process.exit();
         }, 10 * 60 * 1000);
      }
   }
};

if (process.env.MAX_RUN_THREAD) {
   if (cluster.isMaster) {
      for (let i = 0; i < process.env.MAX_RUN_THREAD; i++) {
         forkWorker();
      }
      websiteApp.runServer();
   } else {
      websiteApp.runServer(runServer);
   }

   cluster.on("online", function(worker) {
      logger.log("cluster pid: " + worker.process.pid + " is start ...");
   });
   cluster.on("exit", function(worker, code, signal) {
      logger.log("worker pid: " + worker.process.pid + " is died %s, restart!", code || signal);
      setTimeout(function() {
         forkWorker();
      }, 200);
   });
} else websiteApp.runServer(runServer);
