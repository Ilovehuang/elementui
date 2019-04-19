<template>
   <vx-form-select :options="List" labelfield="DeviceType" valuefield="Id" v-model="result">
      <vd-company-device operate="load" :query="Query" method="select" :result.sync="List"></vd-company-device>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-device", {
   
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
