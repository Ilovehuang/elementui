<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.BusinessHoursManagement" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-businesstime operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-businesstime>
      <vx-container-item :label="LoaderDict.Business.BusinessTime.StartDate" >
         <vx-item-datesinglepicker v-model="FormData.StartDate" :EndTime="FormData.EndDate"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.BusinessTime.StartDate"></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.EndDate" >
         <vx-item-datesinglepicker v-model="FormData.EndDate"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.EndDate"></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.BusinessTime.StartTime" :rule="Rules.StartTime">
         <vx-item-clockpicker v-model="FormData.StartTime" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.BusinessTime.StartTime"></vx-item-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.BusinessTime.EndTime" :rule="Rules.EndTime">
         <vx-item-clockpicker v-model="FormData.EndTime" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.BusinessTime.EndTime"></vx-item-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.BusinessTime.Weekdays">
         <vx-item-check v-model="FormData.Weekdays"  type="WeekData"></vx-item-check>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.BusinessTime.Remark" >
         <vx-item-input type="textarea" rows="5" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.BusinessTime.Remark"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.CompanyId" >
         <vb-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.CompanyId"></vb-select-company >
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-businesstime",
   created(){
      console.log(this)
   },
   Watch:{

   },
   FormData: {
      Id: null,
      StartDate: moment().format("YYYY-MM-DD"),
      EndDate:moment().format("YYYY-MM-DD"),
      Weekdays: [],
      value:"",
      StartTime: moment("2018-08-29T10:00:00").format("HH:mm"),
      EndTime:moment("2018-08-29T22:00:00").format("HH:mm"),
      Remark:null,
      CompanyId:null
   },
   Rules: {
      StartTime: { required: true },
      EndTime:{ required: true },
   }
});
</script>
