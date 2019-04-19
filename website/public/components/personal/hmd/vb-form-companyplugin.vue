<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-company operate="save" :autoload = "autoload" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-bd-company>
      <vb-transfer-chartoption v-model="FormData.ReportPages" :values.sync="values"></vb-transfer-chartoption>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-companyplugin",
   FormData: {
      ReportPages: null
   }
});
</script>
