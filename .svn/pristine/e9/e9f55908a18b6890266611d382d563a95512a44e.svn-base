<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-chartoption operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-chartoption>
      <vd-rpt-chartoption operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-chartoption>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-chartoption",
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         // "名称"
         {
            title: LoaderDict.Business.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         // "图配置码"
         {
            title: LoaderDict.Business.R_ChartOption.Code,
            width: 80,
            className: "text-center",
            data: "Code"
         },
         // "图类型"
         {
            title: LoaderDict.Business.R_ChartOption.ChartType,
            width: 80,
            className: "text-center",
            data: "ChartType"
         },
         // "图参数定义"
         {
            title: LoaderDict.Business.R_ChartOption.JsonCode,
            width: 80,
            className: "text-center",
            data: "JsonCode"
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
