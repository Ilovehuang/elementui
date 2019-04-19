<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-datadetail operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-datadetail>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-historicaldwell", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: "停留人数", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: "Zone_NumberServed"
               },
               {
                  title: "停留时长", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: "Zone_Duration"
               },
               {
                  title: "日期", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return row.DateTime.substr(0, 11);
                  }
               },
               {
                  title: "时间", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return row.DateTime.substr(11, 8);
                  }
               }
            ]
         }
      };
   },
   created() {
      this.$Bus.$on("ReportTime.Search", (name, query) => {
         if (query.DataFilds[0] == "Zone_NumberServed") {
            this.Query = query;
            this.LoadTrigger = true;
         }
      });
   },
   wacth: {
      LoadTrigger() {
         console.log(this.List);
      }
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
