<template>
   <vx-view-datatable :options="Options" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-company operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-company>
      <vd-bd-company operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-company>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   template: template,
   name: "vb-grid-company",
   methods: {
      plugin() {
         //PubSub.publish("PluginForm.Visible", this.RowData);
         console.log(this.Checked);
      }
   },
   GridOptions: {
      paging: true,
      autoWidth: true,
      order: [[1, "asc"]],
      columns: [
         {
            checkbox: true,
            width: 30,
            sortable: false,
            className: "text-center",
         },
         {
            title: "Id",
            width: 80,
            sortable: false,
            className: "text-center",
            data: "Id"
         },
         // "集团名称"
         {
            title: LoaderDict.Business.T_Company.Name,
            width: 80,
            className: "text-center",
            data: "Name"
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
               var plugin =
                  "<a class='blue' vue-click='plugin'>" +
                  LoaderDict.Common.Available +
                  LoaderDict.Common.Plugins +
                  "</a> ";
               var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
               var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
               return plugin + modify + trash;
            }
         }
      ]
   }
});
</script>
