<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-physicalzone operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-physicalzone>
      <vd-bd-physicalzone operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-physicalzone>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-physicalzone",
   methods: {
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         {
            title: "Id",
            width: 80,
            className: "text-center",
            data: "Id"
         },
         // "案场名称"
         {
            title: LoaderDict.Business.T_Mall.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         {
            title: "区域名称",
            width: 80,
            className: "text-center",
            data: "Name"
         },
         {
            title: "区域类型",
            width: 80,
            className: "text-center",
            data: "ZoneTypeName"
         },
         {
            title: LoaderDict.Common.Enabled, // "是否启用",
            width: 80,
            className: "text-center",
            data: function (row) {
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
            data: function (row) {
               var modify =
                  "<a class='blue' vue-click='modify'>" +
                  LoaderDict.Common.Modify +
                  "</a> ";
               var trash =
                  "<a class='red' vue-click='delete' >" +
                  LoaderDict.Common.Delete +
                  "</a> ";
               return  modify + trash;
            }
         }
      ]
   }
});
</script>
