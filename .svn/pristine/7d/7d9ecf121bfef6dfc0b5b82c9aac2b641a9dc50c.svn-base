
<template>
   <div class="vx-nav-breadcrumb">
      <el-breadcrumb  :separator-class="separator">
         <template v-for="(item,index) in list">
           <el-breadcrumb-item :key="index">
              <a :href="item['url']">
            {{item[keyName]}}</a></el-breadcrumb-item>
         </template>
      </el-breadcrumb>
   </div>
</template>
<style lang="less">
.vx-nav-breadcrumb a{
   font-weight: 500
}
</style>
<script>
Vue.component("vx-nav-breadcrumb", {
   template: template,
   props: {
      "list":{
         default:function(){ return [] }
      },//列表
      "separator":{
         default:"el-icon-arrow-right"
      },//传入的图标icon
      "keyName":{
         default:"Name"
      }//Value键
   },
   data() {
      return {
      };
   },
   mounted() {

   },
   methods:{
   }
});
</script>
