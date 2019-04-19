<template>
   <el-tabs v-bind="$attrs">
      <slot></slot>
   </el-tabs>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-tabs", {
   extends: "el-tabs",
   
   props: {
   }
});
</script>
