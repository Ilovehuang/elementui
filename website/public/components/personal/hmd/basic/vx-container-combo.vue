<template>
   <div class="vx-container-combo">
      <div class="wrap flex">
         <div class="leftslot" v-show="leftvisible" :style="{'background':leftbackground,'width':leftwidth}">
            <slot name="leftslot"></slot>
         </div>
         <div class="center">
            <slot></slot>
         </div>
         <div class="rightslot" v-show="rightvisible" :style="{'background':rightbackground,'width':rightwidth}">
            <slot name="rightslot"></slot>
         </div>
      </div>
   </div>
</template>
<style lang="less">
.vx-container-combo {
   .wrap {
      width: 100%;
   }

   .flex {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -moz-box;
   }

   .flex .center {
      -webkit-box-flex: 1;
      box-flex: 1;
      -moz-box-flex: 1;
   }

}
</style>
<script>
Vue.component("vx-container-combo", {
   template: template,
   props: {
      "leftvisible":{
         default:true,
         type:Boolean
      }, //下拉slot所在得位置(前后)
      "rightvisible":{
         default:true,
         type:Boolean
      }, //图标slot所在得位置
      "leftbackground":{
         default:""
      }, //左边背景颜色
      "rightbackground":{
         default:""
      }, //右边背景颜色
      "leftwidth":{
         default:""
      }, //左边div宽度
      "rightwidth":{
         default:""
      } //右边div宽度
   },
   data() {
      return {}
   },
   computed: {}
});
</script>
