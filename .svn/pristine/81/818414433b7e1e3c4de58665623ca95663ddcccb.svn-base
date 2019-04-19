<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-menu operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-menu>
      <vd-system-menu operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-menu>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-menu", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[5, "asc"]],
            columns: [
               // "菜单名称"
               {
                  title: LoaderDict.Business.S_Menu.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "所属集团"
               // {
               //    title: LoaderDict.Business.S_Menu.CompanyId,
               //    width: 80,
               //    className: "text-center",
               //    data: "CompanyId"
               // },
               // "用户等级"
               {
                  title: LoaderDict.Business.RoleLevel,
                  width: 80,
                  className: "text-center",
                  data: "RoleLevel"
               },
               // "页面地址"
               {
                  title: LoaderDict.Business.S_Menu.PageUrl,
                  width: 80,
                  className: "text-left",
                  data: "PageUrl"
               },
               // "页面图标"
               {
                  title: LoaderDict.Business.S_Menu.PageIcon,
                  width: 80,
                  className: "text-center",
                  data: "PageIcon"
               },
               // "手机图标"
               {
                  title: LoaderDict.Business.S_Menu.MobileIcon,
                  width: 80,
                  className: "text-center",
                  data: "MobileIcon"
               },
               // "次序"
               {
                  title: LoaderDict.Business.Rank,
                  width: 80,
                  className: "text-center",
                  data: "Rank"
               },
               {
                  title: LoaderDict.Common.Enabled, // "是否启用"
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": LoaderDict.Status.Enabled, //"启用"
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
      };
   },
   created() {
      if (!this.Query) this.Query = {};
      this.Query.ParentId = "-";
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
