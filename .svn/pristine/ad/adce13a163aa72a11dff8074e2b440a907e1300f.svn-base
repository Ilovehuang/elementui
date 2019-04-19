<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-activity operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-activity>
      <vd-company-activity operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-activity>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-activity", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.Name, //名称
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               {
                  title: LoaderDict.Business.StartDate, //开始时间
                  width: 80,
                  className: "text-center",
                  data: "StartDate"
               },
               {
                  title: LoaderDict.Business.EndDate, //结束时间
                  width: 80,
                  className: "text-center",
                  data: "EndDate"
               },
               {
                  title: LoaderDict.Business.T_Activity.StartHour, //开始时段
                  width: 80,
                  className: "text-center",
                  data: "StartHour"
               },
               {
                  title: LoaderDict.Business.T_Activity.EndHour, // "结束时段"
                  width: 80,
                  className: "text-center",
                  data: "EndHour"
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var plugin = "<a class='blue' vue-click='plugin'>可选案场</a> ";
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return plugin+modify + trash;
                  }
               }
            ]
         }
      };
   },
   methods: {
      plugin() {
         this.$Bus.$emit("Activity.Visible", this.RowData);
      },
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
