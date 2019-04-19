<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-activity operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-activity>
      <vd-bd-activity operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-activity>
   </vx-view-datatable>
</template>
<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-activity",

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
            title: LoaderDict.Business.Activity.StartDate, //开始时间
            width: 80,
            className: "text-center",
            data: "StartDate"
         },
         {
            title: LoaderDict.Business.Activity.EndDate, //结束时间
            width: 80,
            className: "text-center",
            data: "EndDate"
         },
         {
            title: LoaderDict.Business.Activity.StartHour, //开始时段
            width: 80,
            className: "text-center",
            data: "StartHour"
         },
         {
            title: LoaderDict.Business.Activity.EndHour, // "结束时段"
            width: 80,
            className: "text-center",
            data: "EndHour"
         },
         {
            title: LoaderDict.Common.Operation, //  "操作",
            width: 60,
            sortable: false,
            className: "text-center",
            data: function (row) {
               var modify =
                  "<a class='blue' vue-click='modify'>" +
                  LoaderDict.Common.Modify +
                  "</a> ";
               var trash =
                  "<a class='red' vue-click='delete' >" +
                  LoaderDict.Common.Delete +
                  "</a> ";
               return modify + trash;
            }
         }
      ]
   }
});
</script>
