<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ChartStyle.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-chartstyle operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-chartstyle>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Company.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartStyle.Code" :rule="Rules.Code">
         <vx-item-input v-model="FormData.Code" :rule="Rules.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.Code"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartStyle.Property" :rule="Rules.Property">
         <vx-item-input v-model="FormData.Property" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.Property"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartStyle.CodeType" :rule="Rules.CodeType">
         <vx-item-input v-model="FormData.CodeType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.CodeType"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartStyle.JsonCode" :rule="Rules.JsonCode">
         <vx-item-input type="textarea" rows="5" v-model="FormData.JsonCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.CodeType"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-chartstyle",
   FormData: {
      Id: null,
      Name: null,
      Code: null,
      Property: null,
      CodeType: "",
      JsonCode: null,
      Enabled: 1
   },
   Rules: {
      Name: { required: true },
      Code: { required: true },
      Property: { required: true },
      CodeType: { required: true },
      JsonCode: { required: true }
   }
});
</script>
