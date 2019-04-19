<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.ActivityManagement" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-activity operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-activity>
      <vx-container-item :label="LoaderDict.Business.Name" >
         <vx-item-input  v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.StartDate" >
         <vx-item-datesinglepicker format="YYYY-MM-DD" v-model="FormData.StartDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.StartDate"></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.EndDate" >
         <vx-item-datesinglepicker format="YYYY-MM-DD" v-model="FormData.EndDate" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.EndDate"></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.StartHour" >
         <vx-item-clockpicker v-model="FormData.StartHour" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.StartHour"></vx-item-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.EndHour" >
         <vx-item-clockpicker v-model="FormData.EndHour" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.EndHour"></vx-item-clockpicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Activity.Remark" >
         <vx-item-input  v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Activity.Remark"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.CompanyId" >
         <vb-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.CompanyId"></vb-select-company >
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-activity",
   FormData: {
      Id: null,
      Name:null,
      StartDate:moment().format("YYYY-MM-DD"),
      EndDate:moment().format("YYYY-MM-DD"),
      StartHour:moment("2018-08-29T10:00:00").format("HH:mm"),
      EndHour:moment("2018-08-29T22:00:00").format("HH:mm"),
      Remark:"",
      CompanyId:""
   },
   Rules: {
   }
});
</script>
