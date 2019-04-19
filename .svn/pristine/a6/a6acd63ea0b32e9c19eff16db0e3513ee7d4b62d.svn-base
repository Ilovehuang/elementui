<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-mallupdate operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-mallupdate>
      <vd-company-mallupdate operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-mallupdate>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-weather", {
   
   name: "vb-log-mallupdate",
   methods:{
      see(){
         PubSub.publish("MallUpdate.Visible", this.RowData);
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
                  title: "时间",
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
