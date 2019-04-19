<template>
   <div class="vx-view-dialog" :id="Id" :ref="Id" v-show="visible" v-bind:style="{ width: width }">
      <form class="dialog-form">
         <slot></slot>
         <div class="dialog-footer">
            <slot name="footer">
               <!-- 取消 -->
               <slot name="cancel">
                  <vx-basic-button @click="closeDialog" type="close"></vx-basic-button>
               </slot>
            </slot>
         </div>
      </form>
   </div>
</template>
<style lang="less">
.vx-view-dialog {
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
/**
 * 展示弹窗容器
 */

Vue.component("vx-view-dialog", {
   template: template,
   props: {
      "visible":{
         defalut:false
      }, /// 弹出窗口是否显示
      "title":{
         defalut:"信息窗口"
      }, /// 窗口标题
      "width":{
         defalut:580
      }, /// 窗口宽度
      "height":{
         defalut:""
      }, /// 窗口高度
      "form":{
         defalut:function(){return {}}
      } /// 数据对象
   },
   data() {
      var id = "XV" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         LoaderDict: LoaderDict,
         Id: id,
         LayIndex: null
      };
   },
   computed: {
      Visible: {
         get() {
            return this.visible;
         },
         set(val) {
            this.$emit("update:visible", val);
         }
      }
   },
   watch: {
      visible() {
         this.updateDialog();
      }
   },
   methods: {
      updateDialog() {
         let me = this;
         if (this.visible) {
            let box = jQuery("#" + this.Id);
            let opt = {
               id: "xvd-" + this.Id,
               type: 1,
               // z-index由1500变为1000
               zIndex: 1000,
               title: this.title,
               area: this.width,
               content: box,
               scrollbar: false,
               offset: "150px",
               shadeClose: true,
               btn: false,
               end: function() {
                  me.$emit("update:visible", false);
               }
            };
            this.LayIndex = layer.open(opt);
         } else {
            layer.close(this.LayIndex);
         }
      },
      closeDialog() {
         layer.close(this.LayIndex);
      }
   }
});
</script>
