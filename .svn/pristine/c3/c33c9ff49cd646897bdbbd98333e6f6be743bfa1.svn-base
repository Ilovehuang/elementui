<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-servicelist operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-servicelist>
      <vd-bd-servicelist operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-servicelist>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-servicelist", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "服务名称"
               {
                  title: "服务名",
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "文件名"
               {
                  title: "文件名",
                  width: 80,
                  className: "text-center",
                  data: "Filename"
               },
               // "接口"
               {
                  title: "接口",
                  width: 80,
                  className: "text-center",
                  data: "Interface"
               },
               // "描述"
               {
                  title: "描述",
                  width: 80,
                  className: "text-center",
                  data: "Description"
               },
               // "服务地址"
               {
                  title: "服务地址",
                  width: 80,
                  className: "text-left",
                  data: "Url"
               },
               // "备注"
               {
                  title: "备注",
                  width: 80,
                  className: "text-center",
                  data: "Remark"
               },
               {
                  title: "启用状态", // "是否启用",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": "启用", //"启用",
                        "-1": "停用" //"停用"
                     }[row.Enabled];
                  }
               },
               {
                  title: "操作", //  "操作",
                  width: 60,
                  sortable: false,
                  className: "text-center",
                  data: function(row) {
                     var modify = "<a class='blue' vue-click='modify'>修改</a> ";
                     var trash = "<a class='red' vue-click='inspect' >查看</a> ";
                     var del = "<a class='red' vue-click='delete' >删除</a> ";
                     return modify + trash + del;
                  }
               }
            ]
         }
      };
   },
   methods: {
      inspect() {
         this.$Bus.$on("Location.Url", this.RowData);
      }
   },
   created() {
      this.$Bus.$emit("Location.Url", function(data) {
         let MarkDownUrl = data.MarkDownUrl ? data.MarkDownUrl : "";
         if (MarkDownUrl) {
            window.open(MarkDownUrl);
         }
         console.log(data);
      });
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
