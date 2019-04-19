<template>
   <div class="vp-widget-flowtime">
      <div class="slider">
         <ul>
            <li :style="'width:'+(90/timeList.length)+'%'" v-for="item in timeList" :key="item">{{item.title}}</li>
         </ul>
         <el-slider
            v-model="time"
            :step="100/(timeList.length-1)"
            :show-tooltip="false"
            show-stops>
         </el-slider>
      </div>
      <vp-widget :events="Widget.Events" :url="url" :method="method" :query.sync="Widget.Query" :options.sync="Widget.Options" shadow="never" style="height: 500px">
      </vp-widget>
   </div>
</template>
<script>
Vue.component("vp-widget-flowtime", {
   template: template,
   props: [],
   data() {
      return {
         typeId:"",
         lavelList:[{
            title:"商铺",
            key:"Zone"
         },{
            title:"楼层",
            key:"Zone"
         },{
            title:"案场",
            key:"Mall"
         }],
         timeList:[{
            title:"时",
            key:"60"
         },{
            title:"日",
            key:"0"
         },{
            title:"月",
            key:"Month"
         },{
            title:"年",
            key:"Year"
         }],
         lavel:100,
         time:0,
         url: "/ChartService.html?op=processControl",
         // /ChartService.html?op=timeCompareProcess
         method: "ShowEchart",
         Widget: {
            Events: ["PageLoad", "PeriodChanged","TimeChanged","DomainChanged","Compare"],
            Query: {
               DataFields: ["Prefix_Enter"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  ZoneTypeId: "7509ea53292f4b7c97ddcbe70c8fd318"
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
                  Type: "TimeLabel",
                  TimeFormat: "HH:mm"
               },
               XAxisType: {
                  Type: "TimeLabel",
                  TimeFormat: "HH:mm"
               },
               IndexFields: ["Mall_Enter"],
               Code: "chart-bar-time"
            }
         }
      };
   },
   computed: {},
   watch: {
      time(){
         var index=Math.floor(this.time/(100/(this.timeList.length-1)))
         var period=this.timeList[index].key
         console.log({
            GroupBy: { Period: period }
         })
         var options = {};
         console.log(period);
         switch(period) {
            case "60":
               options = {
                  XAxisType: {
                     TimeFormat: "HH:mm"
                  },
                  SeriesType: {
                     TimeFormat: "HH:mm"
                  }
               };
               break;
            case "0":
               options = {
                  XAxisType: {
                     TimeFormat: "YYYY-MM-DD"
                  },
                  SeriesType: {
                     TimeFormat: "YYYY-MM-DD"
                  }
               };
               break;
            default:
               options = {
                  XAxisType: {
                     TimeFormat: null
                  },
                  SeriesType: {
                     TimeFormat: null
                  }
               };
               break;
         }
         PubSub.publish("Widget.PeriodChanged",{
            Query:{
               GroupBy: { Period: period },

            },
            Options: options
         })
      }
   },
   methods: {},
   created() {},
   mounted() {
      PubSub.subscribe("Widget.CompareUrl",function(id,data){
         me.url=data.Url
         //"/ChartService.html?op=timeCompareProcess"
      });
      PubSub.subscribe("Widget.Compare",function(id,data){
         console.log(222)
      })
      console.error('FlowTime')
      var me=this
      PubSub.subscribe("Widget.DomainChanged",function(name,data){
         if(data.Query.Locations && data.Query.Locations.ZoneTypeId == "21a9fe6fe9be432589dea9167e748364"){
            me.lavelList.splice(0,1)
         }
         me.typeId= data.Query.Locations.ZoneTypeId
      })

   }
});
</script>


<style lang="less">
.vp-widget-flowtime{
   .slider{
      clear:right;
      width:200px;
      font-size: 0;
      float:right;
      margin-right: 5px;
      .el-slider__bar{
         background-color: #e4e7ed
      }
      .el-slider__runway{
         background-color: rgb(88,184,71)
      }
      .el-slider__button{
         border-color: rgb(88,184,71)
      }
      ul{
         width: 130%
      }
      li{
         display: inline-block;
         font-size: 12px;
      }
   }
}
</style>
