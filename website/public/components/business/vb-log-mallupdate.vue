<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-mallupdate operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-mallupdate>
      <vd-bd-mallupdate operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-mallupdate>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-log-mallupdate",
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         {
            title: "时间",
            width: 80,
            className: "text-center",
            data: "Date"
         },
         {
            title: "全部ID", // "是否启用",
            width: 80,
            className: "text-center",
            data: "MallId"
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
