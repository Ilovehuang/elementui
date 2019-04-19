<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-usergroup operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-usergroup>
      <vd-system-usergroup operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-usergroup>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-usergroup", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "用户组名称"
               {
                  title: LoaderDict.Business.S_UserGroup.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "所属集团"
               {
                  title: LoaderDict.Business.CompanyName,
                  width: 80,
                  className: "text-center",
                  data: "CompanyName"
               },
               // "部门级别"
               {
                  title: LoaderDict.Business.S_UserGroup.GroupLevel,
                  width: 80,
                  className: "text-center",
                  data: "GroupLevel"
               },
               {
                  title: LoaderDict.Business.S_UserGroup.MallCount, //数量
                  width: 60,
                  className: "text-center",
                  data: function(row) {
                     if (row.IndexFields) return row.MallIds.length;
                     else return 0;
                  }
               },
               {
                  title: LoaderDict.Business.S_UserGroup.PagesCount, //数量
                  width: 60,
                  className: "text-center",
                  data: function(row) {
                     if (row.IndexFields) return row.ReportPages.length;
                     else return 0;
                  }
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var plugin = "<a class='blue' vue-click='plugin'>可选案场</a> ";
                     var zone = "<a class='blue' vue-click='zone'>可选区域</a> ";
                     var reportpage = "<a class='blue' vue-click='reportpage'>报表页面</a> ";
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return plugin + zone + reportpage + modify + trash;
                  }
               }
            ]
         }
      };
   },
   created() {
      if (!this.Query) this.Query = {};
      this.Query.ManageGrid = "true"
   },
   methods: {
      plugin() {
         console.log(111)
         this.$Bus.$emit("UserGroup.Visible", this.RowData);
      },
      zone() {
        this.$Bus.$emit("ZoneForm.Visible", this.RowData);
      },
      reportpage() {
        this.$Bus.$emit("ReportPageForm.Visible", this.RowData);
      }
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
