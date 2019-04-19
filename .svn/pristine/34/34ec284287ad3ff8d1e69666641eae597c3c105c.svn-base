<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-reportmenu operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-reportmenu>
      <vd-rpt-reportmenu operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-reportmenu>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-reportmenu", {
   data(){
      return {
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
               // "菜单类型"
               {
                  title: LoaderDict.Business.R_ReportMenu.MenuType,
                  width: 80,
                  className: "text-center",
                  data: "MenuType"
               },
               // "页面图标"
               {
                  title: LoaderDict.Business.R_ReportMenu.PageIcon,
                  width: 80,
                  className: "text-center",
                  data: "PageIcon"
               },
               // "移动端图标"
               {
                  title: LoaderDict.Business.R_ReportMenu.MobileIcon,
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
               // "适用平台"
               {
                  title: LoaderDict.Business.R_ReportMenu.SwPlatform,
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": LoaderDict.Business.R_ReportMenu.All, //"是",
                        "2": LoaderDict.Business.R_ReportMenu.Website, //"否"
                        "3": LoaderDict.Business.R_ReportMenu.MobileTerminal //"否"
                     }[row.SwPlatform];
                  }
               },
               // "是否可见"
               {
                  title: LoaderDict.Business.Visible, // "是否可见",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": LoaderDict.Status.Display, //"是",
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
      }
   },
   created(){
   },
   methods: {
   },
   mixins:["defaultBusinessGrid"]
});
</script>
