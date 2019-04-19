<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-fencezone operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-fencezone>
      <vd-bd-fencezone operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-fencezone>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-fencezone",
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
         // "名称"
         {
            title: LoaderDict.Business.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         // "关联区域Id"
         {
            title: "关联区域Id",
            width: 80,
            className: "text-center",
            data: "ZoneId"
         },
         // "区域类型"
         {
            title: "区域类型",
            width: 80,
            className: "text-center",
            data: "FenceTypeId"
         },
         // "电子围栏类型"
         {
            title: "电子围栏类型",
            width: 80,
            className: "text-center",
            data: "FenceTypeName"
         },
         // "地图定义"
         {
            title: "地图定义",
            width: 80,
            className: "text-center",
            data: "MapData"
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
