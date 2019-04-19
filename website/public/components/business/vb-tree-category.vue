<template>
   <vx-basic-tree :options="List" labelfield="Name" valuefield="Id" :defaultprops="defaultProps" :currentnode.sync="currentnode">
      <vd-bd-category operate="load" :query="Query" method="tree" :result.sync="List"> </vd-bd-category>
   </vx-basic-tree>
</template>
<script>
Vue.component("vb-tree-category", {
   template: template,
   props: [],
   data() {
      return {
         Query: { root: "true" },
         List: null,
         result: "",
         defaultProps: {
            children: "children",
            label: "Name"
         },
         currentnode: {} /// 当前节点
      };
   },
   watch: {
      /// 层级太多，拿不到select选择的value
      result() {
         console.log(this.result);
         this.$emit("input", this.result);
      },
      currentnode: {
         handler: function(val, oldVal) {
            this.$emit("input", this.currentnode);
         },
         deep: true
      }
   }
});
</script>
