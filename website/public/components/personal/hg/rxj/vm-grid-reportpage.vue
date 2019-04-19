<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-reportpage operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-reportpage>
      <vd-rpt-reportpage operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-reportpage>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-reportpage", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "名称"
               {
                  title: "名称", //LoaderDict.Business.T_Company.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "报表地址"
               {
                  title: LoaderDict.Business.R_ReportPage.ReportUrl,
                  width: 80,
                  className: "text-left",
                  data: "ReportUrl"
               },
               // "报表图标"
               {
                  title: LoaderDict.Business.R_ReportPage.ReportIcon,
                  width: 80,
                  className: "text-left",
                  data: "ReportIcon"
               },
               // "上级菜单"
               {
                  title: LoaderDict.Business.R_ReportPage.MenuName,
                  width: 80,
                  className: "text-center",
                  data: "MenuName"
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
                  width: 100,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var conditionfields =
                        "<a class='blue' vue-click='conditionfields'>" +
                        LoaderDict.Business.R_ReportPage.ConditionFields +
                        "</a> ";
                     var indexfields =
                        "<a class='blue' vue-click='indexFields'>" + LoaderDict.Business.R_ReportPage.IndexFields + "</a> ";
                     var chartoption =
                        "<a class='blue' vue-click='chartoption'>" + LoaderDict.Business.R_ReportPage.ChartOption + "</a> ";
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return conditionfields + indexfields + chartoption + modify + trash;
                  }
               }
            ]
         }
      }
   },
   created(){
   },
   methods: {
      conditionfields() {
         this.$Bus.$emit("ConditionForm.Visible", this.RowData);
      },
      indexFields() {
         this.$Bus.$emit("IndexForm.Visible", this.RowData);
      },
      chartoption() {
         this.$Bus.$emit("ChartoptionForm.Visible", this.RowData);
      }
   },
   mixins:["defaultBusinessGrid"]
});
</script>
