<template>
   <vx-view-datatable :options="GridOptions" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-company operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-company>
      <vd-company-company operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-company>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-company", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            columns: [
               // "集团名称"
               {
                  title: LoaderDict.Business.T_Company.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },

               {
                  title: LoaderDict.Business.T_Company.NumberOfCharts,
                  width: 60,
                  className: "text-center",
                  data: function(row) {
                     if (row.ReportPages) return row.ReportPages.length;
                     return 0;
                  }
               },
               {
                  title:  LoaderDict.Business.R_ReportPage.IndexFields, //数量
                  width: 60,
                  className: "text-center",
                  data: function(row) {
                     if (row.IndexFields) return row.IndexFields.length;
                     return 0;
                  }
               },
               {
                  title: LoaderDict.Business.Remark, //备注
                  width: 80,
                  className: "text-center",
                  data: "Remark"
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
                     var index =
                        "<a class='aa' vue-click='index'>" +
                        // LoaderDict.Business.R_ReportPage.IndexFields
                        "可用指标"+
                        "</a> ";
                     var plugin =
                        "<a class='aa' vue-click='plugin'>" +
                        LoaderDict.Common.Available +
                        LoaderDict.Common.ChartTable +
                        "</a> ";
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return index + plugin + modify + trash;
                  }
               }
            ]
         }
      }
   },
   created(){
   },
   methods: {
      plugin() {
         this.$Bus.$emit("CompanyOptionsForm.Visible", this.RowData);
      },
      index(){
         this.$Bus.$emit("CompanyIndexForm.Visible", this.RowData);
      }
   },
   mixins:["defaultBusinessGrid"]
});
</script>
