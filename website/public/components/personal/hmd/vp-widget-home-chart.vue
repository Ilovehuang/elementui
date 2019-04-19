<template>
   <div class="form-echart">
      <h1 class="title"></h1>
      <div class="echart">
         <vp-widget :events="Widget.Events" :url="url" :method="method" :query.sync="Widget.Query" :options.sync="Widget.Options" shadow="never" style="height: 500px">
         </vp-widget>
      </div>
   </div>
</template>
<script>
Vue.component("vp-widget-home-chart", {
   template: template,
   props: [],
   data() {
      return {
         url: "/ChartService.html?op=processControl",
         method: "ShowEchart",
         Widget: {
            Events: ["PageLoad","TimeChanged"],
            Query: {
               DataFields: ["Prefix_Enter"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  MallIds: ["3a47393d1912485d816f587542153b8d"]
               },
               Times: {
               },
               GroupBy: {
                  Period: "60",
                  Domain: "All"
               },
               Prefix: "Mall"
            },
            Options: {
               SeriesType: {
                  Type: "DomainLabel"
               },
               XAxisType: {
                  Type: "TimeLabel",
                  TimeFormat: "HH:mm"
               },
               IndexFields: ["Mall_Enter"],
               Code: "chart-line-briefing"
            }
         }
      };
   },
   computed: {},
   watch: {},
   methods: {},
   created() {},
   mounted() {
   }
});
</script>


<style lang="less">
@headerheight: 50px;
.form-echart {
   background: #fff;
   margin-top: 20px;
   margin-bottom: 20px;
   padding-bottom: 0.1px;
   .title {
      position: relative;
      top: 53px;
      left: 40px;
      font-size: 20px;
   }
   .echart {
      width: 100%;
      padding: 25px;
      img {
         width: 100%;
      }
   }
}
</style>
