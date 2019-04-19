<template>
   <vx-basic-tree :options="List" labelfield="Name"  :defaultkeys="defaultkeys" valuefield="Id" :defaultprops="defaultProps" :currentnode.sync="currentnode" v-model="result">
      <vd-bd-location operate="load"  :trigger="trigger" :query="Query" method="tree" :result.sync="List"></vd-bd-location>
   </vx-basic-tree>

</template>
<script>
Vue.component("vb-tree-location", {
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
         defaultkeys:["-"],
         currentnode: {}, /// 当前节点，
         trigger: false,
      };
   },
   created(){
      var me = this;
      PubSub.subscribe("Form.Tree", function (msg, data) {
         console.log("data");
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
            PubSub.publish("Grid.Reload", gridquery);
            PubSub.publish("Form.ParentName", formquery);
         },
         deep: true
      }
   }
});
</script>
