<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Device.DeviceZoneManager" width="600" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <div class="subsetgrid">
         <vm-subset-devicezone></vm-subset-devicezone>
      </div>
      <div class="subsetzoneform">
         <vm-form-subsetzone></vm-form-subsetzone>
      </div>
      <div slot="footer">
         <vx-basic-button type="close" @click="Close"></vx-basic-button>
         <vx-basic-button type="save" btncolor="primary"  @click="Save"></vx-basic-button>
      </div>
   </vx-container-dialog>
</template>
<style lang="less">
.subsetzoneform {
   margin-top: 50px;
}
</style>
<script>
Vue.component("vm-form-devicezone", {
   data(){
      return {
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
            IPAddress: { required: true },
            DeviceType: { required: true },
            Location: { required: true },
            RemoteCode: { required: true },
            DataClass: { required: true }
         }
      }
   },
   methods: {
      //关闭弹窗
      Close(){
         this.Visible = false
         this.$Bus.$emit("DeviceZoneClear.Form");
      },
      //保存，DeviceZone数据库中新增一条数据，同时Device表中对应的DeviceZone字段中新加一个DeviceZoneId
      Save() {
         this.FormData.DeviceZoneCode = this.FormData.DeviceCode + "#" + this.FormData.Vendor;
          this.$Bus.$emit("DeviceZoneSave.Grid", this.FormData);
      }
   },
   created() {
      var me =this
      this.$Bus.$on("DeviceZoneForm.Visible", function( data) {
         console.log("fromdata");
         console.log(data);
         me.FormData.DeviceCode = data.DeviceCode;
         me.FormData.Vendor = data.Vendor;
         me.FormData.DeviceZones = data.DeviceZones;
         me.FormData.Id = data.Id;
      });
   },
   mixins:["defaultBusinessForm"]
});
</script>
