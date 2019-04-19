<template>
   <vx-view-datatable :options="GridOptions" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-devicezone operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-devicezone>
      <vd-company-devicezone operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-devicezone>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-devicezonestatus", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            columns: [
               // "集团名称"
               {
                  title: LoaderDict.Business.T_Mall.Name,
                  width: 80,
                  className: "text-center",
                  data: "MallName"
               },
               {
                  title: '终端码',
                  width: 80,
                  className: "text-center",
                  data: "DeviceZoneCode"
               },
               {
                  title: '数据类型',
                  width: 80,
                  className: "text-center",
                  data: "DataClass"
               },
               {
                  title: '远程编码',
                  width: 80,
                  className: "text-center",
                  data: "RemoteCode"
               },
               {
                  title: '位置',
                  width: 80,
                  className: "text-center",
                  data: "Location"
               },
               {
                  title: 'IP地址',
                  width: 80,
                  className: "text-center",
                  data: "IpAddress"
               },
               {
                  title: '最后数据时间',
                  width: 80,
                  className: "text-center",
                  data: "LastDataTime"
               },
               {
                  title: '最后连接时间',
                  width: 80,
                  className: "text-center",
                  data: "ConnectTime"
               },
               {
                  title: '连接状态',
                  width: 80,
                  className: "text-center",
                  data:function(row) {
                     return {
                        "1": '正常', //"启用",
                        "-1": '已断开' //"停用"
                     }[row.DeviceStatus];
                  }
               }
            ]
         }
      }
   },
   mixins:["defaultBusinessGrid"]
});
</script>
