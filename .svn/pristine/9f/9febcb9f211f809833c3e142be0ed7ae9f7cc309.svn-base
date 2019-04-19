<template>
   <div>
      <vx-form-transfer :options="result" labelfield="TagValue" :values.sync="values" v-model="List" mode="object">
      </vx-form-transfer>
      <vd-company-tag operate="load" :result.sync="result" :query="query" :trigger.sync="trigger"></vd-company-tag>
   </div>
</template>
<script>
Vue.component("vm-transfer-tag", {
   
   props: ['value'],
   data() {
      return {
         query: {
            Query: {}
         },
         result: [],
         trigger: true,
         values: [],
         List: []
      };
   },
   watch: {
      List(){
         this.$emit("input",this.List);
      },
      result(){
         console.log(this.result)
      }
   }
});
</script>
