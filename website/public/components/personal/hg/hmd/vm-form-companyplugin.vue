<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title+'-'+'可用图表'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-company operate="save"  :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-company>
      <vm-transfer-chartoption v-model="FormData.ReportCharts" :values.sync="values"></vm-transfer-chartoption>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-companyplugin", {
   props: [
      "autoload",
   ],
   data(){
      return {
         FormData: {
            Id:null,
            ReportCharts: null
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
