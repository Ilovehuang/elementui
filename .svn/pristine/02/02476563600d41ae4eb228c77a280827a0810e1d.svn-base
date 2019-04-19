<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-businesstime operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-businesstime>
      <vd-bd-businesstime operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-businesstime>
   </vx-view-datatable>
</template>
<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-businesstime",
   methods: {
      plugin() {
         PubSub.publish("PluginForm.Visible", this.RowData);
      }
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "asc"]],
      columns: [
         {
            title: LoaderDict.Business.BusinessTime.StartDate,//开始日期
            width: 80,
            className: "text-center",
            data: "StartDate"
         },
         {
            title: LoaderDict.Business.Activity.EndDate,//结束日期
            width: 80,
            className: "text-center",
            data: "EndDate"
         },
         {
            title: LoaderDict.Business.BusinessTime.StartTime,//开始时间
            width: 80,
            className: "text-center",
            data: "StartTime"
         },
         {
            title:LoaderDict.Business.BusinessTime.EndTime,//结束时间
            width: 80,
            className: "text-center",
            data: "EndTime"
         },
         {
            title: LoaderDict.Business.BusinessTime.Weekdays,//星期
            width: 80,
            className: "text-center",
            data: "Weekdays"
         },
         {
            title: LoaderDict.Common.Operation, //  "操作",
            width: 60,
            sortable: false,
            className: "text-center",
            data: function (row) {
               var plugin =
                  "<a class='blue' vue-click='plugin'>关联案场</a> ";
               var modify =
                  "<a class='blue' vue-click='modify'>" +
                  LoaderDict.Common.Modify +
                  "</a> ";
               var trash =
                  "<a class='red' vue-click='delete' >" +
                  LoaderDict.Common.Delete +
                  "</a> ";
               return  plugin + modify + trash;
            }
         }
      ]
   }
});
</script>
