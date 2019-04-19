/*
author: hlong@zhuorui.cn
lastupdate: 2014-7-24
*/

jQuery.extend({
   ajaxPost: function(postUrl, postData, callback, errorCall) {
      let ajaxOption = {
         url: postUrl,
         type: "POST",
         dataType: "json",
         async: true,
         data: postData,
         success: function(res) {
            // console.log(postUrl + "used time", moment().diff(time1));
            if (res != null) {
               if (res.status != 1000) {
                  if (errorCall) errorCall(res);
                  else if (res.showText) {
                     if (typeof res.showText == "string") {
                        if (res.showText.indexOf("重新登录") > -1) {
                           jQuery.showResult(unescape(res.showText), "error", function() {
                              window.location.href = "/login.html";
                           });
                        } else {
                           console.error(res.showText);
                           ///jQuery.showResult(res.showText, "error");
                        }
                     } else if (typeof res.showText == "object") {
                        switch (res.showText.errno) {
                           case "ECONNREFUSED":
                              console.error(
                                 "无法连接服务器 " + res.showText.address + ":" + res.showText.port + "！",
                                 "error"
                              );
                              break;
                        }
                     } else {
                        console.error(res.showText);
                        //jQuery.showResult("服务器异常，请联系维护人员！", "error");
                     }
                  } else {
                     console.error(res);
                     //jQuery.showResult("服务器异常，请联系维护人员！", "error");
                  }
               }
               if (callback) callback(res);
            } else {
               jQuery.ajaxFail(postUrl, postData, res, callback);
            }
         },
         error: function(xmlReq, status, err) {
            if (xmlReq.readyState == 4 || xmlReq.responseText)
               jQuery.ajaxFail(postUrl, postData, xmlReq.responseText, callback);
         }
      };
      //if ($.isArray(postData)) {
      ajaxOption.contentType = "application/json; charset=utf-8";
      ajaxOption.data = JSON.stringify(postData);
      //}

      jQuery.ajax(ajaxOption);
   },
   ajaxFail: function(postUrl, postData, responseText, callback) {
      let errUrl = postUrl;
      if (postUrl.indexOf("?") > -1) errUrl = errUrl.substring(0, errUrl.indexOf("?"));
      if (errUrl.indexOf("/") > -1) errUrl = errUrl.substring(errUrl.lastIndexOf("/") + 1);
      let op = "";
      if (postUrl.indexOf("?op=") > -1) {
         op = postUrl.substring(postUrl.indexOf("?op=") + 4);
         if (op != "" && op.indexOf("&") > -1) op = op.substring(0, op.indexOf("&"));
      }
      let err = {};
      err.postUrl = postUrl;
      err.postData = postData;
      err.responseText = responseText;

      console.error(err);

      if (op.indexOf("save") > -1) {
         console.error("数据存储时发生错误，请联系维护人员！", "error");
      } else if (op == "del" || op.indexOf("delete") > -1) {
         console.error("数据删除时发生错误，请联系维护人员！", "error");
      } else if (op == "del" || op.indexOf("delete") > -1) {
         console.error("数据查询时发生错误，请重试或联系维护人员！", "error");
      } else {
         console.error("数据操作时发生错误，请联系维护人员！", "error");
      }

      if (callback) callback({ success: false });
   }
});
