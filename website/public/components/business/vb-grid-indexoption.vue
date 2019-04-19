<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-indexoption operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-indexoption>
      <vd-rpt-indexoption operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-indexoption>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-indexoption",
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
            data: "Label"
         },
         // "指标键名"
         {
            title: LoaderDict.Business.R_IndexOption.Code,
            width: 80,
            className: "text-center",
            data: "Code"
         },
         // "字段"
         {
            title: LoaderDict.Business.R_IndexOption.Field,
            width: 80,
            className: "text-center",
            data: "Field"
         },
         // "可支持图形"
         {
            title: LoaderDict.Business.R_IndexOption.ChartView,
            width: 80,
            className: "text-center",
            data: "ChartView"
         },
         // "按钮处理方式"
         {
            title: LoaderDict.Business.R_IndexOption.ButtonView,
            width: 80,
            className: "text-center",
            data: "ButtonView"
         },
         // "按钮处理方式"
         {
            title: LoaderDict.Business.R_IndexOption.TableView,
            width: 80,
            className: "text-center",
            data: "TableView"
         },
         // "次序"
         {
            title: LoaderDict.Business.R_IndexOption.Rank,
            width: 80,
            className: "text-center",
            data: "Rank"
         },
         {
            title: LoaderDict.Business.R_IndexOption.Visible, // "是否显示",
            width: 80,
            className: "text-center",
            data: function(row) {
               return {
                  "1": LoaderDict.Status.Show, //"是",
                  "-1": LoaderDict.Status.Hide //"否"
               }[row.Visible];
            }
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
               var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
               var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
               return modify + trash;
            }
         }
      ]
   }
});
</script>
