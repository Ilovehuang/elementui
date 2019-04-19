<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.S_User.Title" width="780" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-user operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-user>
      <vx-container-item :label="LoaderDict.Business.S_User.UserCode" :rule="Rules.UserCode">
         <vx-form-input v-model="FormData.UserCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_User.UserCode" :rule="Rules.UserCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_User.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_User.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_User.UserPass" :rule="Rules.UserPass">
         <vx-form-input v-model="FormData.UserPass" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_User.UserPass" :rule="Rules.UserPass"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :label.sync="FormData.CompanyName" :rule="Rules.CompanyId"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_User.RoleId" :rule="Rules.RoleId">
         <vm-select-role v-model="FormData.RoleId" :rule="Rules.RoleId"></vm-select-role>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_User.UserGroupId" :rule="Rules.UserGroupId">
         <vm-select-usergroup v-model="FormData.UserGroupId" :rule="Rules.UserGroupId"></vm-select-usergroup>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_User.Email" :rule="Rules.Email">
         <vx-form-input v-model="FormData.Email" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_User.Email" :rule="Rules.Email"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-user", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            UserCode: null,
            UserPass: null,
            CompanyId: null,
            CompanyName: null,
            RoleId: null,
            UserGroupId: null,
            Email: null,
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            UserCode: { required: true },
            CompanyId: { required: true },
            RoleId: { required: true },
            UserGroupId: { required: true },
            UserPass: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
