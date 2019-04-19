<template>
   <vx-item-transfer :options="List" labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="options">
      <vd-rpt-chartoption operate="load" :query="Query" method="grid" :result.sync="List"> </vd-rpt-chartoption>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-chartoption", {
   template: template,
   props: [
      "value", /// 选中的id
      "values" /// 存放选中数据的数组
   ],
   data() {
      return {
         Query: {},
         List: null,
         result: "",
         options: []
      };
   },
   watch: {
      result() {
         console.log(this.result);
         this.$emit("input", this.result);
         this.$emit("update:values", this.options);
      }
   }
});
</script>
