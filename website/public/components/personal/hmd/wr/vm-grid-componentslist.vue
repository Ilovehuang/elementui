<template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-componentslist operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-bd-componentslist>
      <vd-bd-componentslist operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-componentslist>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-componentslist", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "组件名称"
               {
                  title: "组件名",
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "描述"
               {
                  title: "描述",
                  width: 80,
                  className: "text-center",
                  data: "Description"
               },
               // "备注"
               {
                  title: "备注",
                  width: 80,
                  className: "text-center",
                  data: "Remark"
               },
               // "属性"
               {
                  title: "属性",
                  width: 80,
                  className: "text-center",
                  data: "Attribute"
               },
               // "组件测试页面地址"
               {
                  title: "测试地址",
                  width: 80,
                  className: "text-center",
                  data: "Url"
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
                     var trash = "<a class='red' vue-click='inspect' target='_blank'>查看</a> ";
                     var del = "<a class='red' vue-click='delete' >删除</a> ";
                     var res = modify + del;
                     if (row.Url) {
                        res += trash;
                     }
                     return res;
                  }
               }
            ]
         }
      };
   },
   methods: {
      inspect() {
         this.$Bus.$emit("Location.TestUrl", this.RowData);
      }
   },
   created() {
      this.$Bus.$on("Location.TestUrl", function(data) {
         let url = data.Url ? data.Url : "";
         console.log(data);
         if (url) {
            window.open(url);
         }
      });
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
