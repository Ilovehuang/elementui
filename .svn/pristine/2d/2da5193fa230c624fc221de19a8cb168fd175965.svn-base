<template>
   <vx-view-datatable :options="Options" :tabledata="tableList.data" :footerdata="tableList.footer" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <slot></slot>
      <vd-bd-column operate="load" :trigger.sync="LoadTrigger" :method="method" :query="Query" :result.sync="List"></vd-bd-column>
      <vd-bd-table operate="save" method="getKpiTableData" :trigger.sync="TableLoadTrigger" :query="Query" :result.sync="TableList"></vd-bd-table>
   </vx-view-datatable>
</template>
<style>
td {
   vertical-align: middle;
   text-align: center;
}
</style>
<script>
Vue.component("vm-grid-kpitable", {
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
            order: [0, "asc"],
            columns: []
         },
         List: [], /// 表格数据
         Query: {}, /// 查询条件
         LoadTrigger: false, /// 加载数据
         TableLoadTrigger: false
      };
   },
   created() {
      let Query = {
         DataFields: ["Prefix_Enter", "Prefix_Exit"],
         Locations: {
            CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
            ZoneTypeId: "21a9fe6fe9be432589dea9167e748364"
         },
         Times: {
            StartTime: "2018-10-05",
            EndTime: "2018-10-05"
         },
         GroupBy: {
            Period: "0",
            Domain: "Zone"
         },
         Prefix: "Zone",
         Relations: [
            {
               DataFields: ["Prefix_Enter", "Prefix_Exit"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  ZoneTypeId: "21a9fe6fe9be432589dea9167e748364"
               },
               Times: {
                  StartTime: "2018-10-05",
                  EndTime: "2018-10-05"
               },
               GroupBy: {
                  Period: "0",
                  Domain: "All"
               },
               Prefix: "Zone"
            }
         ]
      };

      let Options = {
         	"TimeLabel":{
         		"TimeType":"YYYY-MM-DD"
         	}

      }
      let me = this;
      this.$Bus.$on("Widget.DomainChanged", function(data) {
         Query.Locations = data.Query.Locations;
         Query.Prefix = data.Query.Prefix;
         Query.GroupBy.Domain = data.Query.Prefix;

         me.$set(me, "Query", Query);
         me.method = "getKpiList";
         me.LoadTrigger = true;
      });
      this.$Bus.$on("Widget.TimeChanged", function(data) {
         Query.Times = data.Query.Times;
         me.$set(me, "Query", Query);
         me.method = "getKpiList";
         me.LoadTrigger = true;
      });
      this.$set(this, "Query", Query);
      this.Query.Options = Options
      this.method = "getKpiList";
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
            console.log("this.tableList");
            console.log(this.tableList);
            return this.tableList;
         },
         set(val) {
            if (val) {
               console.log("val");
               console.log(val);
               this.tableList.data = val.data;
               this.tableList.footer = val.footer;
            }
         }
      }
   },
   watch: {
      List() {
         var columns = [];
         columns.push({
            title: "位置名称",
            width: 80,
            className: "text-center",
            data: "DomainLabel"
         });
         var kpilist = this.List;
         console.log("kpilist");
         console.log(kpilist);
         for (var key in kpilist) {
            var timeinfo = {
               title: key,
               width: 80,
               className: "text-center",
               data: kpilist[key]
            };
            console.log("key")
            console.log(key)
            console.log(kpilist[key])
            columns.push(timeinfo);
         }

         console.log(columns)
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
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
