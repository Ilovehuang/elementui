<template>
   <el-tab-pane v-bind="$attrs">
      <slot></slot>
   </el-tab-pane>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-tab-pane", {
   template: template,
   props: {
   }
});
</script>
