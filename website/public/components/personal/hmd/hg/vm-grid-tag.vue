<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-company-tag operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-tag>
      <vd-company-tag operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-tag>
   </vx-view-datatable>
</template>
<script>
Vue.component("vm-grid-tag", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               {
                  title: "标签", // "开始时间",
                  width: 80,
                  className: "text-center",
                  data: "TagValue"
               },
               {
                  title: "标签主类别", //名称
                  width: 80,
                  className: "text-center",
                  data: "TagClass"
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
      this.$Bus.$emit("Grid.Search", this.Search);
   },
   methods: {
      Search(query) {
         console.log(this);
         this.Options.columns[0].mData = "TagClass";
         this.Options.columns[0].data = "TagClass";
         this.Options.columns.splice(1, 1);
         console.log(this);
         this.LoadTrigger = true;
      }
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
