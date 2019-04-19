<template>
   <vx-nav-navmenu :data="result" :color="color" :fontcolor="fontcolor" :background="background">
      <vd-system-menu operate="load" :trigger.sync="trigger" :query="Query" method="tree" :result.sync="result"> </vd-system-menu>
   </vx-nav-navmenu>
</template>
<script>
Vue.component("vm-nav-menu", {
   
   props: ["color", "fontcolor", "background"],
   data() {
      return {
         Query: {},
         result: "",
         trigger: false
      };
   },
   watch: {
      result() {
         console.log(this.result);
      }
   }
});
</script>
