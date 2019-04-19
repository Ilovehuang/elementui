<template>
   <div class="vx-container-dialog" :id="Id" :ref="Id" v-show="Visible" v-bind:style="{ width: width }">
      <form class="dialog-form" @submit.prevent.stop="saveForm">
         <slot></slot>
         <div class="dialog-footer">
            <button type="submit" class="hide">{{ LoaderDict.Common.Submit }}</button>
            <slot name="footer">
               <!-- 保存 -->
               <vx-basic-button type="save" btncolor="primary" @click="saveForm"></vx-basic-button>
               <!-- 取消 -->
               <slot name="cancel">
                  <vx-basic-button type="cancel" @click="closeDialog"></vx-basic-button>
               </slot>
               <slot name="moreBtn">
               </slot>
            </slot>
         </div>
      </form>
   </div>
</template>
<style lang="less">
.vx-container-dialog {
   .dialog-form {
      padding: 20px 20px 0;
   }
   .dialog-footer {
      clear: both;
      .vx-basic-button > button {
         float: right;
         margin: 10px;
      }
      width: 92%;
      height: 70px;
      line-height: 70px;
      margin: 15px auto 0 auto;
      border-top: 1px solid #c0c0c0;
      padding: 5px 0 40px;
   }
}
</style>
<script>
Vue.component("vx-container-dialog", {

   props: {
      "visible":{
         default:false
      }, /// 弹出窗口是否显示
      "trigger":{
         default:false
      }, /// 更新标记
      "autoclose":{
         default:false
      }, /// 保存后自动关闭标记
      "title":{
         default:"信息窗口"
      }, /// 窗口标题
      "width":{
         default:580
      }, /// 窗口宽度
      "height":{
         default:""
      }, /// 窗口高度
      "url":{
         default:"/DemoService.html"
      }, /// 后端服务地址
      "method":{
         default:"test"
      }, /// 服务接口：默认save
      "form":{
         default:function(){return {}}
      }, /// 表单对象
      "rules":{
         default:function(){return {}}
      } /// 全部验证条件
   },
   data() {
      var id = "XD" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id,
         LoaderDict: LoaderDict,
         Method: "save",
         Visible: false,
         AutoClose: true,
         ZIndex: 1000,
         LayIndex: null,
         layer:null
      };
   },
   computed: {
   },
   watch: {
      visible() {
         if (this.visible) this.updateDialog();
         else this.closeDialog();
         return ;
      }
   },
   mounted() {
      if (this.method) this.Method = this.method;
      if (this.autoclose) this.AutoClose = this.autoclose === "false" ? false : true;
   },
   methods: {
      /// 存储表单
      saveForm() {
         var me = this
         var ruleResult = true;
         if (this.rules) {
            ruleResult = this.$validate.validRules(this.rules, this.form);
         }

         if (ruleResult) {
            this.$emit("update:trigger", true);
         } else {
            this.$emit("update:rules", this.rules);
         }
      },
      /// 更新弹出窗口
      updateDialog() {
         let me = this;
         this.layer=layer
         if (this.rules) {
            for (let ruleKey in this.rules) {
               if (this.rules[ruleKey].valid !== undefined) this.rules[ruleKey].valid = true;
            }
         }
         if (this.method === undefined) this.method = "save";
         if (this.saveclose === undefined) this.saveclose = true;
         if (this.visible) {
            let box = jQuery("#" + this.Id);
            let opt = {
               id: "xcd-" + this.Id,
               type: 1,
               // z-index由1500变为1000
               // zIndex: this.ZIndex,
               title: this.title,
               area: this.width,
               content: box,
               scrollbar: false,
               offset: "150px",
               shadeClose: true,
               btn: false,
               end: function() {
                  this.Visible = false;
                  me.$emit("update:visible", false);
               }
            };
            this.Visible = true;
            // this.Visible = false;
            // this.ZIndex++;
            if(!layer.zIndex)
               layer.zIndex=1000
            else
               layer.zIndex++
            opt.zIndex=layer.zIndex
            this.LayIndex = layer.open(opt);
            console.log(opt,layer,this.LayIndex)
         } else {
            layer.close(this.LayIndex);
         }
      },
      /// 关闭弹出窗口
      closeDialog() {
         if (this.LayIndex) this.layer.close(this.LayIndex);
      }
   }
});
</script>
