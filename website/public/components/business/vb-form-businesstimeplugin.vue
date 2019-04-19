<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.BusinessHoursManagement" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-businesstime operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-businesstime>
      <vb-transfer-mall v-model="FormData.CommonyId" ></vb-transfer-mall>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-businesstimeplugin",
   FormData: {
      Id: null,
      CommonyId: ""
   },
   Rules: {
      Name: { required: true }
   }
});
</script>
