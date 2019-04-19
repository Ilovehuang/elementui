<template>
   <transition name="bounce"  >
      <div class="vp-widget-time-selection"   v-show='Show'>
         <div class="close" @click="close"></div>
         <!-- <div class="labelBox">
          <div class="time label">
             <div class="left">选择时间段</div>
             <div class="right">
                  <span style="color:#ffcc01" @click="setHour('11:00','14:00')">11:00-14:00</span>&nbsp;&nbsp;<span style="color:#4e548e" @click="setHour('16:00','20:00')">16:00-20:00</span>
                  <div class="hour">自定义时间段：
                     <div  class="clockpicker" data-align="top" data-autoclose="true">
                        <input type="text" v-model="startHour"  >
                     </div>
                         至
                     <div  class="clockpicker2"  data-align="top" data-autoclose="true">
                        <input type="text" v-model="endHour"  >
                     </div>
                  </div>
             </div>
             <vx-item-clockpicker v-if="false"></vx-item-clockpicker>
          </div> -->
          <div class="label">
             <div class="left">按天</div>
             <div class="right"><span v-for="item in dates.day" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">按周</div>
             <div class="right"><span v-for="item in dates.week" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">按月</div>
             <div class="right"><span v-for="item in dates.month" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">&nbsp;</div>
             <div class="right">
                <span class="link" v-for="item in dates.monthAll" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">按季度</div>
             <div class="right"><span v-for="item in dates.quarter" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">按年</div>
             <div class="right"><span v-for="item in dates.year" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <!-- <div class="label">
             <div class="left">按期</div>
             <div class="right"><span v-for="item in dates.stage" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div> -->
          <div class="label">
             <div class="left">按节日</div>
             <div class="right"><span v-for="item in dates.holiday" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label activity">
             <div class="left">按活动</div>
             <div class="right"><span v-for="item in dates.activity" :class="item.active?'active':''" @click="selLabel(item.label)" :key="item">{{item.label}}</span></div>
          </div>
          <div class="label">
             <div class="left">&nbsp;</div>
             <!-- <div class="right btns"><span @click="close">取消</span><span class="confirm" @click="confirm">确定</span></div> -->
          </div>
          <vd-bd-activity operate="load" :trigger.sync="activity.LoadTrigger" :query="activity.Query" :result.sync="activityList"></vd-bd-activity>
          <vd-bd-holiday operate="load" :trigger.sync="holiday.LoadTrigger" :query="holiday.Query" :result.sync="holidayList"></vd-bd-holiday>
      </div>
   </transition>
</template>
<script>
Vue.component("vp-widget-time-selection", {
   template: template,
   props: ["show","publish"],
   data() {
      return{
         dates:{
            day:[{
               label:"今天",
               startDate:moment().format("YYYY-MM-DD"),
               endDate:moment().format("YYYY-MM-DD")
            },{
               label:"昨天",
               startDate:moment().subtract(1, 'days').format("YYYY-MM-DD"),
               endDate:moment().subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"前天",
               startDate:moment().subtract(2, 'days').format("YYYY-MM-DD"),
               endDate:moment().subtract(2, 'days').format("YYYY-MM-DD")
            },{
               label:"上周同日",
               startDate:moment().subtract(7, 'days').format("YYYY-MM-DD"),
               endDate:moment().subtract(7, 'days').format("YYYY-MM-DD")
            },{
               label:"上月同日",
               startDate:moment().subtract(1, 'months').format("YYYY-MM-DD"),
               endDate:moment().subtract(1, 'months').format("YYYY-MM-DD")
            }],
            week:[{
               label:"本周",
               startDate:moment().day(1).format("YYYY-MM-DD"),
               endDate:moment().day(7).format("YYYY-MM-DD")
            },{
               label:"上一周",
               startDate:moment().subtract(7, 'days').day(1).format("YYYY-MM-DD"),
               endDate:moment().subtract(7, 'days').day(7).format("YYYY-MM-DD")
            },{
               label:"下一周",
               startDate:moment().add(7, 'days').day(1).format("YYYY-MM-DD"),
               endDate:moment().add(7, 'days').day(7).format("YYYY-MM-DD")
            }],
            month:[{
               label:"本月",
               startDate:moment().set('date',1).format("YYYY-MM-DD"),
               endDate:moment().add(1,"months").set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"上一月",
               startDate:moment().subtract(1,"months").set('date',1).format("YYYY-MM-DD"),
               endDate:moment().set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"下一月",
               startDate:moment().add(1,"months").set('date',1).format("YYYY-MM-DD"),
               endDate:moment().add(2,"months").set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            }],
            monthAll:[{
               label:"1月",
               startDate:moment().month(0).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(1).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"2月",
               startDate:moment().month(1).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(2).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"3月",
               startDate:moment().month(2).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(3).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"4月",
               startDate:moment().month(3).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(4).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"5月",
               startDate:moment().month(4).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(5).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"6月",
               startDate:moment().month(5).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(6).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"7月",
               startDate:moment().month(6).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(7).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"8月",
               startDate:moment().month(7).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(8).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"9月",
               startDate:moment().month(8).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(9).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"10月",
               startDate:moment().month(9).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(10).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"11月",
               startDate:moment().month(10).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(11).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"12月",
               startDate:moment().month(11).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(12).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            }],
            quarter:[{
               label:"一季度",
               startDate:moment().month(0).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(3).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"二季度",
               startDate:moment().month(3).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(6).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"三季度",
               startDate:moment().month(6).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(9).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"四季度",
               startDate:moment().month(9).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(12).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            }],
            year:[{
               label:"本年度",
               startDate:moment().month(0).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().month(12).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"上一年",
               startDate:moment().subtract(1, 'year').month(0).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().subtract(1, 'year').month(12).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            },{
               label:"下一年",
               startDate:moment().add(1, 'year').month(0).set('date',1).format("YYYY-MM-DD"),
               endDate:moment().add(1, 'year').month(12).set('date',1).subtract(1, 'days').format("YYYY-MM-DD")
            }],
            stage:[{
               label:"上一期",
               startDate:"",
               endDate:""
            },{
               label:"上周同期",
               startDate:"",
               endDate:""
            },{
               label:"上月同期",
               startDate:"",
               endDate:""
            },{
               label:"去年同期",
               startDate:"",
               endDate:""
            }],
            holiday:[{
               label:"元旦",
               startDate:"",
               endDate:""
            },{
               label:"春节",
               startDate:"",
               endDate:""
            },{
               label:"妇女节",
               startDate:"",
               endDate:""
            },{
               label:"清明节",
               startDate:"",
               endDate:""
            },{
               label:"劳动节",
               startDate:"",
               endDate:""
            },{
               label:"端午节",
               startDate:"",
               endDate:""
            },{
               label:"母亲节",
               startDate:"",
               endDate:""
            },{
               label:"儿童节",
               startDate:"",
               endDate:""
            },{
               label:"父亲节",
               startDate:"",
               endDate:""
            },{
               label:"国庆节",
               startDate:"",
               endDate:""
            },{
               label:"圣诞节",
               startDate:"",
               endDate:""
            },{
               label:"XX节",
               startDate:"",
               endDate:""
            }],
            activity:[{
               label:"双十一",
               startDate:"",
               endDate:""
            },{
               label:"年中大促",
               startDate:"",
               endDate:""
            },{
               label:"暑期活动",
               startDate:"",
               endDate:""
            },{
               label:"双十二",
               startDate:"",
               endDate:""
            },{
               label:"XX活动",
               startDate:"",
               endDate:""
            }]
         },
         activity:{
            LoadTrigger:true,
            Query:{}
         },
         activityList:[],
         holiday:{
            LoadTrigger:true,
            Query:{},
            List:[]
         },
         holidayList:[],
         startDate:"",
         endDate:"",
         startHour:"11:00",
         endHour:"14:00"
      }
   },
   computed: {
      Show: {
         get() {
            return this.show
         },
         set(val){
            this.$emit("update:show",val)
            return this.show
         }
      },
   },
   watch: {
      Show(){
         // if(this.Show){
         //    setTimeout(() => {
         //       $(".vp-widget-time-selection").focus()
         //    }, 1);
         // }
      },
      holidayList(newList){
         var list=[]
         for (let index = 0; index < newList.length; index++) {
            const element = newList[index];
            list.push({
               label:element.Name,
               endDate:element.EndDate,
               startDate:element.StartDate
            })
         }
         this.dates.holiday=list;
      },
      activityList(newList){
         var list=[]
         for (let index = 0; index < newList.length; index++) {
            const element = newList[index];
            list.push({
               label:element.Name,
               endDate:element.EndDate,
               startDate:element.StartDate
            })
         }
         this.dates.activity=list;
      }
   },
   methods: {
      setHour(startHour,endHour){
         this.startHour=startHour;
         this.endHour=endHour;
      },
      selLabel(label){
         console.log(label)
         for (var key in this.dates) {
            var list = this.dates[key];
            for (var i = 0; i < list.length; i++) {
               var labelTemp = list[i].label;
               list[i].active=false;
               if(labelTemp===label){
                  list[i].active=true;
                  list[i].label=list[i].label+' '
                  this.startDate=list[i].startDate
                  this.endDate=list[i].endDate
                  var TimeChanged=this.publish||"TimeChanged"
                  PubSub.publish("Widget."+TimeChanged, {
                     Query:{"Times":{
                        StartTime: this.startDate,
                        EndTime: this.endDate
                     }}
                  });
                  this.Show=false
               }
            }
         }
      },
      close(){
         this.Show=false
      },
      confirm(){
         this.Show=false
      }
   },
   created() {

   },
   mounted() {
      var me=this;
      $('.clockpicker,.clockpicker2').clockpicker().change(function() {
          if($(this).hasClass('clockpicker')){
             me.startHour=$(this).find("input").val()
          }else{
             me.endHour=$(this).find("input").val()
          }
      });
   },
});
</script>


<style lang="less">
@headerheight: 50px;
.vp-widget-time-selection{
   outline: none;
   width: 700px;
   background: #fff;
   position: absolute;
   z-index: 1000;
   box-shadow:  0 5px 15px rgba(0,0,0,.3);
   .close{
      position: fixed;
      width:100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 0;
      transition: .5s background linear;
   }
   .labelBox{
      box-shadow:  0 0 15px rgba(0,0,0,.3);
      position: relative;
      z-index: 2;
      background: #fff;
      border-radius: 5px;
   }
   .label::after{
      content: "";
      display: block;
      clear: both;
   }
   .label.activity{
      span{
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
      }
   }
   div.label{
      margin: 0;
      position: relative;
      z-index: 10;
      &.time{
        .right{
           span{
              background: none;
           }
           input{
              background: #f1f1f1;
              border: none;
              border-radius: 5px;
              width: 60px;
              padding-left: 10px;
              line-height: 26px;
           }
           .hour{
              width: auto;
              margin-left: 50px;
              font-size: 14px;
              display: inline-block;
              &>div{
                 display: inline-block
              }
           }
        }
      }
      line-height: 50px;
      .right{
         font-size: 0;
         span:first-child{
            margin-left: 0;
         }
         span:nth-child(5n+1){
            margin-left: 0;
         }
         span.link{
            background: none;
            margin-right: 10px;
            width: auto;
            color: #32529d;
            text-decoration: underline;
         }
         span{
            font-size: 14px;
            width: 96px;
            height: 30px;
            line-height: 30px;
            background: #f1f1f1;
            display: inline-block;
            margin: 10px 0;
            margin-left: 10px;
            border-radius: 5px;
            text-align: center;
            cursor: pointer
         }
         span.active{
            background: #ffcc00;
            color: #fff;
         }
         &.btns{
            span{
               float: right;
               background: #e3e3e3
            }
            span:last-child{
               background: #476bc8;
               color: #fff;
               margin-right: 10px;
            }
            span:first-child{
               margin-right: 35px
            }
         }
      }
   }
   .left{
      width: 110px;
      text-align: right;
      float: left;
      margin-right: 35px;
   }
   .right{
      float: left;
      width: 555px;
   }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-out {
     0% {
       transform: translateY(0);
       opacity: 1
     }
     100% {
       transform: translateY(-20px);
       opacity: 0
     }
   }
   @keyframes bounce-in {
     0% {
       transform: translateY(20px);
       opacity: 0
     }
     100% {
       transform: translateY(0px);
       opacity: 1
     }
   }
</style>
