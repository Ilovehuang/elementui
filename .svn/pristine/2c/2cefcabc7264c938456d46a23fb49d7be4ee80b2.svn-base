<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-device operate="load" method="zonerelated" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-device>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-zonerelated", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.T_Mall.Name, //案场
                  width: 80,
                  className: "text-center",
                  data: "MallName"
               },
               {
                  title: LoaderDict.Pages.Device.PhysicalZone, //物理区域
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               {
                  title: LoaderDict.Business.T_Device.DataClass, //数据类型
                  width: 80,
                  className: "text-center",
                  data: "DataClass"
               },
               {
                  title: LoaderDict.Pages.Device.TerminalCode, //终端码
                  width: 80,
                  className: "text-center",
                  data: "DeviceZoneCode"
               },
               {
                  title: LoaderDict.Business.T_Device.Location, //位置
                  width: 80,
                  className: "text-center",
                  data: "Location"
               },
               {
                  title: LoaderDict.Business.T_DeviceZone.IpAddress, // 终端IP
                  width: 80,
                  className: "text-center",
                  data: "IpAddress"
               },
               {
                  title: LoaderDict.Business.UpdateTime, // 更新时间
                  width: 80,
                  className: "text-center",
                  data: "UpdateTime"
               }
            ]
         }
      };
   },
   methods: {
      plugin() {
         this.$Bus.$emit("Activity.Visible", this.RowData);
      },
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
