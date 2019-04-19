<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vd-bd-duration operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-duration>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-duration",
   methods: {},
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         // "案场名称"
         {
            title: "位置",
            width: 80,
            className: "text-center",
            data: "PhysicalZoneName"
         },
         {
            title: "楼层",
            width: 80,
            className: "text-center",
            data: "FloorName"
         },
         {
            title: "开始时间",
            width: 80,
            className: "text-center",
            data: function(row) {
               let a = moment(row.EndTime).format("X");
               let time = Number(a) - Number(row.Duration);
               let StartTime = moment(Number(time + "000")).format("YYYY-MM-DD HH:mm:ss");
               return StartTime
            }
         },
         {
            title: "结束时间",
            width: 80,
            className: "text-center",
            data: "EndTime"
         },
         {
            title: "停留时长",
            width: 80,
            className: "text-center",
            data: "Duration"
         }
      ]
   }
});
</script>
