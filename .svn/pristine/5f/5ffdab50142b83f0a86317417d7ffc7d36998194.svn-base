<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-rpt-reportmenu operate="load" :query="Query" method="select" :result.sync="List"> </vd-rpt-reportmenu>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-reportmenu", {
   template: template,
   props: [
      "value", /// 选中返回的值
      "label" /// 选中返回的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
         label: ""
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
