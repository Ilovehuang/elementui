<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.IndexFields" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportpage operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-rpt-reportpage>
      <vm-transfer-indexoption v-model="FormData.IndexFields"></vm-transfer-indexoption>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-transfer-indexoption", {
   data(){
      return {
         FormData: {
            Id: "",
            IndexFields: null
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
