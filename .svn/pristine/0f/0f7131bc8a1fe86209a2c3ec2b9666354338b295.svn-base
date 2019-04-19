<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-conditionoption operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-conditionoption>
      <vd-rpt-conditionoption operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-conditionoption>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-conditionoption",
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         // "条件名称"
         {
            title: LoaderDict.Business.R_ConditionOption.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         // "显示文字"
         {
            title: LoaderDict.Business.R_ConditionOption.Name,
            width: 80,
            className: "text-center",
            data: "Code"
         },
         // "条件编码"
         {
            title: LoaderDict.Business.R_ConditionOption.Code,
            width: 80,
            className: "text-center",
            data: "Code"
         },
         // "条件类别"
         {
            title: LoaderDict.Business.R_ConditionOption.OptionType,
            width: 80,
            className: "text-center",
            data: "OptionType"
         },
         // "组件名称"
         {
            title: LoaderDict.Business.R_ConditionOption.ComponentName,
            width: 80,
            className: "text-center",
            data: "ComponentName"
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
