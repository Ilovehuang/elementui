let path = require("path");
let fs = require("fs");
let cache = require("memory-cache");
let less = require("less");
let moment = require("moment");
let async = require("async");
let jquery = require("cheerio");
let uglifycss = require("uglifycss");

/**
 * 云组件服务
 * @constructor ComponentService
 */
let iService = function() {
   this.Name = "";

   let tagPrefix = ["vx-", "vm-", "vb-", "vd-", "vp-"];

   let rootPath = path.join(process.cwd(), "website", "public", "components");
   let library = [path.join(process.cwd(), "website", "public", "static", "styles", "common")];

   this.onInit = () => {
      scanComponents(rootPath);
   };

   this.onDestroy = () => {
      let componentCache = cache.get("Component.Cache");
      if(componentCache) {
         for (let key in componentCache) {
            if (componentCache[key].Path) {
               fs.unwatchFile(componentCache[key].Path);
            }
         }
      }
   };

   /**
    * 内部方法 扫描组件路径
    * @memberOf ComponentService
    * @inner
    * @param { String } dirPath 组件文件根目录
    * @desc
    *   20181012 创建<br/>
    */
   let scanComponents = dirPath => {
      fs.readdir(dirPath, (err, files) => {
         if (err) {
            this.logger.error(err);
         } else {
            files.forEach(file => {
               let fileStat = fs.statSync(path.join(dirPath, file));
               if (fileStat.isDirectory()) {
                  scanComponents(path.join(dirPath, file));
               } else if (fileStat.isFile() && file.indexOf(".vue") > -1) {
                  watchFile(file, path.join(dirPath, file));
                  findFile(file, path.join(dirPath, file), moment(fileStat.mtime).formatTime());
               }
            });
         }
      });
   };

   /**
    * 内部方法 查找组件文件
    * @memberOf ComponentService
    * @inner
    * @param { String } componentName 组件文件名称
    * @param { String } filePath 组件文件路径
    * @param { String } fileTime 组件文件时间
    * @desc
    *   20181012 创建<br/>
    */
   let findFile = (componentName, filePath, fileTime) => {
      let fileContent = fs.readFileSync(filePath, "utf-8");
      async.auto(
         {
            template: cb => {
               let tempFile = "";
               try {
                  tempFile = fileContent
                     .substring(fileContent.indexOf("<template>") + 10, fileContent.lastIndexOf("</template>") - 1)
                     .trim();
               } catch (ex) {
                  this.logger.error("加载Template时错误： " + componentName + ": " + ex);
               }
               cb(null, tempFile);
            },
            style: cb => {
               if (fileContent && fileContent.indexOf("<style") > -1) {
                  let styleFile = "";
                  try {
                     styleFile = fileContent.substring(
                        fileContent.indexOf("<style"),
                        fileContent.indexOf("</style>") - 1
                     );
                     styleFile = styleFile.substring(styleFile.indexOf(">") + 1).trim();
                  } catch (ex) {
                     this.logger.error("加载Style时错误：" + componentName + ": " + ex);
                  }
                  if (styleFile) {
                     less.render(
                        styleFile,
                        {
                           paths: library
                        },
                        (err, css) => {
                           if (err) {
                              cb(err);
                              return;
                           }
                           if (css && css.css) {
                              cb(null, css.css);
                           } else cb(null);
                        }
                     );
                  } else cb(null);
               } else {
                  cb(null);
               }
            },
            script: [
               "template",
               "style",
               (data, cb) => {
                  if (fileContent) {
                     let scriptFile = fileContent
                        .substring(fileContent.indexOf("<script>") + 8, fileContent.indexOf("</script>") - 1)
                        .trim();
                     let scriptLines = scriptFile.split("\r\n");
                     if(scriptLines.length > 2 && scriptLines[1].indexOf("template") > -1) {
                        scriptLines.splice(1, 1);
                     }

                     cb(null, scriptLines.join("\r\n"));
                  } else cb(null);
               }
            ]
         },
         (err, result) => {
            if (err) {
               this.logger.error("加载组件时错误：" + componentName + ": " + ex);
               return;
            }
            let style = undefined;
            if (!result.style) delete result.style;
            else {
               style = result.style.trim();
               style = uglifycss.processString(style);
            }
            findTags({ FileName: componentName, Content: result.template }, "", (err, results) => {
               let componentInfo = {
                  Name: componentName,
                  Path: filePath,
                  VueHtml: result.template,
                  VueScript: result.script,
                  VueStyle: style,
                  VueRelations: results,
                  Status: 1,
                  FileTime: fileTime
               };

               registerTag({}, componentName, componentInfo);
            });


         }
      );
   };

   /**
    * 内部方法 监控组件文件变化
    * @memberOf ComponentService
    * @inner
    * @param { String } componentName 组件文件名称
    * @param { String } filePath 组件文件路径
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   let watchFile = (componentName, filePath) => {
      fs.watchFile(filePath, { persistent: true, interval: 200 }, (cur, prev) => {
         if (fs.existsSync(filePath)) {
            if (cur.mtime != prev.mtime) {
               findFile(componentName, filePath, moment(cur.mtime).formatTime());
            }
         }
      });
   };

   /**
    * 内部方法 页面内查找组件
    * @memberOf ComponentService
    * @inner
    * @param { Object } fileInfo 页面对象
    * @param { String } body 页面上级元素
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   let findTags = (fileInfo, body, callback) => {
      let $ = null;
      let html = fileInfo.Content;
      try {
         $ = jquery.load(html);
      } catch (ep) {
         this.logger.error(ep);
         this.logger.error(fileInfo.FileName);
         this.logger.error(html);
      }
      if ($) {
         let results = $(body + " *");
         let componentTags = [];
         for (let i = 0; i < results.length; i++) {
            let item = results[i];
            for (let j = 0; j < tagPrefix.length; j++) {
               if (item.name.indexOf(tagPrefix[j]) == 0) {
                  componentTags.push(item.name + ".vue");
               }
            }
         }
         callback(null, componentTags);
      } else callback("无法处理Html结构");
   };

   /**
    * 云组件注册
    * @memberOf ComponentService
    * @param { Request } req IncomingStream 请求对象
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   this.op_registerTag = (req, callback) => {
      registerTag(req, req.Data.Name, req.Data.Component, callback);
   };

   /**
    * 内部方法 云组件注册
    * @memberOf ComponentService
    * @inner
    * @param { Request } req IncomingStream 请求对象
    * @param { String } componentName 组件名称
    * @param { Object } componentInfo 组件内容
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   let registerTag = (req, componentName, componentInfo, callback) => {
      this.logger.info("正在注册： " + componentName + "文件");
      let componentCache = cache.get("Component.Cache");
      if(!componentCache) componentCache = {};
      componentCache[componentName] = componentInfo;
      cache.put("Component.Cache", componentCache);
      if(callback) callback(null);
   }
};

module.exports = new iService();
