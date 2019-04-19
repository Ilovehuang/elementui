<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-businesstime operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-businesstime>
      <vd-company-businesstime operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-businesstime>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-businesstime", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.StartDate, //开始日期
                  width: 80,
                  className: "text-center",
                  data: "StartDate"
               },
               {
                  title: LoaderDict.Business.EndDate, //结束日期
                  width: 80,
                  className: "text-center",
                  data: "EndDate"
               },
               {
                  title: LoaderDict.Business.T_BusinessTime.StartTime, //开始时间
                  width: 80,
                  className: "text-center",
                  data: "StartTime"
               },
               {
                  title: LoaderDict.Business.T_BusinessTime.EndTime, //结束时间
                  width: 80,
                  className: "text-center",
                  data: "EndTime"
               },
               {
                  title: LoaderDict.Business.T_BusinessTime.Weekdays, //星期
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     var list = row.Weekdays.split(",");
                     var LoaderDictB = LoaderDict.Business.T_BusinessTime;
                     var objWeek = {
                        "0": LoaderDictB.Sunday,
                        "1": LoaderDictB.Monday,
                        "2": LoaderDictB.Tuesday,
                        "3": LoaderDictB.Wednesday,
                        "4": LoaderDictB.Thursday,
                        "5": LoaderDictB.Friday,
                        "6": LoaderDictB.Saturday
                     };
                     for (let index = 0; index < list.length; index++) {
                        const element = list[index];
                        list[index] = objWeek[list[index]];
                     }
                     return list.join(",");
                  }
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var plugin = "<a class='blue' vue-click='plugin'>关联案场</a> ";
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return plugin + modify + trash;
                  }
               }
            ]
         }
      };
   },
   methods: {
      plugin() {
         this.$Bus.$emit("Businesstime.Visible", this.RowData);
      }
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
