<template>
   <vx-view-datatable :options="GridOptions" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-system-location operate="load" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-system-location>
      <vd-system-location operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-system-location>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-location", {
   data(){
      return {
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[2, "asc"]],
            columns: [
               // "名称"
               {
                  title: LoaderDict.Business.Name,
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
                  title: LoaderDict.Business.T_Locatoin.GetWeather, // "获取天气",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     return {
                        "1": LoaderDict.Status.Enabled, //"启用",
                        "-1": LoaderDict.Status.Disabled //"停用"
                     }[row.GetWeather];
                  }
               },
               // {
               //    title: LoaderDict.Business.Rank, // "次序",
               //    width: 80,
               //    className: "text-center",
               //    data: "Rank"
               // },

               // {
               //    title: LoaderDict.Common.Operation, //  "操作",
               //    width: 60,
               //    sortable: false,
               //    className: "text-center",
               //    data: function(row) {
               //       // console.log(row)
               //       var modify = "<a class='blue' vue-click='modify'>" + LoaderDict.Common.Modify + "</a> ";
               //       if(row.Id.length == 4){
               //          return modify
               //       }

               //    }
               // }
            ]
         }
      }
   },
   created() {
      this.Query.ParentId = "-";
   },
   methods: {
   },
   mixins:["defaultBusinessGrid"]
});
</script>
