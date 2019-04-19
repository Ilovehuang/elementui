window.defaultBusinessData = {
   props: [
      "autoload", /// 是否自动加载，默认true
      "operate", /// 操作类型："load", "save"
      "method",  /// 接口方式
      "query", /// 查询数据条件
      "data", /// 存储数据对象
      "trigger", /// 执行标记，为true时自动加载，执行完成自动设置为false
      "result", /// 执行返回的结果
      "loading", /// loading容器
      "interval", /// 定时刷新时间毫秒
      "events"
   ],
   created() {
      let events=this.events;
      if(events) {
         for(let i = 0; i < events.length; i++) {
            if(typeof this[events[i]] == "function") {
               this.$Bus.$emit(events[i], this[events[i]]);
            }
            else console.warn("undefined method: " + events[i]) ;
         }
      }
      if(this.Subscribe) {
         if(this.EditorVisible) this.$Bus.$on(this.Subscribe + ".Visible", this.EditorVisible);
         if(this.GridReload) this.$Bus.$on(this.Subscribe + ".Reload", this.GridReload);
      }
      // if(defaultCreated) defaultCreated.call(this);
      // if(created) created.call(this);
   },
   computed: {
      Url: {
         get() {
            return this.url;
         }
      },
      Autoload: {
         get() {
            return this.operate == "load" ? this.autoload : false;
         }
      },
      OperateLoad: {
         get() {
            return this.operate == "load"? true : false;
         }
      },
      OperateSave: {
         get() {
            return this.operate == "save"? true : false;
         }
      },
      QueryMethod: {
         get() {
            return this.operate == "load" ? this.method : "grid";
         }
      },
      SaveMethod: {
         get() {
            return this.operate == "save" ? this.method : "save";
         }
      },
      LoadTrigger: {
         get() {
            return this.operate == "load" ? this.trigger : false;
         },
         set(val) {
            this.$emit("update:trigger", val);
         }
      },
      SaveTrigger: {
         get() {
            return this.operate == "save" ? this.trigger : false;
         },
         set(val) {
            this.$emit("update:trigger", val);
         }
      },
      Result: {
         get(s) {
            return s;
         },
         set(val) {
            this.$emit("update:result", val);
         }
      },
      SaveResult: {
         get() {
            return this.result;
         },
         set(val) {
            this.$emit("update:result", val);
         }
      }
   }
};
window.defaultBusinessForm = {
   props: [
      "subscribe" /// 订阅前缀，默认Form
   ],
   data() {
      return {
         LoaderDict: LoaderDict,
         DefaultForm: {},
         /// 验证条件
         SaveTrigger: false,
         Visible: false,
         SaveResult: false, /// 完成标记
         Id:null,
         Rules:{

         },
         Result:{

         },
         values:{

         }
      };
   },
   created() {
      let events=this.events;
      if(events) {
         for(let i = 0; i < events.length; i++) {
            if(typeof this[events[i]] == "function") {
               this.$Bus.$emit(events[i], this[events[i]]);
            }
            else console.warn("undefined method: " + events[i]) ;
         }
      }
      if(this.Subscribe) {
         if(this.EditorVisible) this.$Bus.$on(this.Subscribe + ".Visible", this.EditorVisible);
      }
      if (this.FormData) {
         this.FormDataCopy(this.FormData, this.DefaultForm);
      }
   },
   computed: {
      Subscribe: {
         get() {
            return this.subscribe ? this.subscribe : "Form";
         }
      },
      Query: {
         get() {
            return { Id: this.FormData.Id };
         }
      }
   },
   watch: {
      SaveResult() {
         console.log(this.SaveResult);
         if (this.SaveResult) {
            this.Visible = false;
            this.$Bus.$emit("Grid.Reload");  /// 标准表格重载
            /// this.$emit("update:trigger", true);
            if(this.onAfterSave) this.onAfterSave();
         }
      }
   },
   methods: {

      FormDataCopy(source, target) {
         for (let key in source) {
            if (Array.isArray(source[key])) {
               target[key] = [];
               source[key].forEach(function(item) {
                  let data = {};
                  if(typeof item == "object") for(let prop in item) data[prop] = item[prop];
                  else data = item;
                  target[key].push(data);
               });
            } else target[key] = source[key];
         }
      },
      EditorVisible(data) {
         this.FormDataCopy(this.DefaultForm, this.FormData);
         this.FormDataCopy(data, this.FormData);
         this.Visible = true;
      }
   }
}
window.defaultBusinessGrid = {
   props: [
      "subscribe" /// 订阅前缀，默认Grid
   ],
   data() {
      return {
         LoaderDict:LoaderDict,
         // Options: this.GridOptions, /// 表格定义
         List: [],  /// 表格数据
         ModifyForm: false, /// 弹出表单
         Checked: [],
         RowData: {},  /// 选中行数据
         Query: {},  /// 查询条件
         LoadTrigger: false, /// 加载数据
         DeleteTrigger: false,  /// 删除事件
         DeleteResult: false /// 删除完成标记
      };
   },
   created() {
      let events=this.events;
      if(this.Subscribe) {
         if(events) {
            for(let i = 0; i < events.length; i++) {
               if(typeof this[events[i]] == "function") {
                  this.$Bus.$emit(events[i], this[events[i]]);
               }
               else console.warn("undefined method: " + events[i]) ;
            }
         }
         if(this.GridReload) this.$Bus.$on(this.Subscribe + ".Reload", this.GridReload);
      }
   },
   computed: {
      Subscribe: {
         get() {
            return this.subscribe ? this.subscribe : "Grid";
         }
      }
   },
   watch: {
      ModifyForm() {
         if(this.ModifyForm) this.$Bus.$emit("Form.Visible", this.RowData);  /// 标准表单弹出窗口
         this.ModifyForm = false;
      },
      DeleteResult() {
         if(this.DeleteResult) {
            this.DeleteResult = false;
            this.GridReload();
         }
      }
   },
   methods: {
      GridReload(query) {
         if(query) this.Query = query;
         this.LoadTrigger = true;
      }
   }
};
window.defaultBusinessPage = {
   props: [
   ],
   created(){
      if(options[key]) {
         for(let i = 0; i < options[key].length; i++) {
            if(typeof options["methods"][options[key][i]] == "function") {
               this.$Bus.$on(options[key][i], this[[options[key][i]]]);
            }
            else console.warn("undefined method: " + options[key][i]) ;
         }
      }
      if(this.Subscribe) {
         if(this.EditorVisible) this.$Bus.$on(this.Subscribe + ".Visible", this.EditorVisible);
         if(this.GridReload) this.$Bus.$on(this.Subscribe + ".Reload", this.GridReload);
      }
      if(defaultCreated) defaultCreated.call(this);
      if(created) created.call(this);
   },
   data() {
      return {
         /// 页面显示控制
         LoaderDict: LoaderDict
      };
   }
};
