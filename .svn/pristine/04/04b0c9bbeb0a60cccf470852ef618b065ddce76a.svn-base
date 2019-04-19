<template>
   <vx-basic-tree :options="List" :defaultkeys="defaultkeys" labelfield="Name" valuefield="Id" :defaultprops="defaultProps" :currentnode.sync="currentnode" v-model="result">
      <vd-system-category operate="load" :trigger="trigger" :query="Query" method="tree" :result.sync="List"> </vd-system-category>
   </vx-basic-tree>
</template>
<script>
Vue.component("vm-tree-category", {
   template: template,
   props: [],
   data() {
      return {
         Query: { root: { Id: "-", Name: "智慧商业云平台" } },
         List: null,
         result: "",
         defaultProps: {
            children: "children",
            label: "Name"
         },
         defaultkeys: ["-"],
         trigger: false,
         currentnode: {} /// 当前节点
      };
   },
   created() {
      var me = this;
      this.$Bus.$on("Form.Tree", function(data) {
         me.trigger = true;
      });
   },
   watch: {
      result() {
         this.$emit("input", this.result);
      },
      currentnode: {
         handler: function(val, oldVal) {
            this.$emit("update:values", this.currentnode);
            var gridquery = {};
            var formquery = {};
            gridquery.ParentId = this.currentnode.Id;
            formquery.Id = this.currentnode.Id;
            formquery.Name = this.currentnode.Name;
            this.$Bus.$emit("Grid.Reload", gridquery);
            this.$Bus.$emit("Form.ParentName", formquery);
         },
         deep: true
      }
   }
});
</script>
