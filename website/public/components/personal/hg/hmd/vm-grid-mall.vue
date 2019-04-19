<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-mall operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-mall>
      <vd-company-mall operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-mall>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-mall", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "案场名称"
               {
                  title: LoaderDict.Business.T_Mall.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               {
                  title: LoaderDict.Business.T_Mall.MallLocation, //地理位置
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     row.LocationIds = [row.ProvinceId, row.CityId, row.DistrictId];
                     return row.MallLocation;
                  }
               },
               {
                  title: LoaderDict.Business.T_Mall.Tags, //标签
                  width: 80,
                  className: "text-center",
                  data: "Tags"
               },
               {
                  title: "经营面积", //经营面积
                  width: 80,
                  className: "text-center",
                  data: "Area"
               },
               {
                  title: "营业人数", //营业人数
                  width: 80,
                  className: "text-center",
                  data: "Clerks"
               },
               {
                  title: LoaderDict.Common.Enabled, // "是否启用",
                  width: 80,
                  className: "text-center",
                  data: function (row) {
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
                  data: function (row) {
                     var modify =
                        "<a class='blue' vue-click='modify'>" +
                        LoaderDict.Common.Modify +
                        "</a> ";
                     var trash =
                        "<a class='red' vue-click='delete' >" +
                        LoaderDict.Common.Delete +
                        "</a> ";
                     return  modify + trash;
                  }
               }
            ]
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessGrid"]
});
</script>
