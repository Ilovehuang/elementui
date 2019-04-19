<template>
   <vx-item-select :options="List" labelfield="ZoneTypeName" valuefield="Id" v-model="result" :groupfield="groupfield">
      <vd-bd-physicalzone operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-physicalzone>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-physicalzone", {
   template: template,
   props: [],
   data() {
      return {
         Query: {},
         List: null,
         result: "",
         label: "",
         groupfield: "ZoneTypeName"
      };
   },
   watch: {
      /// 层级太多，拿不到select选择的value
      result() {
         this.$emit("update:label", this.List[0].label);
         this.$emit("input", this.result);
      }
   }
});
</script>
