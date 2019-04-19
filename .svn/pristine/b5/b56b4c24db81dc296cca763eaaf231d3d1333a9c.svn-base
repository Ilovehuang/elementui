<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.ChartOption" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportpage operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-rpt-reportpage>
      <vm-transfer-chartoption v-model="FormData.Charts"></vm-transfer-chartoption>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-transfer-chartoption", {
   data(){
      return {
         FormData: {
            Id: "",
            Charts: null
         }
      }
   },
   created(){
   },
   watch: {
      SaveTrigger() {
         this.Visible = false;
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
