<template>
   <div class="form-data">
      <vp-widget :events="Widget.Events" :url="url" :method="method" :query.sync="Widget.Query" :options.sync="Widget.Options" shadow="never">
         <ul>
            <li>
               <el-progress type="circle" width="160" color="#7c99e1" :percentage="75" stroke-width="11" :show-text="showText" status="exception"></el-progress>
               <div class="text">
                  <h2>{{Count.num||"0"}}</h2>
                  <!-- <p class="sale">{{text}}:{{Count.expect}}</p> -->
                  <p class="count">客流量(人)</p>
               </div>
            </li>
            <li>
               <el-progress type="circle" width="160" color="#f36060" :percentage="75" stroke-width="11" :show-text="showText" status="exception"></el-progress>
               <div class="text">
                  <h2>{{Sale.num||"0"}}</h2>
                  <!-- <p class="sale">{{text}}:{{Sale.expect}}</p> -->
                  <p class="count">上网人次(人)</p>
               </div>
            </li>
            <li>
               <el-progress type="circle" width="160" color="#fdba4f" :percentage="75" stroke-width="11" :show-text="showText" status="exception"></el-progress>
               <div class="text">
                  <h2>{{Convert.num||"0"}}</h2>
                  <!-- <p class="sale">{{text}}:{{Convert.expect}}</p> -->
                  <p class="count">平均驻留时长(分钟)</p>
               </div>
            </li>
         </ul>
      </vp-widget>
   </div>
</template>
<script>
Vue.component("vp-widget-home-data", {
   template: template,
   props: [],
   data() {
      return {
         url:"/HomeChartService.html?op=report",
         method: "ShowBigData",
         Widget: {
            Events: ["PageLoad","TimeChanged"],
            Query: {
               DataFields: ["Prefix_Enter","Prefix_OnlineUser","Prefix_Duration"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  MallIds: ["3a47393d1912485d816f587542153b8d"]
               },
               Times: {

               },
               GroupBy: {
                  Period: "All",
                  Domain: "All"
               },
               Prefix: "Mall"
            }
         },
         Count: {
            num: "0",
            expect: "",
            yoy: -1,
            ringRatio: 10
         },
         Sale: {
            num: "0",
            expect: "",
            yoy: -1,
            ringRatio: 10
         },
         Convert: {
            num: "0",
            expect: "",
            yoy: -1,
            ringRatio: 10
         },
         showText:false,
         text:"前一天"
      };
   },
   computed: {},
   watch: {},
   methods: {},
   created() {
   },
   mounted() {
      var me=this;
      PubSub.subscribe("Widget.BigData",function(name, data){
         var msg=data[0]
         me.Count.num=msg.Mall_Enter
         me.Sale.num=msg.Mall_OnlineUser
         me.Convert.num=msg.Mall_Duration
      })

   }
});
</script>


<style lang="less">
@headerheight: 50px;
.form-data {
   background: #fff;
   overflow: auto;
   margin-bottom: 10px;
   .text{
      position:relative;
      top:-100px;
   }
   ul {
      margin: 40px;
      overflow: auto;
   }
   li {
      float: left;
      width: 33.3%;
      text-align: center;
      font-size: 14px;
      h2 {
         font-size: 34px;
         font-weight: 900;
      }
      img {
         vertical-align: middle;
         margin-right: 2px;
      }
      .sale {
         color: #777;
         margin: 8px 0;
         font-size: 12px;
         font-weight: 100px
      }
      .count {
         margin-top: 80px;
         font-size: 20px;
         margin-bottom: -97px;
      }
   }
}
</style>
