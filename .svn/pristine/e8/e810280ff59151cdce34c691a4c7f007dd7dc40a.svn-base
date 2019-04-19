<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-chartstyle operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-chartstyle>
      <vd-rpt-chartstyle operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-chartstyle>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-chartstyle", {
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
               // "图样式码"
               {
                  title: LoaderDict.Business.R_ChartStyle.Code,
                  width: 80,
                  className: "text-center",
                  data: "Code"
               },
               // "样式类别"
               {
                  title: LoaderDict.Business.R_ChartStyle.CodeType,
                  width: 80,
                  className: "text-center",
                  data: "CodeType"
               },
               // "图样式定义"
               // {
               //    title: LoaderDict.Business.R_ChartStyle.JsonCode,
               //    width: 80,
               //    className: "text-center",
               //    data: "JsonCode"
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
      }
   },
   created(){
   },
   methods: {
   },
   mixins:["defaultBusinessGrid"]
});
</script>
