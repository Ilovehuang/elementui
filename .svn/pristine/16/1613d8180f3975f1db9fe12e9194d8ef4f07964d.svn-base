<template>
   <vx-basic-tree :options="List" :defaultkeys="defaultkeys" :showcheckbox="showcheckbox" labelfield="Name" valuefield="Id" :defaultprops="defaultProps" :currentnode.sync="currentnode" :treeids.sync="TreeIds" :fulltreeids.sync="FullTreeIds">
      <vd-system-menu operate="load" :trigger="trigger" :query="Query" method="tree" :result.sync="List"> </vd-system-menu>
   </vx-basic-tree>
</template>
<style>
.vb-tree-menu {
   max-height: 260px;
}
</style>
<script>
Vue.component("vm-tree-menu", {
   
   props: ["showcheckbox", "treeids", "fulltreeids"],
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
         currentnode: {}
      };
   },
   computed: {
      TreeIds: {
         get() {
            return this.treeids;
         },
         set(val) {
            this.$emit("update:treeids", val);
         }
      },
      FullTreeIds: {
         get() {
            return this.fulltreeids;
         },
         set(val) {
            this.$emit("update:fulltreeids", val);
         }
      }
   },
   created() {
      var me = this;
      this.$Bus.$on("Form.Tree", function(data) {
         me.trigger = true;
      });
   },
   watch: {
      currentnode: {
         handler: function(val, oldVal) {
            if (!this.showcheckbox) {
               this.$emit("update:values", this.currentnode);
               var gridquery = {};
               var formquery = {};
               gridquery.ParentId = this.currentnode.Id;
               formquery.Id = this.currentnode.Id;
               formquery.Name = this.currentnode.Name;
               this.$Bus.$on("Grid.Reload", gridquery);
               this.$Bus.$on("Form.ParentName", formquery);
            }
         },
         deep: true
      }
   }
});
</script>
