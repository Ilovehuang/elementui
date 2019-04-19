<template>
   <vx-item-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="malls">
      <vd-bd-mall operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-mall>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-mall", {
   template: template,
   props: ["value", "values"],
   data() {
      return {
         Query: {},
         List: null,
         result: "",
         malls: []
      };
   },
   watch: {
      result() {
         console.log(this.value)
         this.$emit("input", this.result);
         this.$emit("update:values", this.malls);
      }
   }
});
</script>
