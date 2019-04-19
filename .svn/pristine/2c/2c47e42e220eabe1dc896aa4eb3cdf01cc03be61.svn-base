<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Device.DeviceZoneManager" width="600" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <div class="subsetgrid">
         <vb-subset-devicezone></vb-subset-devicezone>
      </div>
      <div class="subsetzoneform">
         <vb-form-subsetzone></vb-form-subsetzone>
      </div>
      <div slot="footer">
         <vx-basic-button type="close" @click="Close"></vx-basic-button>
         <vx-basic-button type="save" btncolor="primary"  @click="Save"></vx-basic-button>
      </div>
   </vx-container-dialog>
</template>
<style>
.subsetzoneform {
   margin-top: 50px;
}
</style>
<script>
var Event = new Vue();
$VueFactory.businessForm({
   template: template,
   name: "vb-form-devicezone",
   created() {
      var me =this
      Event.$on("DeviceZoneForm.Visible", function(data) {
         me.FormData.DeviceCode = data.DeviceCode;
         me.FormData.Vendor = data.Vendor;
         me.FormData.DeviceZones = data.DeviceZones;
         me.FormData.Id = data.Id;
      });
   },
   methods: {
      //关闭弹窗
      Close(){
         this.Visible = false
         Event.$emit("DeviceZoneClear.Form",1);
      },
      //保存，DeviceZone数据库中新增一条数据，同时Device表中对应的DeviceZone字段中新加一个DeviceZoneId
      Save() {
         this.FormData.DeviceZoneCode = this.FormData.DeviceCode + "#" + this.FormData.Vendor;
          Event.$emit("DeviceZoneSave.Grid", this.FormData);
      }
   },
   FormData: {
      Enabled: 1,
      MallId: null,
      MallName: null,
      DeviceCode: null,
      IPAddress: null,
      Location:null,
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
      IPAddress: { required: true },
      DeviceType: { required: true },
      Location: { required: true },
      RemoteCode: { required: true },
      DataClass: { required: true }
   }
});
</script>
