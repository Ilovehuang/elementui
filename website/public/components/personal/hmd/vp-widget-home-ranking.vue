<template>
   <div class="form-ranking">
      <vp-widget :events="Widget.Events" :url="url" :method="method" :query.sync="Widget.Query" :options.sync="Widget.Options" shadow="never">
       <div class="head">
          <img src="images/common/ranking.png">
          <h4>客流排行榜</h4>
       </div>
       <div class="list">
          <!-- <div class="cal"><span :class="!rk?'active':''" @click="listClick(0)">前五名</span></div> -->
          <ul class="ranking">
            <li @click="rankClick(index)" :class="item.active?'active':''" v-for="(item,index) in ranking" :key="item.title">
               <p><img src="images/common/rankingbg.png"> {{index+1}}.{{item.title}}</p>
            </li>
          </ul>
          <div class="bg"><img src="images/common/graph.png" alt=""></div>
       </div>
       <div class="data">
          <h6>{{rankingTitle}}</h6>
          <ul>
             <li><h5>{{count}}</h5><p>客流量</p></li>
             <!-- <li><h5>{{sale}}</h5><p>上网人次</p></li>
             <li><h5>{{conversion}}</h5><p>平均驻留时长</p></li> -->
          </ul>
       </div>
       </vp-widget>
   </div>
</template>
<script>
Vue.component("vp-widget-home-ranking", {
   template: template,
   props: [],
   data() {
      return {
         method: "ShowRankingData",
         Widget: {

            Events: ["PageLoad","TimeChanged"],
            Query: {
               DataFields: ["Prefix_Enter"],
               Locations: {
                  CompanyId: "4ccc681f4eac4cff97f27b6da03fd612",
                  ZoneTypeId: "268dece4837b484d92abc389bad3f2ec"
               },
               Times: {

               },
               GroupBy: {
                  Period: "All",
                  Domain: "Zone"
               },
               SortBy: {
         			Zone_Enter: -1
         		},
         		Limit: [0, 5],
               Prefix: "Zone"
            }
         },
         rankingLast:[
            {title:"京朝阳区朝外大街239号望京分店",count:'62,124',sale:'61,467',conversion:'49%'},
            {title:"京朝阳区朝外大街239号望京分店",count:'52,124',sale:'51,467',conversion:'59%'},
            {title:"上海吴凡区五法大姐208号缤谷广场店",count:'42,124',sale:'41,467',conversion:'69%'},
            {title:"上海吴凡区五法大姐208号缤谷广场店",active:true,count:'32,124',sale:'31,467',conversion:'79%'},
            {title:"上海吴凡区五法大姐208号缤谷广场店",count:'22,124',sale:'21,467',conversion:'89%'},
         ],
         rk:0,
         count:'',
         sale:'',
         conversion:'',
         rankingTitle:""
      };
   },
   computed: {
   },
   watch: {
   },
   methods: {
      rankClick(index){
         for (var i = 0; i < this.ranking.length; i++) {
            var element = this.ranking[i];
            element.active=false
            if(i==index){
               element.active=true
               this.count= element.count
               this.sale= element.sale
               this.conversion= element.conversion
               this.rankingTitle=element.title+" 数据统计"
            }
         }
      },
      listClick(flag){
         this.rk=flag
         if(flag){
            this.ranking=this.rankingLast
         }else{
            this.ranking=this.rankingFrist
         }
      }
   },
   created() {
   },
   mounted() {
      var me=this;
      PubSub.subscribe("Widget.RankingData",function(name, data){
         console.log("Widget.RankingData",data)
         var list=[]
         for (var index = 0; index < data.length; index++) {
            var item = data[index];
            if(index>=5){
               break;
            }
            list.push({
               title:item.DomainLabel||"",
               count:item.Zone_Enter||"0",
               active:false
            })

         }
         me.ranking=list
         me.rankClick(0)
      })
   },
});
</script>


<style lang="less">
@headerheight: 50px;
.form-ranking {
   background: #fff;
   overflow: auto;
   .head{
      text-align: center;
      margin-top: 8px;
      h4{
         margin-top: 5px;
         font-size: 18px
      }
      h4::after{
         content: "";
         display: block;
         background: #fdba4f;
         width: 54px;
         height: 2px;
         margin: 0 auto;
         margin-top: 5px;
      }
   }
   .list{
      margin: 0 auto;
      margin-top: 20px;
      position: relative;
      padding-bottom: 30px;
      .bg{
         width: 100%;
         position: absolute;
         left: 0;
         bottom: 0;
         img{
            width: 100%
         }
      }
      .cal{
         padding: 0 10%;
         border-bottom: 2px #fafafa solid;
         span{
            width: 100%;
            display: inline-block;
            text-align: center;
            cursor: pointer;
         }
      }
      span.active::after{
         content: "";
         display: block;
         background: #fdba4f;
         width: 14px;
         height: 3px;
         margin: 0 auto;
         margin-top: 5px;
      }
      ul{
         z-index: 100;
         position: relative;
         margin-top: 5px;
         padding: 0 3%;
         li{
            line-height: 45px;
            height: 45px;
            p{
               font-size: 16px;
               line-height: 40px;
               cursor: pointer;
               transition: .5s all ease-out;
               img{
                  transition: .3s opacity ease-out,1s margin-right ease-out;
                  width:20px;
                  opacity: 0;
               }
            }
            &.active{
               p{
                  font-size: 18px;
                  font-weight: 900;
                  background:#f3f1f0;
                  color: #ffc62e;
                  img{
                     opacity: 1;
                     margin-right: 15px;
                  }
               }
            }
         }
      }
   }
   .data{
      overflow: auto;
      height: 120px;
      h6{
         color: #ffc62e;
         text-align: center;
         margin-top: 15px;
      }
      li{
         width: 100%;
         float: left;
         text-align: center;
         h5{
            font-size: 18px;
            color: #000;
            font-weight: 900;
            margin-top: 15px;
            margin-bottom: 15px;
         }
         p{
            font-size: 14px
         }
      }
   }
}
</style>
