<template>
   <div :id="Id" :v-show="Visible" :url="Url" :method="Method" class="vp-widget widgetbox">
      <slot></slot>
   </div>
</template>
<style lang="less">
.vp-widget.widgetbox {
   width: auto;
   height: auto;
}
</style>
<script>
Vue.component("vp-widget", {
   template: template,
   props: [
      "events", /// 事件数组，自动注册
      "url", /// 自定义服务URL地址
      "query", /// 查询参数定义
      "options", /// 显示参数定义
      "method", /// 显示方法
      "visible", /// 是否可见
      "refresh", /// 自动刷新时间
      "shadow", /// 阴影
      "auto",
      "required" /// 必须包含的字段
   ],
   data() {
      var id = "WT-" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id,
         Query: {}, /// 查询参数存储
         Options: {} /// 条件参数存储
      };
   },
   created() {
      if (this.events) {
         this.events.forEach(evtName => {
            if(evtName == "PageTest") PubSub.subscribe("Widget." + evtName, this.PageTest);
            else PubSub.subscribe("Widget." + evtName, this.CombineData);
         });
      }
      if(this.query) this.Query = this.query;
      if(this.options) this.Options = this.options;

      if(this.auto !== false) this.LoadData({Query: this.Query, Options: this.Options});
   },
   destroy() {
      if (this.events) {
         this.events.forEach(evtName => {
            if(evtName == "PageTest") PubSub.unsubscribe("Widget." + evtName);
            else PubSub.unsubscribe("Widget." + evtName);
         });
      }
   },
   computed: {
      Visible: {
         get() {
            return this.visible === undefined ? true : this.visible;
         },
         set(val) {
            this.$emit("update:visible", val);
         }
      },
      Url: {
         get() {
            return this.url ? this.url : "/ReportService.html?op=report";
         }
      },
      Method: {
         get() {
            return this.method ? this.method : "ShowEchart";
         }
      }
   },
   methods: {
      PageTest(et, data) {
         this.LoadData(data);
      },
      CombineData(et, data) {
         if(data) {
            let newQuery = data.Query;
            let newOptions = data.Options;
            /// 事件接收，数据合并
            this.CombineQuery(newQuery);
            this.CombineOptions(newOptions);
         }

         /// 隐藏状态，不加载数据
         if(this.Visible)  this.LoadData({Query: this.Query, Options: this.Options});
      },
      CombineQuery(newQuery) {
         var oldQuery = this.Query;
         if (!newQuery) newQuery = {};
         if (!oldQuery.Locations) oldQuery.Locations = {};
         if (!oldQuery.GroupBy) oldQuery.GroupBy = {};
         this.CombineObject(oldQuery, newQuery);

         var sortBy = null;

         /// 优先设置排序方式
         if (newQuery.SortBy) {
            if (typeof newQuery.SortBy == "string") {
               var oldSortValue = 1;
               if (oldQuery.SortBy) {
                  for (var key in oldQuery.SortBy) oldSortValue = oldQuery.SortBy[key];
               }
               oldQuery.SortBy = {};
               oldQuery.SortBy[newQuery.SortBy] = oldSortValue;
            } else oldQuery.SortBy = newQuery.SortBy;
            sortBy = oldQuery.SortBy;
         }

         if (newQuery.DataFields) oldQuery.DataFields = newQuery.DataFields;
         if (sortBy) oldQuery.SortBy = sortBy;
         //新增
         if (newQuery.ExtraFields) {
            newQuery.ExtraFields.forEach(function(newField) {
               var isSame = false;
               oldQuery.DataFields.forEach(function(oldField) {
                  if (newField == oldField) {
                     isSame = true;
                  }
               });
               if (!isSame) oldQuery.DataFields.push(newField);
            });
         }
         if (oldQuery.Relations) {
            oldQuery.Relations.forEach(function(item) {
               if (item.DataFields) {
                  for (var i = 0; i < item.DataFields.length; i++) {
                     if (item.DataFields[i].indexOf("Prefix") > -1) {
                        item.DataFields[i] = item.DataFields[i].replace("Prefix", newQuery.Prefix);
                     }
                  }
               }
            });
         }
         // if (oldQuery.DataFields) {
         //    for (var i = 0; i < oldQuery.DataFields.length; i++) {
         //       if (oldQuery.DataFields[i].indexOf("Prefix") > -1) {
         //          oldQuery.DataFields[i] = oldQuery.DataFields[i].replace("Prefix", newQuery.Prefix);
         //       }
         //    }
         // }
         if (newQuery.Prefix) oldQuery.Prefix = newQuery.Prefix;

         this.Query = oldQuery;

         this.$emit("update:query", oldQuery);
      },
      CombineOptions(newOption) {
         var oldOption = this.Options;
         if (!newOption) newOption = {};
         if (newOption.series) newOption.series = $.extend(true, {}, newOption.series);
         oldOption = $.extend(true, {}, oldOption, newOption);
         this.CombineObject(oldOption, newOption);

         if (newOption.RowFields) oldOption.RowFields = newOption.RowFields;

         var tableFields = new Array();
         if (newOption.ShowFields) {
            newOption.ShowFields.forEach(function(fieldName) {
               KPIDataFields[fieldName].Visible = true;
               tableFields.push(KPIDataFields[fieldName]);
            });
         }
         // oldOption.ShowFields = tableFields;
         // if (oldOption.ShowFields) {
         //    for (var i = 0; i < oldOption.ShowFields.length; i++) {
         //       if (oldOption.ShowFields[i].Field.indexOf("Prefix") > -1) {
         //          oldOption.ShowFields[i].Field = oldOption.ShowFields[i].Field.replace("Prefix", newOption.Prefix);
         //       }
         //    }
         // }
         this.Options = oldOption;
         this.$emit("update:options", oldOption);
      },
      CombineObject(oldObj, newObj) {
         for (var key in newObj) {
            if (oldObj.hasOwnProperty(key)) {
               if (!_.isObject(newObj[key])) {
                  // newObj[key]为null和undefined都会进入这里
                  oldObj[key] = newObj[key];
               } else {
                  if(_.isArray(newObj[key]))
                     oldObj[key] = newObj[key];
                  else {
                     if(!oldObj[key]) oldObj[key] = {};
                     this.CombineObject(oldObj[key], newObj[key]);
                  }
               }
            }
            else oldObj[key] = newObj[key];
         }
      },
      LoadData(data) {
         var me = this;
         /// 图表数据加载
         var fieldRequired = "";
         if(this.required) {
            for(var i = 0; i < this.required.length; i++) {
               var key = this.required[i];
               if(!data.Query[key]) {
                  fieldRequired = key;
                  break;
               }
            };
         }
         if(fieldRequired) {
            console.error("必须加入参数：" + fieldRequired);
            return;
         }
         console.warn("vp-widget", this.Url, data);
         $.ajaxPost(this.Url, data, function(res) {
            if (res.status == 1000) {
               if(res.data) me.ShowMethod(res.data);
            }
         });
      },
      ShowMethod(data) {
         /// 调用显示方法
         if(typeof this.method == "function") {
            this.method.call(this.$parent, this.Id, data);
         } else  if (typeof Widget.Methods[this.Method] == "function") {
            if($("#" + this.Id).is(":visible")) Widget.Methods[this.Method](this.Id, data);
         }
      }
   }
});
</script>
