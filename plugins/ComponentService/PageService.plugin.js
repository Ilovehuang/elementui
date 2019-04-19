let request = require("request");
let moment = require("moment");
let cache = require("memory-cache");
let babel = require("babel-core");
let uglifyjs = require("uglify-js2");

/**
 * 页面服务
 * @constructor PageService
 */
let iService = function() {
   this.Name = "";

   this.onInit = () => {
      let componentCache = cache.get("Component.Cache");
      if (!componentCache) componentCache = {};
      cache.put("Component.Cache", componentCache);
   };

   /**
    * 检测指定云组件时间
    * @memberOf PageService
    * @param { Request } req IncomingStream 请求对象
    * @param { Object } req.body.Query 必须，查询条件
    * @param { Object } req.body.Query.Tags 必须，查询组件列表
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   this.op_checkTags = (req, callback) => {
      checkTags(req, req.body, callback);
   };

   /**
    * 内部方法 检测指定云组件时间
    * @memberOf PageService
    * @inner
    * @param { Request } req IncomingStream 请求对象
    * @param { Object } postData.Query 必须，查询条件
    * @param { Object } postData.Query.Tags 必须，查询组件列表
    * @param { Callback } callback 回调方法，返回(err, result)，result为{
    *    TagName: FileTime   /// 组件名称:组件更新时间
    * }
    * @desc
    *   20181012 创建<br/>
    */
   let checkTags = (req, postData, callback) => {
      let componentCache = cache.get("Component.Cache");
      let query = postData.Query;
      let tags = query.Tags;
      let tagData = {}; /// 返回指定组件和嵌套组件时间
      if (componentCache) {
         if(tags) {
            for (let tagKey in tags) {
               if (componentCache[tagKey]) {
                  if (componentCache[tagKey].FileTime > tags[tagKey]) tagData[tagKey] = componentCache[tagKey].FileTime;
                  if (componentCache[tagKey]["VueRelations"].length > 0)
                     loopComponent(tagData, componentCache[tagKey]["VueRelations"]);
               }
            }
         }

         callback(null, tagData);
      } else {
         this.logger.error("not found component cache!");
         callback(null, tagData);
      }
   };

   /**
    * 内部方法 循环检测指定云组件时间
    * @memberOf PageService
    * @inner
    * @param { Object } tags 必须，组件名称/时间对象
    * @param { Array } vueRelations 必须，关联组件列表
    * @desc
    *   20181012 创建<br/>
    */
   let loopComponent = (tags, vueRelations) => {
      let componentCache = cache.get("Component.Cache");
      if (!componentCache) componentCache = {};
      vueRelations.forEach(tagName => {
         if (componentCache[tagName]) {
            if (tags[tagName] === undefined) tags[tagName] = componentCache[tagName].FileTime;
            if (componentCache[tagName]["VueRelations"].length > 0)
               loopComponent(tags, componentCache[tagName]["VueRelations"]);
         }
      });
   };

   /**
    * 指定加载云组件
    * @memberOf PageService
    * @param { Request } req IncomingStream 请求对象
    * @param { Object } req.body.Query 必须，查询条件
    * @param { Object } req.body.Query.Tags 必须，查询组件列表
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   this.op_loadTags = (req, callback) => {
      loadTags(req, req.body, callback);
   };

   /**
    * 内部方法 指定加载云组件
    * @memberOf PageService
    * @inner
    * @param { Request } req IncomingStream 请求对象
    * @param { Object } postData.Query 必须，查询条件
    * @param { Object } postData.Query.Tags 必须，查询组件列表
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   let loadTags = (req, postData, callback) => {
      let componentCache = cache.get("Component.Cache");
      let query = postData.Query;
      let tags = query.Tags;
      let tagData = [];
      let remoteTags = [];
      if (componentCache) {
         if(tags) {
            for (let tagKey in tags) {
               if (componentCache[tagKey]) {
                  loadComponent(tagKey, tagData, componentCache[tagKey]);
               } else {
                  remoteTags.push(tagKey);
               }
            }
         }
      } else {
         this.logger.error("not found component cache!");
      }

      if(remoteTags.length > 0) {
         loadRemoteComponent({
            Tags: remoteTags
         }, (err, result)=> {
            if(result) tagData = tagData.concat(result);
            callback(err, tagData);
         });
      } else callback(null, tagData);
   };

   /**
    * 内部方法 根据组件内容生成组件输出结果
    * @memberOf PageService
    * @inner
    * @param { String } tagName 必须，组件名称
    * @param { Object } tagData 必须，输出组件结构
    * @param { Object } componentData 必须，缓存组件结构
    * @desc
    *   20181012 创建<br/>
    */
   let loadComponent = (tagName, tagData, componentData) => {
      let componentInfo = {
         Name: tagName,
         Time: componentData.FileTime,
         Css: componentData.VueStyle
      }
      let code = componentData.VueScript.trim();
      let script = babel.transform(code, { minified: true, comments: false, presets: ["env"] }).code;
      let ast = uglifyjs.parse(script);
      ast.figure_out_scope();
      compressor = uglifyjs.Compressor();
      ast = ast.transform(compressor);
      script = ast.print_to_string(); // get compressed code
      script = script.substring(script.indexOf("{"), script.lastIndexOf("}") + 1);
      let output = {};
      try {
         output = eval("(function(){return " + script + "})()");
         output.template = componentData.VueHtml;
         let result = JSON.stringify(output, (key, val) => {
            if (typeof val === "function") {
               return val + "";
            }
            return val;
         });
         componentInfo.Options = result;
      } catch (ep) {
         this.logger.error(ep);
         this.logger.error(script);
         componentInfo.Time = moment(componentData.FileTime).subtract("1", "days").formatTime();
      }

      tagData.push(componentInfo);
   };

   /**
    * 内部方法 加载远程组件
    * @memberOf PageService
    * @inner
    * @param { Request } req IncomingStream 请求对象
    * @param { Object } postData.Query 必须，查询条件
    * @param { Object } postData.Query.Tags 必须，查询组件列表
    * @param { Callback } callback 回调方法，返回(err, result)，result为{}
    * @desc
    *   20181012 创建<br/>
    */
   let loadRemoteComponent = (postData, callback) => {
      let remoteTags = postData.Tags;
      let service = cache.get("App.ComponentService");
      if (service) {
         let url = "http://" + service.host + ":" + service.port + "/PageService.html?op=loadTags";
         let options = {
            headers: { Connection: "close" },
            url: url,
            method: "POST",
            json: true,
            body: {
               Query: remoteTags
            }
         };
         request(options, (err, response) => {
            if (!err && response.statusCode == 200) {
               this.logger.info("load components connected ... : ", remoteTags.join(","));
               let result = response.body;
               if (result.status == 1000) {
                  callback(null, result.data);
               } else {
                  callback(result.showText);
               }
            } else {
               if (err) this.logger.error(postData, err);
               callback(err, []);
            }
         });
      } else {
         this.logger.error("undefined remote component service! can't load components: ", remoteTags.join(","));
         callback(null, []);
      }
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
      let componentCache = cache.get("Component.Cache");
      if (!componentCache) componentCache = {};
      componentCache[componentName] = componentInfo;
      cache.put("Component.Cache", componentCache);
      if (callback) callback(null);
   };
};
module.exports = new iService();
