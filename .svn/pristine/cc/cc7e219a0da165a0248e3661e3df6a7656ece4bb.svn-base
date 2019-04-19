<template>
   <div>
      <vx-item-transfer :options="result" labelfield="TagValue" :values.sync="values" v-model="List" mode="object">
      </vx-item-transfer>
      <vd-bd-tag operate="load" :result.sync="result" :query="query" :trigger.sync="trigger"></vd-bd-tag>
   </div>
</template>
<script>
Vue.component("vb-transfer-tag", {
   template: template,
   props: [],
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
      result(){
         console.log(this.result)
      }
   }
});
</script>
