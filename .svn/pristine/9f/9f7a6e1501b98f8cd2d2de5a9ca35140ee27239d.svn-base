<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="result">
      <vd-bd-fencezone operate="load" :query="Query" method="select" :result.sync="List"></vd-bd-fencezone>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-fencezone", {
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
      /// 层级太多，拿不到select选择的value
      result() {
         console.log(this.result);
         this.$emit("input", this.result);
      }
   }
});
</script>
