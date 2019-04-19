<template>
<div>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata="rowdata" :delrow.sync="Delrow">
      <vd-bd-tag operate="load" :trigger.sync="trigger" :query="query" :result.sync="List"></vd-bd-tag>
   </vx-view-datatable>
      <vd-bd-grid url="/ZoneUpdateService.html" :query="query" :result.sync="List" :trigger.sync="trigger"></vd-bd-grid>
</div>
</template>

<script>
Vue.component("vb-log-zonelog", {
   template: template,
   props: [
      "query", /// 查询数据条件
      "trigger" /// 表格更新操作后的标记
   ],
   data() {
      var LoaderDict = {
         Business: {
            CompanyName: "角色名称"
         },
         Common: {
            Available: "可用",
            Count: "数量",
            Plugins: "插件",
            Enabled: "启用状态",
            Operation: "操作",
            Modify: "修改",
            Delete: "删除"
         },
         Status: {
            Enabled: "启用",
            Disabled: "停用"
         },
         Date:"时间",
         ZoneId:"区域ID"
      };
      var idField = "Id";
      return {
         Options: {
            idField: idField,
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "集团名称"
               {
                  title: LoaderDict.Date,
                  width: 80,
                  className: "text-center",
                  data: "Date"
               },
               {
                  title: LoaderDict.ZoneId, // "是否启用",
                  width: 80,
                  className: "text-center",
                  data: "ZoneId"
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var plugin =
                        "<a class='blue plugin' data-toggle='modal' key='" +
                        row[idField] +
                        "' vue-click='plugin'>" +
                        LoaderDict.Common.Available +
                        LoaderDict.Common.Plugins +
                        "</a> ";
                     var modify =
                        "<a class='blue modify' data-toggle='modal' key='" +
                        row[idField] +
                        "' vue-click='modify'>" +
                        LoaderDict.Common.Modify +
                        "</a> ";
                     var trash =
                        "<a class='red delete' key='" +
                        row[idField] +
                        "' vue-click='delete' >" +
                        LoaderDict.Common.Delete +
                        "</a> ";
                     return plugin + modify + trash;
                  }
               }
            ]
         }, /// 表格定义
         List: [], /// 表格数据
         Delrow: false, /// 删除事件
         Result: null /// 删除完成标记
      };
   },
   methods: {
      plugin() {}
   },
   watch:{
      List(){
         console.log(this.List)
      }
   }
});
</script>
