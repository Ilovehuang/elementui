<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.HolidayManagement" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-holiday operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-holiday>
      <vx-container-item :label="LoaderDict.Business.Name" >
         <vx-item-input  v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Holiday.HolidayType" >
         <vx-item-input  v-model="FormData.HolidayType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Holiday.HolidayType"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Holiday.StartDate" >
         <vx-item-datesinglepicker format="YYYY-MM-DD" v-model="FormData.StartDate" ></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Holiday.EndDate" >
         <vx-item-datesinglepicker format="YYYY-MM-DD" v-model="FormData.EndDate" ></vx-item-datesinglepicker>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-holiday",
   FormData: {
      Id: null,
      Name:null,
      StartDate:moment().format("YYYY-MM-DD"),
      EndDate:moment().format("YYYY-MM-DD"),
      HolidayType:""
   },
   Rules: {
   }
});
</script>
