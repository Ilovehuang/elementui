"use strict";
/// tracer extends
let os = require("os");
let tracer = require("tracer");
tracer.loggerList = {};

/// underscore extends
let _ = require("underscore");

let util = require("util");

/// moment extends
let moment = require("moment");

moment.fn.toMoment = function(time) {
   return moment(time, "YYYY-MM-DD HH:mm:ss"); /// convert YYYY-MM-DD HH:mm:ss to moment
};

moment.fn.formatDate = function() {
   return this.format("YYYY-MM-DD");
};

moment.fn.formatTime = function() {
   return this.format("YYYY-MM-DD HH:mm:ss");
};

moment.fn.floor = function(period) {
   /// convert to nearest floor period time;
   if (!period) period = "60";
   if (typeof period == "string") period = parseInt(period);
   let minute = Math.floor(parseInt(this.format("m")) / period) * period;
   return this.minute(minute)
      .second(0)
      .millisecond(0)
      .formatTime();
};

/// mkdir extends
let fs = require("fs");
let path = require("path");
//使用时第二个参数忽略
let mkdir = (dirpath, dirname) => {
   //判断是否是第一次调用
   if (typeof dirname === "undefined") {
      if (fs.existsSync(dirpath)) {
         return;
      } else {
         mkdir(dirpath, path.dirname(dirpath));
      }
   } else {
      //判断第二个参数是否正常，避免调用时传入错误参数
      if (dirname !== path.dirname(dirpath)) {
         mkdir(dirpath);
         return;
      }
      if (fs.existsSync(dirname)) {
         fs.mkdirSync(dirpath);
      } else {
         mkdir(dirname, path.dirname(dirname));
         fs.mkdirSync(dirpath);
      }
   }
};

fs.mkdirRSync = mkdir;

/// level: TRACE, DEBUG, INFO, WARN, ERROR, FATAL
tracer.create = (logPath, name) => {
   let logger = tracer.loggerList[name];
   if (!logger) {
      let logFile = name + ".log";
      logPath = logPath.replace(logPath.lastIndexOf(path.sep, "/"));
      if (logPath.indexOf(".log") > -1) logFile = logPath.substring(logPath.lastIndexOf("/") + 1);

      logPath = logPath.replace(logFile, "");
      fs.mkdirRSync(path.join(process.cwd(), "logs", logPath));
      let logFormat = "{{timestamp}} [{{name}}] <{{title}}> {{message}} ({{file}}:{{line}})";
      let logFileName = logFile;
      let logToApp = true;
      switch (logFile) {
         case "WebLogger.log":
            logFormat = "{{timestamp}} {{message}}";
            logToApp = false;
            break;
      }
      let consoleConfig = {
         format: [
            logFormat, //default format
            {
               fatal: "{{timestamp}} [{{name}}] <{{title}}> {{message}} ({{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
            }
         ],
         dateformat: "[HH:MM:ss.L]",
         preprocess: data => {
            data.title = data.title.toUpperCase();
            data.name = name;
         },
         transport: [
            data => {
               // if(fs.existsSync((path.join(process.cwd(), 'logs', logPath, moment().subtract(10, "days").format("YYYYMMDD-") + logFile))))
               //    fs.unlinkSync(path.join(process.cwd(), 'logs', logPath, moment().subtract(10, "days").format("YYYYMMDD-") + logFile));
               switch (logFile) {
                  case "WebLogger.log":
                     logFileName = path.join(process.cwd(), "logs", logPath, moment().format("YYYYMMDD-HH-") + logFile);
                     break;
                  default:
                     logFileName = path.join(process.cwd(), "logs", logPath, moment().format("YYYYMMDD-HH") + logFile);
                     break;
               }
               if (logFile != "App.log") {
                  fs.appendFile(logFileName, data.rawoutput + "\n", () => {});
               }
               let appLogFileName = path.join(
                  process.cwd(),
                  "logs",
                  "AppLog",
                  moment().format("YYYYMMDD-HH") + "App.log"
               );
               if (logToApp) fs.appendFile(appLogFileName, data.rawoutput + "\n", () => {});
            },
            data => {
               if (logToApp) console.log(data.output);
            }
         ]
      };
      logger = tracer.colorConsole(consoleConfig);

      logger.savedb = logData => {
         if (logData.UserCode != "Auto") {
            let cache = require("memory-cache");
            let serviceLoader = cache.get("App.ServiceLoader");
            if (serviceLoader) serviceLoader.runService({ Name: "LogService", op: "save" }, logData);
         }
      };

      logger.saveinterface = logData => {
         if (logData) {
            let cache = require("memory-cache");
            let serviceLoader = cache.get("App.ServiceLoader");
            if (serviceLoader) serviceLoader.runService({ Name: "InterfaceLogService", op: "save" }, logData);
         }
      };

      tracer.loggerList[name] = logger;
   }

   return logger;
};

util.updateIp = req => {
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
   if (ip.indexOf("::ffff:") > -1) {
      ip = ip.replace("::ffff:", "");
   }
   req.headers["x-real-ip"] = ip;
};

/**
 * Deep Clone Object
 * @param { Object } obj
 * @returns { Object } cloneObj
 */
_.deepClone = obj => {
   if (!_.isObject(obj) || typeof obj === "function") {
      return obj;
   }
   let cloneObj = _.isArray(obj) ? [] : {};
   for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
         if (!_.isObject(obj[i])) {
            // obj[i]为null和undefined都会进入这里
            cloneObj[i] = obj[i];
         } else {
            cloneObj[i] = _.deepClone(obj[i]);
         }
      }
   }
   return cloneObj;
};

/**
 * 列表数据转换成树形数据
 * @param { Object } root 可选，可为null
 * @param { Array } list 必须，含上下级的数据列表
 * @param { String } key 必须，含上下级的数据列表
 * @param { String } parentField 必须，数据列表的上下级关系字段
 * @param { String } parentValue 必须，父数据主值
 * @returns { Array } tree 树形数据
 * @example
 *    [{
 *       Id: "",
 *       Name: "",
 *       children: [{}]
 *    }]
 */
_.toTree = (root, list, keyField, parentField, topValue) => {
   for (let i = 0; i < list.length; i++) {
      if (list[i][parentField] != topValue) {
         for (let j = 0; j < list.length; j++) {
            if (list[j][keyField] == list[i][parentField]) {
               if (!list[j].children) list[j].children = [];
               list[j].children.push(list[i]);
               break;
            }
         }
      }
   }
   for (let i = list.length - 1; i >= 0; i--) {
      if (list[i][parentField] != topValue) {
         list.splice(i, 1);
      }
   }

   if (root) {
      root.children = list;
      root = [root];
   } else root = list;
   return root;
};

let crypto = require("crypto");
/*** SHA256加密法
 * @param { String } sk 必须，密码
 * @param { String } joinStr 必须，需加密的字符串
 * @example
 * [{
 *   Id: "",
 *   Name: "",
 *   children: [{}]
 * }]
 */
util.signSHA256 = (sk, joinStr) => {
   let signStr = "";
   if (typeof joinStr == "object") {
      let keys = [];
      for (let key in joinStr) {
         keys.push(key);
      }
      keys = keys.sort();
      for (let i = 0; i < keys.length; i++) {
         signStr += "&" + keys[i] + "=" + joinStr[keys[i]];
      }
      signStr = signStr.substr(1);
   } else signStr = joinStr;
   let sign = crypto
      .createHmac("sha256", sk)
      .update(signStr)
      .digest("hex");
   return sign;
};
