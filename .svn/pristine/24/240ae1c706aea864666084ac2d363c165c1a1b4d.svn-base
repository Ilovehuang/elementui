<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportPage.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportpage operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-reportpage>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportPage.MenuName" :rule="Rules.ReportMenuId">
         <vm-select-reportmenu v-model="FormData.ReportMenuId" :placeholder="LoaderDict.Placeholder.PleaseChoose + LoaderDict.Business.R_ReportPage.MenuName" :label.sync="FormData.MenuName"></vm-select-reportmenu>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportPage.ReportUrl" :rule="Rules.ReportUrl">
         <vx-form-input v-model="FormData.ReportUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportPage.ReportUrl"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportPage.ReportIcon">
         <vx-form-input v-model="FormData.ReportIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportPage.ReportIcon"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-form-input v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-reportpage", {
   data(){
      return {
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
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
