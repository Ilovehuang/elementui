<template>
   <div >
      <vd-bd-devicezone operate="save" :autoload="autoload" :method="method" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-devicezone>
      <vx-container-item :label="LoaderDict.Business.T_Device.DeviceCode" :rule="Rules.DeviceCode">
         <vx-item-input disabled="true" v-model="FormData.DeviceCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceCode"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_DeviceZone.DeviceZoneCode" :rule="Rules.DeviceZoneCode">
         <vx-item-input v-model="FormData.Vendor" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_DeviceZone.DeviceZoneCode"></vx-item-input>
      </vx-container-item>
      <div style=" overflow:scroll; height:200px;">
         <vx-container-item :label="LoaderDict.Business.T_Device.DataClass" :rule="Rules.DataClass">
            <vx-item-select v-model="FormData.DataClass" :options="[]" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DataClass" type="DataClass"></vx-item-select>
         </vx-container-item>
         <vx-container-item :label="LoaderDict.Business.T_Device.RemoteCode">
            <vx-item-input v-model="FormData.RemoteCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.RemoteCode"></vx-item-input>
         </vx-container-item>
         <vx-container-item :label="LoaderDict.Business.T_Device.IPAddress">
            <vx-item-input v-model="FormData.IpAddress" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.IPAddress"></vx-item-input>
         </vx-container-item>
         <vx-container-item :label="LoaderDict.Business.T_Device.Location">
            <vx-item-input v-model="FormData.Location" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.Location"></vx-item-input>
         </vx-container-item>
         <vx-container-item :label="LoaderDict.Common.Enabled">
            <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
         </vx-container-item>
      </div>
   </div>
</template>
<style>
.btn {
   margin-left: 130px;
}
.btn .save {
   margin-right: 100px;
   display: inline-block;
}
.btn .clear {
   display: inline-block;
}
</style>
<script>
var Event = new Vue();
$VueFactory.businessForm({
   template: template,
   name: "vb-form-subsetzone",
   created() {
      var me = this;
      //接收Device发过来的DeviceCode,Vendor显示在Form界面上
      Event.$on("DeviceZoneForm.Visible", function(data) {
         me.FormData.DeviceCode = data.DeviceCode;
         me.FormData.Vendor = data.Vendor;
         me.FormData.HostDeviceId = data.Id
      });

      Event.$on("DeviceZoneSave.Grid", function(data) {
         me.$set(me.Query, "Query", data);
         me.FormData.DeviceZoneCode = me.FormData.DeviceCode + "#" + me.FormData.Vendor;
         console.log("DeviceZoneSave+++")
         console.log(me.FormData)
         me.$set(me.Query, "From", me.FormData);
         me.method = "save";
         me.SaveTrigger = true;
      });

      Event.$on("DeviceZoneModify.Form", function(data) {
         me.FormData.DeviceCode = data.DeviceZoneCode.split("#")[0];
         me.FormData.Vendor = data.DeviceZoneCode.split("#")[1];
         me.FormData.DataClass = Number(data.DataClass);
         me.FormData.RemoteCode = data.RemoteCode;
         me.FormData.IpAddress = data.IpAddress;
         me.FormData.Location = data.Location;
         me.FormData.Id = data.Id;
      });

      Event.$on("DeviceZoneClear.Form", function(data) {
         me.FormData.DataClass = null;
         me.FormData.RemoteCode = null;
         me.FormData.IpAddress = null;
         me.FormData.Location = null;
      });
   },
   FormData: {
      Enabled: 1,
      MallId: null,
      MallName: null,
      DeviceCode: null,
      IPAddress: null,
      DeviceType: null,
      Location: null,
      RemoteCode: null,
      DataClass: null,
      Vendor: null,
      CompanyId: null,
      CompanyName: null,
      DeviceZones: null,
      HostDeviceId:null
   },
   Rules: {
      CompanyId: { required: true },
      MallId: { required: true },
      DeviceCode: { required: true },
      IpAddress: { required: true },
      DeviceType: { required: true },
      Location: { required: true },
      RemoteCode: { required: true },
      DataClass: { required: true }
   }
});
</script>
