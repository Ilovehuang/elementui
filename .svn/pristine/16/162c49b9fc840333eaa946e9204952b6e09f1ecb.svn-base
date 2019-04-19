<template>
   <vx-view-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Business.MallUpdateLog" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vx-container-item :label="LoaderDict.Business.T_Tag.TagClass">
         <vx-form-input v-model="FormData.Date"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Company.Name">
         <vx-form-input v-model="FormData.CompanyName"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name">
         <vx-form-input v-model="FormData.MallName"></vx-form-input>
      </vx-container-item>
      <vx-container-item v-for="(item, key) in FormData.Updates" :key="item" :label="key">
         <vx-form-input v-model="item"></vx-form-input>
      </vx-container-item>
   </vx-view-dialog>
</template>
<script>
Vue.component("vm-form-mallupdate", {
   data() {
      return {
         FormData: {
            Id: null,
            Date: null,
            MallId: null,
            Updates: null
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
