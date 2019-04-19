<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <slot></slot>
      <vd-bd-location operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-location>
      <vd-bd-location operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-location>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-location",
   methods: {},
   created() {
      console.log(this.Query)
      this.Query.ParentId = "-";
   },
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
         {
            title: LoaderDict.Business.T_Location.GetWeather, // "获取天气",
            width: 80,
            className: "text-center",
            data: function(row) {
               return {
                  "1": LoaderDict.Status.WeatherEnabled, //"启用",
                  "-1": LoaderDict.Status.WeatherDisabled //"停用"
               }[row.Enabled];
            }
         },
         {
            title: LoaderDict.Business.T_Mall.Rank, // "次序",
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
               return  modify + trash;
            }
         }
      ]
   }
});
</script>
