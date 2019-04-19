<template>
   <vx-container-dialog :form="FormData" :title="LoaderDict.Business.S_UserGroup.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-usergroup operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-usergroup>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :label.sync="FormData.CompanyName" :rule="Rules.CompanyId"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_UserGroup.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_UserGroup.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_UserGroup.GroupLevel">
         <vx-form-input v-model="FormData.GroupLevel"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-usergroup", {
   data() {
      return {
         FormData: {
            Id: "",
            Name: null,
            CompanyId: null,
            CompanyName: null,
            GroupLevel: null
         },
         Rules: {
            Name: { required: true },
            CompanyId: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
