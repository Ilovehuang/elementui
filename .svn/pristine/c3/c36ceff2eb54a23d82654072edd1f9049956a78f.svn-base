<template>
   <vx-item-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="values">
      <vd-bd-location operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-location>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-location", {
   template: template,
   props: ["values"],
   data() {
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
      /// 层级太多，拿不到select选择的value
      result() {
         console.log(this.result)
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
