<template>
   <vx-view-datatable :options="Options" :tabledata="tableList.data" :footerdata="tableList.footer" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vb-bd-cloumn operate="load" :method="method" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vb-bd-cloumn>
      <vb-bd-table operate="load" method="handleDistributeData" :trigger.sync="TableLoadTrigger" :query="Query" :result.sync="TableList"></vb-bd-table>
   </vx-view-datatable>
</template>
<style>
td {
   vertical-align: middle;
   text-align: center;
}
</style>
<script>
 var Event = new Vue();
Vue.component("vb-grid-distribute", {
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
            order: [[0, "asc"]],
            columns: []
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
            Period: "All",
            Domain: "Mall"
         },
         Prefix: "Mall",
         Relations: [
            {
               GroupBy: {
                  Period: "All",
                  Domain: "Mall"
               },
               Prefix: "Mall"
            }
         ]
      };
      let Options = {
         IndexOptions: ["Mall_Enter"]
      };

      let me = this;
      Event.$on("Widget.DomainChanged", function(data) {
         Query.Locations = data.Query.Locations;
         Query.Prefix = data.Query.Prefix;
         Query.GroupBy.Domain = data.Query.Prefix;

         Options.IndexOptions[0] = data.Query.Prefix+"_Enter"

         me.$set(me, "Query", Query);
         me.$set(me.Query, "Options", Options);

         if (data.Query.Locations.ZoneTypeId === "268dece4837b484d92abc389bad3f2ec") {
            console.log("ZoneTypeId");
            let Relations = [
               {
                  GroupBy: {
                     Period: "All",
                     Domain: "Mall"
                  },
                  Prefix: "Mall"
               }
            ];
            me.$set(me.Query, "Relations", Relations);
            me.method = "getDistributeColumns";
            me.LoadTrigger = true;
         } else {
            me.method = "getDistributeColumns";
            me.LoadTrigger = true;
         }
      });

      Event.$on("Widget.TimeChanged", function(data) {
         Query.Times = data.Query.Times;
         me.$set(me, "Query", Query);
         me.$set(me.Query, "Options", Options);
         me.method = "getDistributeColumns";
         me.LoadTrigger = true;
      });

      this.$set(this, "Query", Query);
      this.$set(this.Query, "Options", Options);
      this.method = "getDistributeColumns";
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
            return this.tableList;
         },
         set(val) {
            if (val) {
               this.tableList.data = val.data;
               this.tableList.footer = val.footer;
            }
         }
      }
   },
   watch: {
      List() {
         var columns = this.List;
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
