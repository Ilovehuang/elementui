<template>
   <vx-form-transfer :options="List" labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="options">
      <vd-rpt-conditionoption operate="load" :query="Query" method="grid" :result.sync="List"> </vd-rpt-conditionoption>
   </vx-form-transfer>
</template>
<script>
Vue.component("vm-transfer-conditionoption", {
   
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
   created() {
      console.log(22);
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
