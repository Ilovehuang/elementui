<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Business.ActivityManager" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      {{LoaderDict.Pages.Business.ActivityManagement}}
      <vd-company-activity operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-activity>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="'关联案场'" :rule="Rules.MallId"> -->
         <!-- <vm-select-mall v-model="FormData.MallId" type="company"></vm-select-mall> -->
      <!-- </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.StartDate" :rule="Rules.StartDate">
         <vx-form-datesinglepicker format="YYYY-MM-DD" v-model="FormData.StartDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.StartDate"></vx-form-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.EndDate" :rule="Rules.EndDate">
         <vx-form-datesinglepicker format="YYYY-MM-DD" v-model="FormData.EndDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.EndDate"></vx-form-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Activity.StartHour" :rule="Rules.StartHour">
         <vx-form-clockpicker v-model="FormData.StartHour" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.StartHour"></vx-form-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Activity.EndHour" :rule="Rules.EndHour">
         <vx-form-clockpicker v-model="FormData.EndHour" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.EndHour"></vx-form-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-form-input v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-activity", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            StartDate: moment().format("YYYY-MM-DD"),
            EndDate: moment().format("YYYY-MM-DD"),
            StartHour: moment("2018-08-29T10:00:00").format("HH:mm"),
            EndHour: moment("2018-08-29T22:00:00").format("HH:mm"),
            Remark: "",
            CompanyId: "",
            MallId: ""
         },
         Rules: {
            Name: { required: true },
            MallId: { required: true },
            StartDate: { required: true },
            EndDate: { required: true },
            StartHour: { required: true },
            EndHour: { required: true }
         }
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
