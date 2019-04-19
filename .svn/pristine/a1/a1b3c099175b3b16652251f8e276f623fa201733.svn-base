<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Mall.Title" width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-device operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-device>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.MallId">
         <vm-select-mall v-model="FormData.MallId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.MallId" :label.sync="FormData.MallName"></vm-select-mall>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.DeviceCode" :rule="Rules.DeviceCode">
         <vx-form-input v-model="FormData.DeviceCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.RemoteCode">
         <vx-form-input v-model="FormData.RemoteCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.RemoteCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.DataClass">
         <vx-form-input v-model="FormData.DataClass" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DataClass"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.IPAddress">
         <vx-form-input v-model="FormData.IPAddress" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.IPAddress"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.DeviceType" >
         <vx-form-input v-model="FormData.DeviceType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceType"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.Location">
         <vx-form-input v-model="FormData.Location" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.Location"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<style lang="less">
</style>
<script>
Vue.component("vm-form-device", {
   data(){
      return {
         FormData: {
            Id:null,
            Enabled: 1,
            MallId: null,
            MallName: null,
            DeviceCode: null,
            IPAddress: null,
            DeviceType: null,
            Location: null,
            RemoteCode: null,
            DataClass: 1,
            CompanyId: null,
            CompanyName: null
         },
         Rules: {
            CompanyId: { required: true },
            MallId: { required: true },
            DeviceCode: { required: true }
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
