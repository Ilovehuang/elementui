<template>
   <vx-form-transfer :options="List" labelfield="Name" keyfield="Id" v-model="Value" mode="object" :values.sync="malls">
      <vd-report-chartoption operate="load" :query="Query" method="grid" :result.sync="List"> </vd-report-chartoption>
   </vx-form-transfer>
</template>
<script>
Vue.component("vm-transfer-chartoption", {
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
         malls: []
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            this.$emit("update:values", this.value);
         }
      }
   }
});
</script>
