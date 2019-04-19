<template>
   <vx-item-select :options="List" labelfield="DeviceType" valuefield="Id" v-model="result">
      <vd-bd-device operate="load" :query="Query" method="select" :result.sync="List"></vd-bd-device>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-device", {
   template: template,
   props: [

   ],
   data() {
      return {
         Query: {},
         List: null,
         result: ""
      };
   },
    watch: {
      result() {
         console.log(this.result);
         this.$emit("input", this.result);
      }
   }
});
</script>
