<template>
   <div class="page-content">
      <el-card class="box-card">
         <slot></slot>
      </el-card>
   </div>
</template>
<style lang="less">
.page-content {
   padding: 15px;
}
</style>
<script>
Vue.component("vp-layout-content", {
   template: template
});
</script>
