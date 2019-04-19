<template>
   <div class="form-formcompare">
      <div v-if="showBlack!='behavior' && showBlack!='online'">
      <div class="current" v-if="false">
         <p class="label">
            当前项情况：
            <!-- <vx-basic-button   post="btnObj"   label="查询"></vx-basic-button> -->
            <span :key="item" v-for="item in current.list">{{item.title}}</span>
         </p>
      </div>
      <div class="compare" v-if="false">
         <p class="label">
            对比项情况：
            <vx-basic-button @click="selDateShow=!selDateShow" style="display:inline-block" size="mini"  plain="false" round="false"  label="选择时间"></vx-basic-button>
            <span class="selDate" v-show="selDateShow" >
               <b @click="selDateShow=false" class="close"></b>
               <input type="text" v-model="startDate" id='formCompaerStart'> 至 <input type="text" v-model="endDate" id='formCompaerEnd'>
               <button @click="selShow=!selShow" >快速选择<img src=" images/common/down.png"></button>
               <vp-widget-time-selection :show.sync='selShow' :publish="publish"></vp-widget-time-selection>
            </span>
            <span class="item">
               {{startDate}}至{{endDate}}
            </span>
            <vx-basic-button @click="Relations" class="btn" :btncolor="!btnLabel?'danger':'warning'" size="mini" plain="false" round="false"  :label="btnLabel?'　对比　':'取消对比'"></vx-basic-button>
            <!-- <button>对比</button> -->
         </p>
      </div>
      </div>
      <div v-if="showBlack=='timeSharing'">
         <div class="echart">
            <vp-widget-flowtime></vp-widget-flowtime>
         </div>
         <div class="table" id="tabBox">
            <div style="float:right">
               <vx-basic-button @click="btnExportBtn" class="btnExportBtn" btncolor="primary" size="mini" plain="false" round="false"  label="导出"></vx-basic-button>
            </div>
            <h2>{{localName}}客流分时表</h2>
            <vb-grid-timesharing ></vb-grid-timesharing>
         </div>
      </div>
      <div v-else-if="showBlack=='distribution'" >
         <div class="echart">
            <vp-widget-flowdistribution></vp-widget-flowdistribution>
         </div>
         <div class="table" id="tabBox">
            <div style="float:right">
               <vx-basic-button @click="btnExportBtn" class="btnExportBtn" btncolor="primary" size="mini" plain="false" round="false"  label="导出"></vx-basic-button>
            </div>
            <h2>{{localName}}客流分布表</h2>

            <vb-grid-distribute></vb-grid-distribute>
         </div>
      </div>
      <div v-else-if="showBlack=='exhibition'">
         <div class="echart">
            <img src="images/report/report3.jpg">
         </div>
      </div>
      <div v-else-if="showBlack=='portrait'">
         <div class="echart">
            <vp-widget-portrait></vp-widget-portrait>
         </div>
      </div>
      <div v-else-if="showBlack=='heat'">
         <ul class="floor"><li  @click="floorClick(index)" :class="item.active?'active':''" v-for="(item,index) in floorList" :key="index">{{item.title}}</li></ul>
         <div class="echart">
            <vp-widget-heatmap style="margin-top:20px">
            </vp-widget-heatmap>
         </div>
      </div>
      <div v-else-if="showBlack=='stadium'">
         <div class="echart">
            <vp-widget-venuemap></vp-widget-venuemap>
         </div>
      </div>
      <div v-else-if="showBlack=='scatter'">
         <ul class="floor"><li @click="floorClick(index)" :class="item.active?'active':''" v-for="(item,index) in floorList" :key="index">{{item.title}}</li></ul>
         <div class="echart">
            <vp-widget-scattermap ></vp-widget-scattermap>
         </div>
      </div>
      <div v-else-if="showBlack=='trace'">
         <ul class="floor"><li @click="floorClick(index)" :class="item.active?'active':''" v-for="(item,index) in floorList" :key="index">{{item.title}}</li></ul>
         <span class="search">
            <span style="float:left;line-height: 30px;">输入MAC地址:</span>
            <vb-remoteselect-personmacday style="float:left;padding:0 5px" v-model="macId"></vb-remoteselect-personmacday>
            <vx-basic-button @click="macBtn" btncolor="primary" style="display:inline-block" size="mini" plain="false" round="false"  label="查询"></vx-basic-button>
         </span>
         <div class="echart">
            <vp-widget-trackmap></vp-widget-trackmap>
         </div>
      </div>
      <div v-else-if="showBlack=='density'">
         <ul class="floor"><li @click="floorClick(index)" :class="item.active?'active':''" v-for="(item,index) in floorList" :key="index">{{item.title}}</li></ul>
         <div class="echart">
            <vp-widget-densitymap>
            </vp-widget-densitymap>
         </div>
      </div>
      <div v-else-if="showBlack=='behavior'">
         <div class="echart">
            <vb-scope-onlinebehavior></vb-scope-onlinebehavior>
            <vb-grid-onlinebehavior></vb-grid-onlinebehavior>
         </div>
      </div>
      <div v-else-if="showBlack=='online'">
         <div class="echart">
            <vb-scope-onlineuser></vb-scope-onlineuser>
            <vb-grid-onlineuser></vb-grid-onlineuser>
         </div>
      </div>
      <div v-else-if="showBlack=='timeflow'">
         <div class="echart">
            <vb-scope-online></vb-scope-online>
            <vb-grid-online></vb-grid-online>
         </div>
      </div>
      <div v-else-if="showBlack=='log'">
         <div class="echart">
            <vb-scope-onlineuser></vb-scope-onlineuser>
            <vb-grid-onlineuser></vb-grid-onlineuser>
         </div>
      </div>
      <div v-else-if="showBlack=='residence'">
         <ul class="floor"><li @click="floorClick(index)" :class="item.active?'active':''" v-for="(item,index) in floorList" :key="index">{{item.title}}</li></ul>
         <span class="search">
            <span style="float:left;line-height: 30px;">输入MAC地址:</span>
            <vb-remoteselect-personmacday style="float:left;padding:0 5px" v-model="macId"></vb-remoteselect-personmacday>
            <vx-basic-button @click="macBtn" btncolor="primary" style="display:inline-block" size="mini" plain="false" round="false"  label="查询"></vx-basic-button>
         </span>
         <div class="echart">
            <vp-widget-residentmap></vp-widget-residentmap>
         </div>
      </div>
      <div v-else-if="showBlack=='sankey'">
         <div class="ecahrt">
            <vp-widget-sankey></vp-widget-sankey>
         </div>
      </div>
      <div v-else-if="showBlack=='graph'">
         <div class="ecahrt">
            <vp-widget-graph></vp-widget-graph>
         </div>
      </div>
      <div v-else>
            暂无模块
      </div>

   </div>
</template>
<script>


Vue.component("vp-widget-report-compare", {
   template: template,
   props: [],
   data() {
      return {
         btnObj:{
            btncolor:"primary",
            style:"display:inline-block",
            size:"mini",
            plain:"false",
            round:"false",
         },
         floorList:[{title:"1F",key:"92c09ad1630649cbab92ec5899a9cf21",active:true},{title:"2F",key:"eeaba4c8bc214484b98097c831ce5b9c"},{title:"3F",key:"17d3ba25ec974b9bb9ab566314cd4347"},{title:"4F",key:"00e25c7ac28a4272ac006aee2c298494"},{title:"5F",key:"76d17138efc54767a8d6d6feb426c3b9"}],
         startDate:moment().format("YYYY-MM-DD"),
         endDate:moment().format("YYYY-MM-DD"),
         btnLabel:true,
         macId:"",
         sel:true,
         False:false,
         publish:"ReportCompare",
         selShow:false,
         selDateShow:false,
         showBlack:"timeSharing",//timeSharing,distribution,exhibition,portrait,heat,density,point,more,behavior,online
         localName:"案场",
         current: {
            list: [
               {
                  key:"localtion",
                  title: "1个案场"
               },
               {
                  key:"times",
                  title: moment().format("YYYY-MM-DD")+"至"+moment().format("YYYY-MM-DD")
               }
            ]
         },
         compare: {
            list: []
         }
      };
   },
   computed: {},
   watch: {},
   methods: {
      btnExportBtn(){
         // console.log("dataTable",
         // $('#tabBox table').data("Grid.Options")
         //    ,$('#tabBox table').option
         // )

         $('#tabBox table').exportTable();
      },
      macBtn(){
         PubSub.publish("Widget.QueryChanged",{
            Query:{
               MacAddress: this.macId
            }
         })
      },
      floorClick(activeIndex){
         for (var index = 0; index < this.floorList.length; index++) {
            var element = this.floorList[index];
            element.active=false
            if(activeIndex==index){
               element.active=true;
               element.title+=" ";
               console.log(element.key)
               PubSub.publish("Widget.FloorChanged",{
                  Query:{
                     Locations:{
                        FloorId:element.key
                     }
                  }
               })
            }
         }
      },
      Relations(){

         var Relations = {
            Relations:[{
               Times:{
                  StartTime:this.startDate,
                  EndTime:this.endDate
               }
            }]
         }
         if(!this.btnLabel){
            Relations.Relations[0].Times=null
         }

         PubSub.publish("Widget.CompareUrl",{Url:!this.btnLabel?"/ChartService.html?op=processControl":"/ChartService.html?op=timeCompareProcess"})
         if(!this.btnLabel){
            Relations=null
         }

         PubSub.publish("Widget.Compare",{
            Query:Relations,
            Options:{
               Code: this.btnLabel?"chart-bar-timecompare":"chart-bar-time"
            }});
         this.btnLabel=!this.btnLabel
      },
      timeLoad(){
         var me=this
         setTimeout(function(){
         var setOps = {
            singleDatePicker: true,
            locale: {
               direction: "ltr",
               format: "MM/DD/YYYY HH:mm",
               separator: " - ",
               applyLabel: "确定",
               cancelLabel: "取消",
               fromLabel: "From",
               toLabel: "To",
               customRangeLabel: "Custom",
               daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
               monthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
               firstDay: 1
            },
            linkedCalendars: false,
            autoUpdateInput: false,
            showCustomRangeLabel: false,
            startDate: moment().format("MM/DD/YYYY"),
            opens: "right"
         };
         $("#formCompaerStart").daterangepicker(setOps, function(start, end, label) {
            me.startDate = start.format("YYYY-MM-DD");
         });
         $("#formCompaerEnd").daterangepicker(setOps, function(start, end, label) {
            me.endDate = start.format("YYYY-MM-DD");
         });
      },1)
      },
      Current(){
         var me=this;
         PubSub.subscribe("Widget.TimeChanged", function(name, Date){
            var startDate = Date.Query.Times.StartTime;
            var endDate = Date.Query.Times.EndTime;
            me.CurrentKeyChenged('times',startDate+"至"+endDate)
         });
         PubSub.subscribe("Widget.DomainChanged",function(name, data){
            var zoneTypeId = data.Query.Locations.ZoneTypeId;
            if(data.Query.Locations.ZoneIds)
               var length=data.Query.Locations.ZoneIds.length;
            else
               var length=data.Query.Locations.MallIds.length;
            if(!zoneTypeId){
               me.CurrentKeyChenged('localtion',length+'个案场')
               me.localName="案场"
            }else if(zoneTypeId=="2e94b7de77284652ad54b457903d60ed"){
               me.CurrentKeyChenged('localtion',length+'个场馆')
               me.localName="场馆"
            }else if(zoneTypeId=="21a9fe6fe9be432589dea9167e748364"){
               me.CurrentKeyChenged('localtion',length+'个楼层')
               me.localName="楼层"
            }else if(zoneTypeId=="268dece4837b484d92abc389bad3f2ec"){
               me.CurrentKeyChenged('localtion',length+'家商铺')
               me.localName="商铺"
            }
            me.showLocationSelect=false
         })
      },
      CurrentKeyChenged(key,title){
         for (var index = 0; index < this.current.list.length; index++) {
            var item = this.current.list[index];
            if(item.key==key){
               item.title=title
            }
         }
      }
   },
   created() {},
   mounted() {
      var me=this
      var search=location.search.replace("?","").split("=")
      this.Current();
      if(search[0]=="key")
         me.showBlack=search[1]
      else
         me.showBlack="timeSharing"
      if(search[1]=="timeSharing" || search[1]=="distribution")


      PubSub.subscribe("HeaderNavKey",function(name,key){
         me.showBlack=key
      })
      PubSub.subscribe("Widget."+me.publish, function(name, Date){
         me.startDate = Date.Query.Times.StartTime;
         me.endDate = Date.Query.Times.EndTime;
      });
      this.timeLoad()
   }
});
</script>


<style lang="less">
.form-formcompare {
   background: #fff;

   .current,.compare{
      background: #eaf1f9;
      border: 1px solid #dde7f3;
      border-bottom: none;
      position: relative;
      line-height: 40px;
      .btn{
         position: absolute;
         left: 0;right: 0;top: 0;bottom: 0;
         margin: auto;
         width: 67px;
         height: 31px;
      }
         // button {
         //    background: #ffcc00;
         //    color: #fff;
         //    border: none;
         //    position: absolute;
         //    left: 0;
         //    right: 0;
         //    margin: auto;
         //    bottom: 0;
         //    top: 0;
         //    width: 75px;
         //    height: 28px;
         //    cursor: pointer;
         //    transition:.5s;
         // }
         // button:hover{
         //    transform:scale(1.1,1.1);
         //    background: rgba(255,204,2,.8);
         // }

   }
   .current{
      &>.label {
         margin-left: 20px;
         span {
            font-size: 14px;
            border: 1px solid #c7d6e9;
            line-height: 26px;
            height: 26px;
            display: inline-block;
            padding: 0 10px;
            margin-right: 10px;

         }
      }
   }
   .compare{

      &>.label{
         margin-left: 20px;
         .item{
            font-size: 14px;
            background: #eaf1f9;
            border: 1px solid #dde7f3;
            line-height: 36px;
            cursor: pointer;
            transition: .5s;
            padding: 6px 6px;
         }
         .selDate{
            background: #fff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            padding:5px 10px;
            position: absolute;
            line-height: 20px;
            margin-top: 40px;
            margin-left: -97px;

            input{
               width: 75px;
            }
            button{
               margin-left: 5px;
               padding-left: 5px;
               cursor: pointer;
            }
            &>:not(b){
               position: relative;

               z-index: 2;
            }
            b{
               position: fixed;
               width: 100%;
               height: 100%;
               display: block;
               left: 0;top: 0;
            }
         }
      }
   }
   &>div{
      padding-top: 1px;
   }
   .echart {

      padding: 22px 25px;
      margin-top: 40px;
      padding-top: 0;
      margin-bottom: 20px;
      position: relative;


      h2 {
         text-align: center;
         font-size: 22px;
         padding-top: 30px;
      }
      img {
         width: 100%;
         // border: 1px solid #f2f2f2;
      }
   }
   position: relative;
   .search{
      margin-left: 25px;
      display:inline-block;
      margin-top: 15px;
      .vx-basic-button .el-button{
         line-height:1;
      }
   }
   .floor{
      float: right;
      margin-right: 50px;
      padding-top: 10px;
      li{
         float: left;
         background: #EBEDF6;
         padding: 2px 5px;
         margin-right: 5px;
         border-radius: 8px;
         cursor: pointer;
      }
      li.active{
         background: #F7BB2F;
         color: #fff;
      }
   }
   .table {
      background: #fff;
      padding: 30px 60px;
      margin-bottom: 20px;
      h2{
         margin-bottom: 20px
      }
      th{
         border-top: 1px solid #ebeef5;
         color: #000;
      }
      td{
         border-bottom: 0;
      }
      .el-table::before{
         height: 0;
      }
   }
}
</style>
