<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-holiday operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-holiday>
      <vd-bd-holiday operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-holiday>
   </vx-view-datatable>
</template>
<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-holiday",
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         {
            title: LoaderDict.Business.Name,//名称
            width: 80,
            className: "text-center",
            data: "Name"
         },
         {
            title: LoaderDict.Business.BusinessTime.StartDate, // "开始时间",
            width: 80,
            className: "text-center",
            data: "StartDate"
         },
         {
            title: LoaderDict.Business.BusinessTime.EndDate, // "结束日期",
            width: 80,
            className: "text-center",
            data: "EndDate"
         },
         {
            title: LoaderDict.Business.BusinessTime.HolidayType, // "节日类型",
            width: 80,
            className: "text-center",
            data: "HolidayType"
         },
         {
            title: LoaderDict.Common.Operation, //  "操作",
            width: 60,
            sortable: false,
            className: "text-center",
            data: function(row) {
               var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
               var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
               return modify + trash;
            }
         }
      ]
   }
});
</script>
