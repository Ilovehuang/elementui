<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-zoneupdate operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-zoneupdate>
      <vd-bd-zoneupdate operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-zoneupdate>
   </vx-view-datatable>
</template>

<script>
$VueFactory.businessGrid({
   
   name: "vb-log-zoneupdate",
   methods:{
      see(){
         PubSub.publish("ZoneUpdate.Visible", this.RowData);
      }
   },
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: LoaderDict.Business.T_Update.Time,
                  width: 80,
                  className: "text-center",
                  data: "Date"
               },
               {
                  title: "集团名称",
                  width: 80,
                  className: "text-center",
                  data: "CompanyName"
               },
               {
                  title: "案场名称",
                  width: 80,
                  className: "text-center",
                  data: "MallName"
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function (row) {
                     var modify =
                        "<a class='blue' vue-click='modify'>" +
                        LoaderDict.Common.Modify +
                        "</a> ";
                     var trash =
                        "<a class='red' vue-click='delete' >" +
                        LoaderDict.Common.Delete +
                        "</a> ";
                     var see=
                        "<a class='red' vue-click='see' >" +
                        "查看" +
                        "</a> ";
                     return  see;
                  }
               }
            ]
         }
      }
   },
   mixins: ["defaultBusinessGrid"]
});

</script>
