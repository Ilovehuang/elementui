<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-datadetail operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-datadetail>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-historicalsummary", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: "进入客流", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: "Zone_Enter"
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
               },
               {
                  title: "进入客流", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: "Zone_Enter"
               },
               {
                  title: "离开客流", //名称
                  width: 80,
                  className: "text-center",
                  data: "Zone_Exit"
               }
            ]
         }
      };
   },
   created() {
      this.$Bus.$on("ReportTime.Search", (name, query) => {
         console.log(name, query, this);
         this.Options.aoColumns[0].mData = "Zone_Exit";
         this.Options.aoColumns[0].data = "Zone_Exit";
         this.Options.columns[0].mData = "Zone_Exit";
         this.Options.columns[0].data = "Zone_Exit";

         this.Query = query;
         this.LoadTrigger = true;
      });
   },
   methods: {},
   wacth: {
      LoadTrigger() {
         console.log(this.List);
      }
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
