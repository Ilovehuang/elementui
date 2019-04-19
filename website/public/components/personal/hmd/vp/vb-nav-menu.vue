<template>
   <vx-nav-navmenu :data="result" :color="color" :fontcolor="fontcolor" :background="background">
      <vd-system-menu operate="load" :trigger.sync="trigger" :query="Query" method="tree" :result.sync="result"> </vd-system-menu>
   </vx-nav-navmenu>
</template>
<script>
Vue.component("vb-nav-menu", {
   template: template,
   props: ["color", "fontcolor", "background"],
   data() {
      return {
         Query: {},
         result: "",
         trigger: false
      };
   },
   created() {
      var me = this;
   },
   watch: {
      result() {
         var href = location.pathname;
         this.result.forEach(element => {
            element.children.forEach(element2 => {
               if (href.indexOf(element2.PageUrl) >= 0) {
                  this.$Bus.$emit("Form.Tree", {
                     Tree: [element.Name, element2.Name]
                  });
               }
            });
         });
      }
   }
});
</script>
