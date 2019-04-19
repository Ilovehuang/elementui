<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-category operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-category>
      <vd-system-category operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-category>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-category", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[4, "asc"]],
            columns: [
               // "分类名称"
               {
                  title: LoaderDict.Business.S_Category.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               {
                  title: LoaderDict.Business.S_Category.KeyName,
                  width: 80,
                  className: "text-center",
                  data: "KeyName"
               },
               // "数据"
               {
                  title: LoaderDict.Business.S_Category.Data,
                  width: 80,
                  className: "text-left",
                  data: "Data"
               },
               // "图标"
               {
                  title: LoaderDict.Business.S_Category.ImageUrl,
                  width: 80,
                  className: "text-center",
                  data: "ImageUrl"
               },
               // "次序"
               {
                  title: LoaderDict.Business.Rank,
                  width: 80,
                  className: "text-center",
                  data: "Rank"
               },
               {
                  title: LoaderDict.Common.Operation, //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
                     var trash = "<a class='red' vue-click='delete' >" + LoaderDict.Common.Delete + "</a> ";
                     return modify + trash;
                  }
               }
            ]
         }
      };
   },
   created() {
      if (!this.Query) this.Query = {};
      this.Query.ParentId = "-";
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
