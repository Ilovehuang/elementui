<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-company operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-bd-company>
      <vb-transfer-mall v-model="FormData.MallIds" :values.sync="FormData.Malls"></vb-transfer-mall>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-transfer-mall",
   FormData: {
      Id: null,
      Name: "",
      Malls: [],
      MallIds: []
   },
   Rules: {
      Name: { required: true }
   }
});
</script>
