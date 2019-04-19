   <template>
   <vx-view-datatable :options="Options" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-role operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-role>
      <vd-system-role operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-role>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-role", {
   data() {
      return {
         Options: {
            paging: true,
            autoWidth: true,
            order: [[0, "asc"]],
            columns: [
               // "分类名称"
               {
                  title: LoaderDict.Business.S_Role.Name,
                  width: 80,
                  className: "text-center",
                  data: "Name"
               },
               // "用户等级"
               {
                  title: LoaderDict.Business.RoleLevel,
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     switch (row.RoleLevel) {
                        case 1:
                           return "级别一";
                           break;
                        case 2:
                           return "级别二";
                           break;
                        case 3:
                           return "级别三";
                           break;
                        case 4:
                           return "级别四";
                           break;
                     }
                  }
               },
               // "所属集团"
               {
                  title: LoaderDict.Business.CompanyName,
                  width: 80,
                  className: "text-center",
                  data: "CompanyName"
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
      this.Query.ManageGrid = "true"
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
