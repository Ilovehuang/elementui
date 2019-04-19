<template>
   <vx-form-transfer :options="List" labelfield="Label" keyfield="Id" v-model="Value" mode="object" :values.sync="options">
      <vd-rpt-indexoption operate="load" :query="Query" method="grid" :result.sync="List"> </vd-rpt-indexoption>
   </vx-form-transfer>
</template>
<script>
Vue.component("vm-transfer-indexoption", {
   
   props: [
      "value", /// 选中的id
      "values" /// 存放选中数据的数组
   ],
   data() {
      return {
         Query: {},
         List: [],
         result: "",
         options: []
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
