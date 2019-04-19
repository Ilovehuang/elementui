<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-physicalzone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-bd-physicalzone>
      <vb-transfer-physicalzone v-model="FormData.SubZones" :values.sync="values"></vb-transfer-physicalzone>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-physicalzoneplugin",
   FormData: {
      Id:"",
      SubZones: null
   }
});
</script>
