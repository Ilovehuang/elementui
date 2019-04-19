<template>
   <div class="vx-basic-button">
      <el-button  v-bind="$attrs"  :type="btnColor" @click="click"  :disabled="disabled"  :style="{'background':background, 'border-color':borderColor?borderColor:background, 'color':color}">
         <i class="btnIcon" :class=" [Icon]"></i>{{Text}}
      </el-button>
   </div>
</template>
<style lang="less">
.vx-basic-button {
   button i {
      margin-right: 5px;
   }
   .el-button {
      padding: 6px 18px;
      line-height: 1.428571429;
   }
}
</style>
<script>
Vue.component("vx-basic-button", {
   template: template,
   props: {
      "borderColor":{
         default:""
      },
      "type":{
         default:"create"
      }, //create,save,cancel,close,check,step,weather,upgrade,tags,export,collect,set,spread,restart,keep,map
      "btncolor":{
         default:"primary"
      }, //primary ,success ,warning , danger ,info , text
      "color":{
         default:""
      }, //自定义字体颜色
      "label":{
         default:""
      }, //自定义label
      "icon":{
         default:""
      }, //自定义icon
      "background":{
         default:""
      }, //自定义按钮背景颜色
      "disabled":{
         default:false
      }, //true，false
      // "buttonname", //按钮名称
      // "buttonicon", //自定义得按钮图标
      // "size"
   },
   data() {
      return {
         LoaderDict: LoaderDict,
         Buttons: {
            create: {
               label: LoaderDict.Common.Add, //新增
               icon: "fa fa-plus"
            },
            save: {
               label: LoaderDict.Common.Save, // "保存",
               icon: "fa fa-floppy-o"
            },
            cancel: {
               label: LoaderDict.Common.Cancel, // "取消",
               icon: "fa fa-ban"
            },
            close: {
               label: LoaderDict.Common.Close, //"关闭",
               icon: "fa fa-times"
            },
            search: {
               label: LoaderDict.Common.Search, //"查询",
               icon: "fa fa-search"
            },
            clear: {
               label: "清空", //"关闭",
               icon: "fa fa-times"
            }
         }
      };
   },
   computed: {
      Text: {
         get() {
            var btn = this.Buttons[this.type];
            if (btn) {
               return btn.label;
            }
            return this.label;
         }
      },
      Icon: {
         get() {
            var btn = this.Buttons[this.type];
            if (btn) {
               return btn.icon;
            }
            return this.icon;
         }
      },
      btnColor: {
         get: function() {
            if (this.btncolor) return this.btncolor;
            else return "";
         }
      }
   },
   methods: {
      click: function(e) {
         this.$emit("click", e);
      }
   },
   watch:{

   }
});
</script>
