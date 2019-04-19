<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.ChartOption" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-chartoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-rpt-chartoption>
      <vm-transfer-chartstyle v-model="FormData.ChartStyles"></vm-transfer-chartstyle>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-transfer-chartstyle", {
   data(){
      return {
         FormData: {
            Id: "",
            ChartStyles: []
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
