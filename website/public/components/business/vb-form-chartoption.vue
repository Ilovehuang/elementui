<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ChartOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-chartoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-chartoption>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartOption.Code" :rule="Rules.Code">
         <vx-item-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartOption.Code" :rule="Rules.Code"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartOption.ChartType" :rule="Rules.ChartType">
         <vx-item-input v-model="FormData.ChartType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartOption.ChartType" :rule="Rules.ChartType"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartOption.JsonCode" :rule="Rules.JsonCode">
         <vx-item-input type="textarea" rows="5" v-model="FormData.JsonCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartOption.JsonCode" :rule="Rules.JsonCode"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-chartoption",
   FormData: {
      Id: null,
      Name: null,
      Code: null,
      ChartType: "",
      JsonCode: null,
      Enabled: 1
   },
   Rules: {
      Name: { required: true },
      Code: { required: true },
      ChartType: { required: true },
      JsonCode: { required: true }
   }
});
</script>
