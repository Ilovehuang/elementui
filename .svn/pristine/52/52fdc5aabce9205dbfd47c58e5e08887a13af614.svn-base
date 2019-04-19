<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-user operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-user>
      <vd-system-user operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-user>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-user", {
   data() {
      return {
         Options: {
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
                  title: LoaderDict.Business.RoleLevel,
                  width: 80,
                  className: "text-center",
                  data: "RoleLevel"
               },
               // "邮箱"
               {
                  title: LoaderDict.Business.S_User.Email,
                  width: 80,
                  className: "text-left",
                  data: "Email"
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
      };
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
