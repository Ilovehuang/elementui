<template>
   <vx-basic-tree :options="List" :defaultkeys="defaultkeys" :showcheckbox="showcheckbox" :defaultprops="defaultprops" :treeids.sync="treeids" :fulltreeids.sync="fulltreeids">
      <vd-system-role operate="load" :query="Query" method="tree" :result.sync="List"></vd-system-role>
   </vx-basic-tree>
</template>
<script>
Vue.component("vm-tree-role", {
   
   props: ["showcheckbox"],
   data() {
      return {
         Query: { root: { Id: "-", Name: "智慧商业云平台" } },
         List: null,
         result: "",
         defaultprops: {
            children: "children",
            label: "Name"
         },
         defaultkeys: ["-"],
         treeids: [],
         fulltreeids: [],
         currentnode: {}
      };
   },
   watch: {
      currentnode: {
         handler: function(val, oldVal) {
            console.log("currentnode");
            console.log(val);
            this.$emit("input", val);
         },
         deep: true
      },
      treeids: {
         handler: function(val, oldVal) {
            console.log("treeids");
            console.log(val);
            this.$emit("updata:treeids", val);
         },
         deep: true
      },
      fulltreeids: {
         handler: function(val, oldVal) {
            console.log("fulltreeids");
            console.log(val);
            this.$emit("updata:fulltreeids", val);
         },
         deep: true
      }
   }
});
</script>
