<template>
   <vx-view-datatable :options="Options" :tabledata="tableList.data" :footerdata="tableList.footer" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vb-bd-cloumn operate="load" :method="method" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vb-bd-cloumn>
      <vb-bd-table operate="load" method="getTimeSharingData" :trigger.sync="TableLoadTrigger" :query="Query" :result.sync="TableList"></vb-bd-table>
   </vx-view-datatable>
</template>
<style>
   td{
    vertical-align: middle;
    text-align: center;
}
</style>

<script>
var Event = new Vue();
Vue.component("vb-grid-timesharing", {
   template: template,
   props: [
      "subscribe" /// 订阅前缀，默认Grid
   ],
   data() {
      return {
         tableList: {
            data: null,
            footer: null
         },
         Options: null,
         GridOptions: {
            paging: true,
            autoWidth: true,
            "ordering": false,
            order: [[0, "desc"]],
            columns: [
               // "案场名称"
            ]
         }, /// 表格定义
         List: [], /// 表格数据
         Query: {}, /// 查询条件
         LoadTrigger: false, /// 加载数据
         TableLoadTrigger: false
      };
   },
   created() {
      let Query = {
         DataFields: ["Prefix_Enter"],
         Locations: {
            MallIds: "3a47393d1912485d816f587542153b8d"
         },
         Times: {
            StartTime: moment().format("YYYY-MM-DD"),
            EndTime: moment().format("YYYY-MM-DD")
         },
         GroupBy: {
            Period: "0",
            Domain: "Mall"
         },
         Prefix: "Mall"
      };
      let me = this;
      Event.$on("Widget.DomainChanged", function(data) {
         Query.Locations = data.Query.Locations;
         Query.Prefix = data.Query.Prefix;
         Query.GroupBy.Domain = data.Query.Prefix;

         me.$set(me, "Query", Query);
         me.method = "getTimeList";
         me.LoadTrigger = true;

      });
      Event.$on("Widget.TimeChanged", function(data) {
         Query.Times = data.Query.Times;
         me.$set(me, "Query", Query);
         me.method = "getTimeList";
         me.LoadTrigger = true;
      });
      this.$set(this, "Query", Query);
      this.method = "getTimeList";
      this.LoadTrigger = true;
   },
   computed: {
      Subscribe: {
         get() {
            return this.subscribe ? this.subscribe : "Grid";
         }
      },
      TableList: {
         get() {
            console.log("this.tableList")
            console.log(this.tableList)
            return this.tableList;
         },
         set(val) {
            if(val) {
               console.log("val")
               console.log(val)
               this.tableList.data = val.data;
               this.tableList.footer = val.footer;
            }
         }
      }
   },
   watch: {
      List() {
         var columns = [];
         columns.push(
            {
               title: "位置名称",
               width: 80,
               className: "text-center",
               data: "DomainLabel"
         });
         var timelist = this.List;
         for (var i = 0; i < timelist.length; i++) {
            var timeinfo = {
               title: timelist[i].TimeLabel,
               width: 80,
               className: "text-center",
               data: "TimeLabel" + (i + 1)
            };
            columns.push(timeinfo);
         }

         let options = $.extend({}, this.GridOptions);
         options.columns = columns;
         this.Options = options;
         this.TableLoadTrigger = true;
      }
   },
   methods: {
      GridReload(et, query) {
         if (query) this.Query = query;
         this.LoadTrigger = true;
      }
   }
});
</script>
