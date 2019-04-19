<template>
   <vx-basic-tree :options="List" labelfield="Name"  :defaultkeys="defaultkeys" valuefield="Id" :defaultprops="defaultProps" :currentnode.sync="currentnode" v-model="result">
      <vd-bd-location operate="load"  :autoload="Autoload" :trigger="trigger" :query="Query" method="tree" :result.sync="List"></vd-bd-location>
   </vx-basic-tree>

</template>
<script>
var Event = new Vue();
Vue.component("vb-tree-location", {
   template: template,
   props: [],
   data() {
      return {
         // Query: { root: "true" },
         Query: { root: { Id: "-", Name: "智慧商业云平台" } },
         List: null,
         result: "",
         defaultProps: {
            children: "children",
            label: "Name"
         },
         defaultkeys:["-"],
         currentnode: {}, /// 当前节点，
         trigger: false,
      };
   },
   created(){
      var me = this;
      Event.$on("Form.Tree", function (data) {
         console.log("data++++++++");
         console.log(data);
         me.trigger = true
      });
   },
   watch: {
      result() {
         this.$emit("input", this.result);
      },
      currentnode: {
         handler: function(val, oldVal) {
            this.$emit("update:values", this.currentnode);
            var gridquery ={}
            var formquery = {}
            gridquery.ParentId = this.currentnode.Id
            formquery.Id = this.currentnode.Id
            formquery.Name = this.currentnode.Name
            Event.$emit("Grid.Reload", gridquery);
            Event.$emit("Form.ParentName", formquery);
         },
         deep: true
      }
   }
});
</script>
