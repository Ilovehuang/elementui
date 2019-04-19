<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Mall.Title" width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
            <vd-bd-device operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-device>
            <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
               <vb-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vb-select-company>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.MallId">
               <vb-select-mall v-model="FormData.MallId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.MallId" :label.sync="FormData.MallName"></vb-select-mall>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.DeviceCode" :rule="Rules.DeviceCode">
               <vx-item-input v-model="FormData.DeviceCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceCode"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.RemoteCode">
               <vx-item-input v-model="FormData.RemoteCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.RemoteCode"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.DataClass">
               <vx-item-input v-model="FormData.DataClass" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DataClass"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.IPAddress">
               <vx-item-input v-model="FormData.IPAddress" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.IPAddress"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.DeviceType" >
               <vx-item-input v-model="FormData.DeviceType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceType"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.T_Device.Location">
               <vx-item-input v-model="FormData.Location" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.Location"></vx-item-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Common.Enabled">
               <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
            </vx-container-item>
   </vx-container-dialog>
</template>
<style lang="less">
</style>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-device",
   FormData: {
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
});
</script>
