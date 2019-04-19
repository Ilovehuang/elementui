<template>
   <vx-view-datatable :options="Options" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-devicezone operate="load" :autoload="autoload" :method="method" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-devicezone>
      <vd-bd-devicezone operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-devicezone>
   </vx-view-datatable>
</template>

<script>
var Event = new Vue();
$VueFactory.businessGrid({
   template: template,
   props: ["autoload"],
   name: "vb-subset-devicezone",
   created() {
      var me = this;
      //点击采集区域管理时候把当前行数据发过来,把这个Device下面的DeviceZone显示出来
      Event.$on("DeviceZone.Grid", function(data) {
         me.Query = data;
         let DeviceZones = data.DeviceZones;
         me.$set(me.Query, "DeviceZones", DeviceZones);
         me.method = "linkeddevicezone";
         me.LoadTrigger = true;
         me.autoload = true;
      });
   },
   methods: {
      //删除Device表中的数据，同时把Device表中Devicezones中关联的DeviceZoneId删掉
      deletezone() {
         let DeviceZones = this.Query.DeviceZones;
         for (let i = DeviceZones.length-1; i >=  0; i--) {
            console.log("this.RowData.Id+++")
            console.log(DeviceZones[i].DeviceZoneId)
            console.log(this.RowData.Id)
            if (DeviceZones[i].DeviceZoneId == this.RowData.Id) {
               DeviceZones.splice(i, 1);
            }
         }
         this.$set(this.Query, "DeviceId", this.RowData.Id);
         this.$set(this.Query, "DeviceZones", DeviceZones);
         this.method = "deletedevice";
         this.LoadTrigger = true;
      },
      //修改,把当前行的值显示在form上面，然后点击保存修改数据
      modifyzone(){
         Event.$emit("DeviceZoneModify.Form", this.RowData);
      }
   },
   GridOptions: {
      paging: false,
      autoWidth: false,
      PageSizeVisible: false,
      PagerVisible: false,
      order: [[0, "asc"]],
      columns: [
         {
            title: LoaderDict.Business.T_DeviceZone.DeviceZoneCode, //子设备吗
            width: 80,
            className: "text-center",
            data: "DeviceZoneCode"
         },
         {
            title: LoaderDict.Business.T_Device.DataClass, //数据类型
            width: 80,
            className: "text-center",
            data: "DataClass"
         },
         {
            title: LoaderDict.Business.T_Device.RemoteCode, //远程数据码
            width: 80,
            className: "text-center",
            data: "RemoteCode"
         },
         {
            title: LoaderDict.Business.T_DeviceZone.IpAddress, //终端IP
            width: 80,
            className: "text-center",
            data: "IpAddress"
         },
         {
            title: LoaderDict.Common.Enabled, // "是否启用",
            width: 80,
            className: "text-center",
            data: function(row) {
               return {
                  "1": LoaderDict.Status.Enabled, //"启用",
                  "-1": LoaderDict.Status.Disabled //"停用"
               }[row.Enabled];
            }
         },
         {
            title: LoaderDict.Common.Operation, //  "操作",
            width: 60,
            sortable: false,
            className: "text-center",
            data: function(row) {
               var modify = "<a class='blue' vue-click='modifyzone'>" + LoaderDict.Common.Modify + "</a> ";
               var trash = "<a class='red' vue-click='deletezone' >" + LoaderDict.Common.Delete + "</a> ";
               return modify + trash;
            }
         }
      ]
   }
});
</script>
