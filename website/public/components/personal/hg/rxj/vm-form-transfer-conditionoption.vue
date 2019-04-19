<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.ConditionFields" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportpage operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-rpt-reportpage>
      <vm-transfer-conditionoption v-model="FormData.Conditions"></vm-transfer-conditionoption>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-transfer-conditionoption", {
   data(){
      return {
         FormData: {
            Id: "",
            Conditions: null
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
