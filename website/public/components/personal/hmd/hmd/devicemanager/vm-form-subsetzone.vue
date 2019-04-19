<template>
   <div>
      <vd-company-devicezone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-devicezone>
      <vx-container-item label='主机码' :rule="Rules.DeviceCode">
         <vx-form-input v-model="FormData.DeviceCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item label='终端码' :rule="Rules.DeviceZoneCode">
         <vx-form-input v-model="FormData.Vendor" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_DeviceZone.DeviceZoneCode"></vx-form-input>
      </vx-container-item>
      <!-- <div style=" overflow:scroll; height:200px;"> -->
      <vx-container-item :label="LoaderDict.Business.T_Device.DataClass" :rule="Rules.DataClass">
         <vx-form-select v-model="FormData.DataClass" :options="[]" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DataClass" type="DataClass"></vx-form-select>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.RemoteCode">
         <vx-form-input v-model="FormData.RemoteCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.RemoteCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.IPAddress">
         <vx-form-input v-model="FormData.IpAddress" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.IPAddress"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.Location">
         <vx-form-input v-model="FormData.Location" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.Location"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.T_Mall.MallLocation">
         <vx-form-location  :width="200" :clickhide="true" :height="400" longitude.sync="116.394801" latitude.sync="40.013214"></vx-form-location>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
      <!-- </div> -->
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
Vue.component("vm-form-subsetzone", {
   data() {
      return {
         FormData: {
            Id: null,
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
            HostDeviceId: null
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
      };
   },
   created() {
      var me = this;
      //接收Device发过来的DeviceCode,Vendor显示在Form界面上
      this.$Bus.$on("DeviceZoneForm.Visible", function(data) {
         me.FormData.DeviceCode = data.DeviceCode;
         me.FormData.Vendor = data.Vendor;
         me.FormData.HostDeviceId = data.Id;
      });

      this.$Bus.$on("DeviceZoneSave.Grid", function(data) {
         me.$set(me.Query, "Query", data);
         me.FormData.DeviceZoneCode = me.FormData.DeviceCode + "#" + me.FormData.Vendor;
         console.log("DeviceZoneSave+++");
         console.log(me.FormData);
         me.$set(me.Query, "From", me.FormData);
         me.method = "save";
         me.SaveTrigger = true;
      });

      this.$Bus.$on("DeviceZoneModify.Form", function(data) {
         me.FormData.DeviceCode = data.DeviceZoneCode.split("#")[0];
         me.FormData.Vendor = data.DeviceZoneCode.split("#")[1];
         me.FormData.DataClass = Number(data.DataClass);
         me.FormData.RemoteCode = data.RemoteCode;
         me.FormData.IpAddress = data.IpAddress;
         me.FormData.Location = data.Location;
         me.FormData.Id = data.Id;
      });

      this.$Bus.$on("DeviceZoneClear.Form", function(data) {
         me.FormData.DataClass = null;
         me.FormData.RemoteCode = null;
         me.FormData.IpAddress = null;
         me.FormData.Location = null;
      });
   },
   mixins: ["defaultBusinessForm"]
});
</script>
