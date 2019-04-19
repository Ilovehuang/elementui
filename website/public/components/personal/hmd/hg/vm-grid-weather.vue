<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-log-weather operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-log-weather>
      <vd-log-weather operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-log-weather>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-weather", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.T_Weather.CityId, //日期
                  width: 80,
                  className: "text-center",
                  data: "CityName"
               },
               {
                  title: LoaderDict.Business.Date, //日期
                  width: 80,
                  className: "text-center",
                  data: "Date"
               },
               {
                  title: LoaderDict.Business.T_Weather.WeatherName, // "天气名称",
                  width: 80,
                  className: "text-center",
                  data: "WeatherName"
               },
               {
                  title: "PM2.5", // "是否启用",
                  width: 80,
                  className: "text-center",
                  data: "PM25"
               },
               {
                  title: LoaderDict.Business.T_Weather.LowTemp, // "最低温",
                  width: 80,
                  className: "text-center",
                  data: "LowTemp"
               },
               {
                  title: LoaderDict.Business.T_Weather.HighTemp, // "最高温",
                  width: 80,
                  className: "text-center",
                  data: "HighTemp"
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
   mixins: ["defaultBusinessGrid"]
});
</script>
