<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Business.HolidayManager" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-holiday operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-holiday>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Holiday.HolidayType" :rule="Rules.HolidayType">
         <vx-form-select v-model="FormData.HolidayType" :options="[]" type="holidayType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Holiday.HolidayType"></vx-form-select>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.StartDate" :rule="Rules.StartDate">
         <vx-form-datesinglepicker format="YYYY-MM-DD" v-model="FormData.StartDate"></vx-form-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.EndDate" :rule="Rules.EndDate">
         <vx-form-datesinglepicker format="YYYY-MM-DD" v-model="FormData.EndDate"></vx-form-datesinglepicker>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-holiday", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            StartDate: moment().format("YYYY-MM-DD"),
            EndDate: moment().format("YYYY-MM-DD"),
            HolidayType: ""
         },
         Rules: {
            Name: { required: true },
            StartDate: { required: true },
            EndDate: { required: true },
            HolidayType: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
