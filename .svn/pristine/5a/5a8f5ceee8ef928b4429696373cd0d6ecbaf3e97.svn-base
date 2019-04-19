<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-user operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-user>
      <vd-bd-user operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-user>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-user",
   methods: {},
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         // "账号"
         {
            title: LoaderDict.Business.S_User.UserCode,
            width: 80,
            className: "text-center",
            data: "UserCode"
         },
         // "姓名"
         {
            title: LoaderDict.Business.S_User.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         // "角色"
         {
            title: LoaderDict.Business.S_User.RoleId,
            width: 80,
            className: "text-center",
            data: "RoleId"
         },
         // "邮箱"
         {
            title: LoaderDict.Business.S_User.Email,
            width: 80,
            className: "text-center",
            data: "Email"
         },
         // {
         //    title: LoaderDict.Common.Enabled, // "是否启用",
         //    width: 80,
         //    className: "text-center",
         //    data: function(row) {
         //       return {
         //          "1": LoaderDict.Status.Enabled, //"启用",
         //          "-1": LoaderDict.Status.Disabled //"停用"
         //       }[row.Enabled];
         //    }
         // },
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
