<template>
   <vx-container-row class="vx-container-item" v-show="ItemVisible">
      <vx-container-col class="text-right form-label" :span="spanlabel">
         {{label}}{{suffix}}
         <span class="mark" v-html="Required"></span>
      </vx-container-col>
      <vx-container-col class="form-input" :span="spanview">
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
Vue.component("vx-container-item", {
   
   props: {
      "subscribe":{
         default:""
      }, /// 事件前缀
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
         default: true
      }, /// 控制行显示
      "rule":{
         default:function(){return{}}
      } /// 验证项
   },
   data() {
      return {
         ItemVisible: true
      };
   },
   computed: {
      Required: {
         get() {
            let starLabel = "&nbsp;&nbsp;";
            if(this.rule && this.rule.required) starLabel = "*";
            return starLabel;
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
   },
   created() {
      this.$Bus.$on(this.subscribe + ".ItemVisible", this.updateVisible)
   },
   wacth: {
      visible() {
         this.ItemVisible = this.visible;
      }
   },
   methods: {
      updateVisible(val) {
         this.ItemVisible = val;
      }
   }
});
</script>
