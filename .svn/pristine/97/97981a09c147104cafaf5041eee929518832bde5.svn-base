<template>
   <vx-view-datatable :options="Options" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-device operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-device>
      <vd-bd-device operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-device>
   </vx-view-datatable>
</template>

<script>
var Event = new Vue();
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-device",
   methods:{
      devicezone(){
         Event.$emit("DeviceZoneForm.Visible", this.RowData);
         Event.$emit("DeviceZone.Grid", this.RowData);
      }
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[1, "asc"]],
      columns: [
         {
            title: LoaderDict.Business.T_Mall.Name, //案场名称
            width: 80,
            className: "text-center",
            data: "MallName"
         },
         {
            title: LoaderDict.Business.T_Device.DeviceCode, //设备编码
            width: 80,
            className: "text-center",
            data: "DeviceCode"
         },
         {
            title: LoaderDict.Business.T_Device.DeviceType, //设备类型
            width: 80,
            className: "text-center",
            data: "DeviceType"
         },
         {
            title: LoaderDict.Business.T_Device.Location, //位置名称
            width: 80,
            className: "text-center",
            data: "Location"
         },
         {
            title: LoaderDict.Business.T_Device.IPAddress, //IP地址
            width: 80,
            className: "text-center",
            data: "IpAddress"
         },
         {
            title: LoaderDict.Business.UpdateTime, //更新时间
            width: 80,
            className: "text-center",
            data: "UpdateTime"
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
               var devicezone = "<a class='blue' vue-click='devicezone'>" + LoaderDict.Pages.Device.DeviceZoneManager + "</a> ";
               var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
               var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
               return devicezone+modify + trash;
            }
         }
      ]
   }
});
</script>
