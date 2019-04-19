<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Business.BusinessTime" width="600" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-businesstime operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-businesstime>
      <vx-container-item :label="LoaderDict.Business.StartDate" :rule="Rules.StartDate">
         <vx-form-daterangepicker v-model="FormData.StartDate" :EndTime="FormData.EndDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.StartDate"></vx-form-daterangepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.EndDate" :rule="Rules.EndDate">
         <vx-form-daterangepicker v-model="FormData.EndDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.EndDate"></vx-form-daterangepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_BusinessTime.StartTime" :rule="Rules.StartTime">
         <vx-form-clockpicker v-model="FormData.StartTime" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_BusinessTime.StartTime"></vx-form-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_BusinessTime.EndTime" :rule="Rules.EndTime">
         <vx-form-clockpicker v-model="FormData.EndTime" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_BusinessTime.EndTime"></vx-form-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_BusinessTime.Weekdays" :rule="Rules.Weekdays">
         <vx-form-check :stringlist.sync="FormData.Weekdays" mode="object" type="WeekData"></vx-form-check>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-form-input type="textarea" rows="5" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-businesstime", {
   data() {
      return {
         FormData: {
            Id: null,
            StartDate: moment().format("YYYY-MM-DD"),
            EndDate: moment().format("YYYY-MM-DD"),
            Weekdays: "",
            StartTime: moment("2018-08-29T10:00:00").format("HH:mm"),
            EndTime: moment("2018-08-29T22:00:00").format("HH:mm"),
            Remark: null
         },
         Rules: {
            StartDate: { required: true },
            EndDate: { required: true },
            Weekdays: { required: true },
            StartTime: { required: true },
            EndTime: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
