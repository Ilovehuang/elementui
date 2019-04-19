<template>
   <vx-item-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="values">
      <vd-bd-physicalzone operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-physicalzone>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-physicalzone", {
   template: template,
   props: ["values"],
   data() {
      console.log(22)
      return {
         Query: {},
         List: null,
         result: ""
      };
   },
   created() {
      console.log(22);
   },
   watch: {
      result() {
         var arr = []
         this.$emit("input", this.result);
         this.values.forEach(function(item) {
            var obj ={}
            obj.Id = item.Id
            obj.Name = item.Name
            arr.push(obj)
         })
         this.$emit("update:values", arr);
      }
   }
});
</script>
