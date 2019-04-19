<template>
   <vx-item-select :options="List" labelfield="Label" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-rpt-indexoption operate="load" :query="Query" method="select" :result.sync="List"> </vd-rpt-indexoption>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-indexoption", {
   template: template,
   props: [
      "value", /// 选中返回的值
      "label" /// 选中返回的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
         result: ""
      };
   },
   created() {
      console.log(11);
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
