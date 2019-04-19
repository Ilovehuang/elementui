<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportpage operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-reportpage>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportPage.ReportMenuId" :rule="Rules.ReportMenuId">
         <vb-select-reportmenu v-model="FormData.ReportMenuId" :placeholder="LoaderDict.Placeholder.PleaseChoose + LoaderDict.Business.R_ReportPage.ReportMenuId" :label.sync="FormData.MenuName"></vb-select-reportmenu>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportPage.ReportUrl" :rule="Rules.ReportUrl">
         <vx-item-input v-model="FormData.ReportUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportPage.ReportUrl"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-reportpage",
   FormData: {
      Id: null,
      Name: "",
      ReportMenuId: "",
      ReportUrl: "",
      MenuName: "",
      Conditions: null,
      IndexFields: null,
      Charts: null,
      UpdateUserName: "",
      UpdateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      Enabled: 1
   },
   Rules: {
      Name: { required: true },
      ReportMenuId: { required: true },
      ReportUrl: { required: true }
   }
});
</script>
