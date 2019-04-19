<template>
   <div class="vp-widget-flowdistribution">
      <!-- <div class="slider">
         <ul>
            <li :style="'width:'+(100/lavelList.length)+'%'" v-for="item in lavelList" :key="item">{{item.title}}</li>
         </ul>
         <el-slider
            v-model="lavel"
            :step="50"
            :show-tooltip="false"
            show-stops>
         </el-slider>
      </div> -->
      <vp-widget :events="Widget.Events" :url="url" :method="method" :query.sync="Widget.Query" :options.sync="Widget.Options" shadow="never" style="height: 500px">
      </vp-widget>
   </div>
</template>
<script>
Vue.component("vp-widget-flowdistribution", {
   template: template,
   props: [],
   data() {
      return {
         lavelList:[{
            title:"商铺"
         },{
            title:"楼层"
         },{
            title:"案场"
         }],
         lavel:0,
         url: "/ChartService.html?op=processControl",
         method: "ShowEchart",
         Widget: {
            Events: ["PageLoad","TimeChanged","DomainChanged","Compare"],
            Query: {
               DataFields: ["Prefix_Enter"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  MallIds: ["3a47393d1912485d816f587542153b8d"],
                  ZoneTypeId:"7509ea53292f4b7c97ddcbe70c8fd318"
               },
               Times: {
               },
               GroupBy: {
                  Period: "All",
                  Domain: "Zone"
               },
               Prefix: "Zone"
            },
            Options: {
               SeriesType: {
                  Type: "DomainLabel"
               },
               XAxisType: {
                  Type: "DomainLabel"
               },
               IndexFields: ["Zone_Enter"],
               Code: "chart-bar-time"
            }
         }
      };
   },
   computed: {},
   watch: {},
   methods: {
      lavel(){
         var index=Math.floor(this.lavel/(100/(this.lavelList.length-1)))
         var Domain=this.lavelList[index].key
         console.log({
            GroupBy: { Domain: Domain },
            Locations:{ ZoneTypeId:this.typeId }
         })
         PubSub.publish("DomainChanged",{
            Query:{
               GroupBy: { Domain: Domain },
               Locations:{ ZoneTypeId:this.typeId }
            }
         })
      }
   },
   created() {},
   mounted() {
      var me=this
      PubSub.subscribe("Widget.CompareUrl",function(id,data){
         me.url=data.Url
      });
      PubSub.subscribe("Widget.Compare",function(id,data){
         console.log(222)
      })
      console.error('FlowDistribution')
      PubSub.subscribe("Widget.DomainChanged",function(name,data){
         me.lavelList.splice(0,1)
         if(data.Query.Locations && data.Query.Locations.ZoneTypeId == "21a9fe6fe9be432589dea9167e748364"){
            me.lavelList.splice(0,1)
         }
         me.typeId= data.Query.Locations.ZoneTypeId
      })
   }
});
</script>


<style lang="less">

</style>
