<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-role operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-role>
      <vd-bd-role operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-role>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-role",
   methods: {},
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         // "分类名称"
         {
            title: LoaderDict.Business.S_Role.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         // "用户等级"
         {
            title: LoaderDict.Business.S_Role.RoleLevel,
            width: 80,
            className: "text-center",
            data: "RoleLevel"
         },
         // "所属集团"
         {
            title: LoaderDict.Business.S_Role.CompanyId,
            width: 80,
            className: "text-center",
            data: "CompanyId"
         },
         // {
         //    title: LoaderDict.Business.S_Role.MenuIds,
         //    width: 80,
         //    className: "text-center",
         //    data: "MenuIds"
         // },
         // {
         //    title: LoaderDict.Business.S_Role.FulleMenuIds,
         //    width: 80,
         //    className: "text-center",
         //    data: "FulleMenuIds"
         // },
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
