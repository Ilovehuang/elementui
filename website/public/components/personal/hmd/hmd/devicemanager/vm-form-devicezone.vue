<template>
   <vx-container-dialog :form="FormData" :rules="Rules" title='采集终端管理' width="1100" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <div class="subsetgrid">
         <span class="devicegird">子设备列表</span>
         <vm-subset-devicezone></vm-subset-devicezone>
      </div>
      <div class="subsetzoneform">
         <span class="devicezonemanager">添加/修改子设备</span>
         <vm-form-subsetzone></vm-form-subsetzone>
      </div>
      <div slot="footer">
         <vx-basic-button type="close" @click="Close"></vx-basic-button>
         <vx-basic-button type="save" btncolor="primary" @click="Save"></vx-basic-button>
      </div>
   </vx-container-dialog>
</template>
<style>
.subsetgrid{
   float: left;
}
.subsetzoneform{
   float: right;
   margin-right: 20px;
}
/* .subsetzoneform {
   margin-top: 50px;
} */
</style>
<script>
Vue.component("vm-form-devicezone", {
   data() {
      return {
         FormData: {
            Id: null,
            Enabled: 1,
            MallId: null,
            MallName: null,
            DeviceCode: null,
            IPAddress: null,
            Location: null,
            DeviceType: null,
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
            DeviceCode: { required: true }
         }
      };
   },
   created() {
      var me = this;
      this.$Bus.$on("DeviceZoneForm.Visible", function(data) {
         console.log("fromdata");
         console.log(data);
         me.FormData.DeviceCode = data.DeviceCode;
         me.FormData.Vendor = data.Vendor;
         me.FormData.DeviceZones = data.DeviceZones;
         me.FormData.Id = data.Id;
      });
   },
   methods: {
      //关闭弹窗
      Close() {
         this.Visible = false;
         this.$Bus.$emit("DeviceZoneClear.Form");
      },
      //保存，DeviceZone数据库中新增一条数据，同时Device表中对应的DeviceZone字段中新加一个DeviceZoneId
      Save() {
         this.FormData.DeviceZoneCode = this.FormData.DeviceCode + "#" + this.FormData.Vendor;
         this.$Bus.$emit("DeviceZoneSave.Grid", this.FormData);
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
