<template>
   <vx-item-transfer :options="List" labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="values">
      <vd-rpt-conditionoption operate="load" :query="Query" method="grid" :result.sync="List"> </vd-rpt-conditionoption>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-conditionoption", {
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
         console.log(this.result);
         this.$emit("input", this.result);
         this.$emit("update:values", this.values);
      }
   }
});
</script>
