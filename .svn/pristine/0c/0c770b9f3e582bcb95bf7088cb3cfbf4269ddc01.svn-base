<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-rpt-chartstyle operate="load" :query="Query" method="select" :result.sync="List"> </vd-rpt-chartstyle>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-chartstyle", {
   template: template,
   props: [
      "value", /// 选中数据的值
      "label" /// 选中数据的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
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
