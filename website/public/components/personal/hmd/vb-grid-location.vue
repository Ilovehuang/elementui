<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-location operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-location>
      <vd-bd-location operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-location>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-location",
   created() {
      console.log("this.Query");
      console.log(this.Query);
      this.Query.ParentId = "-";
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[2, "asc"]],
      columns: [
         // "名称"
         {
            title: LoaderDict.Business.Name,
            width: 80,
            className: "text-center",
            data: "Name"
         },
         {
            title: LoaderDict.Business.T_Locatoin.GetWeather, // "获取天气",
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
            title: LoaderDict.Business.Rank, // "次序",
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
         }
      ]
   }
});
</script>
