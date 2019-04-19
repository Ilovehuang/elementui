<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-devicezone operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-devicezone>
      <vd-company-devicezone operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-devicezone>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-devicezone", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.T_Mall.Name,//子设备吗
                  width: 80,
                  className: "text-center",
                  data: "MallName"
               },
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
                  title: '最后数据时间', //远程数据码
                  width: 80,
                  className: "text-center",
                  data: "LastDataTime"
               },
                {
                  title: '最后连接时间', //远程数据码
                  width: 80,
                  className: "text-center",
                  data: "ConnectTime"
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
                  title: '连接状态', // "是否启用",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": '正常', //"启用",
                        "-1": '已断开' //"停用"
                     }[row.Enabled];
                  }
               }
            ]
         }
      };
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
