<template>
   <div class="vx-basic-demo">
      <el-button :size="true" :type="btnColor" @click="click" :disabled="disabled&&disabled.toString()=='true'?true:false" :plain="plain&&plain.toString()=='true'?true:false" :class="{'is-round': round&&round.toString()=='true'?true:false}" :style="{'background':background, 'border-color':borderColor?borderColor:background, 'color':color}">
         <i class="btnIcon" :class=" [Icon]"></i>{{Text}}
      </el-button>
   </div>
</template>
<style lang="less">
/* class必须与组件名称相同 */
.vx-basic-demo {
   // 内部采用less格式，支持样式嵌套
   button i {
      margin-right: 5px;
   }
   .el-button {
      padding: 6px 18px;
      line-height: 1.428571429;
   }
   // .el-button--newclass {
   //    color: #0000ff;
   //    background-color: #00ff00;
   //    border-color: #00ff00;
   // }
}
</style>
<script>
Vue.component("vx-basic-demo", {
   props: [
      "type", //create,save,cancel,close,check,step,weather,upgrade,tags,export,collect,set,spread,restart,keep,map
      "btncolor", //primary ,success ,warning , danger ,info , text
      "color", //自定义字体颜色
      "plain", //true，false
      "label", //自定义label
      "icon", //自定义icon
      "background", //自定义按钮背景颜色
      "round", //true，false
      "disabled", //true，false
   ],
   data() {
      return {
         Buttons: {
            create: {
               label: "新增",
               // label: LoaderDict.Common.Systemcommon.Add,
               icon: "fa fa-plus",
            },
            save: {
               //label: LoaderDict.Common.Login.Savelang, // "保存",
               label: "保存",
               icon: "fa fa-floppy-o",
            },
            cancel: {
               //label: LoaderDict.Common.Login.Cancel, // "取消",
               label: "取消",
               icon: "fa fa-ban",
            },
            close: {
               //label: LoaderDict.Common.Systemcommon.Shutdown, //"关闭",
               label: "关闭",
               icon: "fa fa-times",
            },
            check: {
               //label: LoaderDict.Common.Systemcommon.Gridbut, //"查询",
               label: "查询",
               icon: "fa fa-search",
            },
            step: {
               //label: LoaderDict.Common.Systemcommon.synchronous, //"同步",
               label: "同步",
               icon: "fa fa-search",
            },
            weather: {
               //label: LoaderDict.Common.Login.WeatherToday, // "获取今日天气情况",
               label: "获取今日天气情况",
               icon: "fa fa-search",
            },
            upgrade: {
               //label: LoaderDict.Common.Login.SystemUpgrade, // "系统升级",
               label: "系统升级",
               icon: "fa fa-search",
            },
            tags: {
               //label: LoaderDict.Common.Login.Addtags, // "添加标签",
               label: "添加标签",
               icon: "fa fa-tags",
            },
            export: {
               //label: LoaderDict.Common.DataIndicator.Export, //"导出",
               label: "导出",
               icon: "fa fa-tags",
            },
            collect: {
               //label: LoaderDict.Common.Login.BatchCollection, // "批量采集",
               label: "批量采集",
               icon: "fa fa-video-camera",
            },
            set: {
               // label: LoaderDict.Common.Login.SettingMall,
               // "设置案场",
               label: "设置案场",
               icon: "fa fa-shopping-bag",
            },
            spread: {
               // label: LoaderDict.Common.Login.DistributionUpgrade
               // "分布升级"
               label: "分布升级",
            },
            restart: {
               // label: LoaderDict.Common.Login.RestartService
               // "重启服务"
               label: "重启服务",
            },
            keep: {
               // label: LoaderDict.Common.Login.Savelang
               // "保存"
               label: "保存",
            },
            map: {
               // label: LoaderDict.Common.Systemcommon.Mapbut
               // "地图"
               label: "地图",
            },
         },
      };
   },
   mounted() {
      console.log(this);
   },
   computed: {
      Text: {
         get()  {
            var btn = this.Buttons[this.type];
            if (btn) {
               return btn.label;
            }
            return this.label;
         },
      },
      Icon: {
         get() {
            var btn = this.Buttons[this.type];
            if (btn) {
               return btn.icon;
            }
            return this.icon;
         },
      },
      btnColor: {
         get() {
            if (this.btncolor) return this.btncolor;
            else return "";
         },
      },
   },
   methods: {
      click(e) {
         this.$emit("click", e);
      },
   },
});
</script>
