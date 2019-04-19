<template>
   <vx-container-row class="vx-container-item" :v-show="Visible">
      <vx-container-col class="text-right form-label" :span="SpanLabel">
         {{Label}}
         <span class="mark" v-html="Required"></span>
      </vx-container-col>
      <vx-container-col class="form-input" :span="SpanView">
         <slot></slot>
      </vx-container-col>
      <vx-container-col :span="SpanRest">
         <span class="message">{{Message}}</span>
      </vx-container-col>
   </vx-container-row>
</template>
<style lang="less">
.vx-container-item {
   margin: 0 0 12px;
   .form-label {
      padding: 0px 15px 0 15px;
      margin-top: 0;
      margin-bottom: 0;
      line-height: 28px;
      .mark {
         color: #ff0000;
      }
   }
   .message {
      padding-top: 5px;
      padding-left: 10px;
      line-height: 32px;
      color: #ff0000;
   }
}
</style>
<script>
/**
 * 表单项容器
 */
Vue.component("vx-container-item", {
   template: template,
   props: {
      "label":{
         default:"标题"
      }, /// 表单项标题
      "suffix":{
         default:""
      }, /// 标题后缀
      "spanlabel":{
         default:6
      }, /// 标题宽度span
      "spanview":{
         default:14
      }, /// 内容宽度span
      "visible":{
         default:false
      }, /// 控制行显示
      "rule":{
         default:function(){return{}}
      } /// 验证项
   },
   computed: {
      Required: {
         get() {
            let starLabel = "&nbsp;&nbsp;";
            if(this.rule && this.rule.required) starLabel = "*";
            return starLabel;
         }
      },
      Label: {
         get() {
            return this.label + (this.suffix ? this.suffix : "");
         }
      },
      Visible: {
         get() {
            return this.visible === false ? false : true;
         }
      },
      SpanLabel: {
         get() {
            return this.spanlabel ? parseInt(this.spanlabel) : 6;
         }
      },
      SpanView: {
         get() {
            return this.spanview ? parseInt(this.spanview) : 14;
         }
      },
      SpanRest: {
         get() {
            return 24 - this.SpanView - this.SpanLabel;
         }
      },
      Message: {
         get() {
            if (this.rule) {
               if (this.rule.valid !== undefined && this.rule.valid.toString() === "false") return this.rule.msg;
               else return null;
            } else return null;
            return null;
         }
      }
   }
});
</script>
