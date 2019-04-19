<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-rpt-chartoption operate="load" :query="Query" method="select" :result.sync="List"> </vd-rpt-chartoption>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-chartoption", {
   
   props: [
      "value", /// 选中数据的值
      "label" /// 选中数据的文字
   ],
   data() {
      return {
         Query: {},
         List: [],
         result: ""
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            console.log("val");
            console.log(val);
            this.$emit("input", val);
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
