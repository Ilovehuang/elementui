<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vb-bd-table operate="load" :method="method" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vb-bd-table>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-shop",
   created() {
      let Query = {
         DataFields: ["Prefix_Enter"],
         Locations: {
            CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
            ZoneTypeId: "21a9fe6fe9be432589dea9167e748364"
         },
         Times: {
            StartTime: "2018-08-29",
            EndTime: "2018-08-30"
         },
         GroupBy: {
            Period: "All",
            Domain: "Zone"
         },
         Prefix: "Zone"
      };
      let Options ={
         	"IndexOptions":["Zone_Enter"]
      }
      this.$set(this, "Query", Query);
      this.$set(this.Query, "Options", Options);
      this.method = "handleShopData";
      this.LoadTrigger = true;
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[0, "desc"]],
      columns: [
         {
            title: "位置名称",
            width: 80,
            className: "text-center",
            data: "DomainLabel"
         },
         {
            title: "进入客流",
            width: 80,
            className: "text-center",
            data: "Zone_Enter"
         },
         {
            title: "占商铺总客流比%",
            width: 80,
            className: "text-center",
            data: "Zone_Enter_Total"
         },
         {
            title: "案场总客流",
            width: 80,
            className: "text-center",
            data: "Mall_Enter"
         },
         {
            title: "占案场总客流比%",
            width: 80,
            className: "text-center",
            data: "Mall_Enter_Total"
         }
      ]
   }
});
</script>
