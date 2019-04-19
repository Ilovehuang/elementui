<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-rpt-indexoption operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-rpt-indexoption>
      <vd-rpt-indexoption operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-rpt-indexoption>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-indexoption", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[4, "asc"]],
            columns: [
               // "名称"
               {
                  title: LoaderDict.Business.Name,
                  width: 80,
                  className: "text-center",
                  data: "Label"
               },
               // "指标键名"
               {
                  title: LoaderDict.Business.R_IndexOption.Code,
                  width: 80,
                  className: "text-center",
                  data: "Code"
               },
               // "字段"
               {
                  title: LoaderDict.Business.R_IndexOption.Field,
                  width: 80,
                  className: "text-left",
                  data: "Field"
               },
               // "单位"
               {
                  title: LoaderDict.Business.R_IndexOption.Unit,
                  width: 80,
                  className: "text-center",
                  data: "Unit"
               },
               // "次序"
               {
                  title: LoaderDict.Business.Rank,
                  width: 80,
                  className: "text-center",
                  data: "Rank"
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
