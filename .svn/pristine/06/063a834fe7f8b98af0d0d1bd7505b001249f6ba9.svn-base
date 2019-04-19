<template>
   <div class="form-header-filter">
      <el-row type="flex" class="search">
         <el-col v-if="!ShowLocaiton" :span="6" class="location">
            <p>
               <img src=" images/common/sy_liuhuzhongx.png"> 流花中心
            </p>
         </el-col>
         <el-col v-if="ShowLocaiton" :span="6" class="location">
            <p>
               <img src="images/common/sy_liuhuzhongx.png">
               <span @click="closeLocationSelect">
               流花中心
               <img src="images/common/down2.png" alt="">
               </span>
            </p>
            <transition name="bounce"  >
            <div class="select" v-show="showLocationSelect">
               <div class="close" @click="closeLocationSelect(false)"></div>
               <vp-scope-locations-selectzone></vp-scope-locations-selectzone>
            </div>
            </transition>
            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>全国</span> -->
         </el-col>
         <el-col :span="8" class="date">
            <p><img src=" images/common/sy_riqi.png">日期选择: <input type="text" v-model="startDate" id='formDateStart'> 至 <input type="text" v-model="endDate" id='formDateEnd'>
               <button @click="fastSel">快速选择<img src=" images/common/down.png"></button>
            </p>
            <div class="select">
               <vp-widget-time-selection :show.sync='selShow'></vp-widget-time-selection>
            </div>
         </el-col>
         <el-col :span="4" :offset="2" class="weather">
            <img v-if="weather.text" src=" images/common/sy_tianqi.png"> {{weather.text}}
         </el-col>
         <el-col :span="4" class="activity">
            <img v-if="aList[0]" src="images/common/sy_huodong.png">
            <div class="activityList example">
               <ul class="container">
                  <li v-for="item in aList" :key="item">{{item}}</li>
               </ul>
            </div>
         </el-col>
      </el-row>
      <vd-bd-activity operate="load" :trigger.sync="activity.LoadTrigger" :query="activity.Query" :result.sync="activityList"></vd-bd-activity>
      <vd-bd-weather operate="load" :trigger.sync="weather.LoadTrigger" :query="weather.Query" :result.sync="weatherList"></vd-bd-weather>
   </div>
</template>
<script>

Vue.component("vp-header-filer", {
   template: template,
   props: ["showlocaiton"],
   data() {
      return {
         isPublish:false,
         showLocationSelect:false,
         ShowLocaiton: this.showlocaiton,
         startDate: moment().format("YYYY-MM-DD"),
         endDate: moment().format("YYYY-MM-DD"),
         navList: [
            { active: true, title: "首页", href: "" },
            { title: "分析报表", href: "" },
            { title: "排行榜", href: "" }
         ],
         selShow: false,
         activity: {
            LoadTrigger: true,
            Query: {
               StartDate: {
                  $gte: moment().format("YYYY-MM-DD")
               },
               EndDate: {
                  $lte: moment().format("YYYY-MM-DD")
               }
            }
         },
         activityList: [],
         weather: {
            LoadTrigger: true,
            Query: { Date: moment().format("YYYY-MM-DD") },
            text: ""
         },
         weatherList: [],
         aList: []
      };
   },
   computed: {},
   watch: {
      weatherList(newList) {
         if (newList && newList.length) {
            var weather = newList[0];
            this.weather.text = "天气：" + weather.WeatherName + " " + weather.LowTemp + "℃-" + weather.HighTemp + "℃";
         } else {
            this.weather.text = "暂无天气信息";
         }
      },
      activityList(newList) {
         if (newList && newList.length) {
            var list = [];
            for (var index = 0; index < newList.length; index++) {
               var element = newList[index];
               list.push("活动：" + element.Name);
            }
            this.aList = list;
         } else {
            this.aList = ["暂无最新活动"];
         }
      },
      startDate() {
         this.headChange();
      },
      endDate() {
         this.headChange();
      }
   },
   methods: {
      closeLocationSelect(sel){
         var type=typeof sel
         if(sel && type=="boolean")
            this.closeLocationSelect=sel
         else
            this.showLocationSelect=!this.showLocationSelect
      },
      fastSel() {
         this.selShow = true;
      },
      headChange() {
         if (this.startDate != this.endDate) {
            this.weather.text = "";

         }else{
            this.weather.Query.Date = this.startDate;
            this.weather.LoadTrigger = true;
         }
         this.activity.Query = {
            StartDate: {
               $gte: this.startDate
            },
            EndDate: {
               $lte: this.endDate
            }
         };
         this.activity.LoadTrigger = true;
         PubSub.publish("Widget.TimeChanged", {
            Query:{
               Times:{
                  StartTime:this.startDate,
                  EndTime:this.endDate
               }
            }
         });
         // } else {
         //    this.weather.text = "";
         //    this.aList = [""];
         // }
      },
      activityUpdate() {
         $(document).ready(function() {
            $(".example").smartmarquee({
               duration: 1000,
               loop: true,
               interval: 2000,
               axis: "vertical"
            });
         });
      }
   },
   created() {
      var me = this;
      PubSub.subscribe("Widget.TimeChanged", function(name, Date){
         if(!me.isPublish){
            if(me.startDate!=Date.Query.Times.StartTime)
               me.startDate = Date.Query.Times.StartTime;
            if(me.endDate!=Date.Query.Times.EndTime)
               me.endDate = Date.Query.Times.EndTime;
         }
      });
      PubSub.subscribe("Grid.LocationCancel",function(name, data){
         me.showLocationSelect=false
      })
      PubSub.subscribe("Widget.DomainChanged",function(name, data){
         me.showLocationSelect=false
      })

      setTimeout(function() {
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
               monthNames: [
                  "一月",
                  "二月",
                  "三月",
                  "四月",
                  "五月",
                  "六月",
                  "七月",
                  "八月",
                  "九月",
                  "十月",
                  "十一月",
                  "十二月"
               ],
               firstDay: 1
            },
            linkedCalendars: false,
            autoUpdateInput: false,
            showCustomRangeLabel: false,
            startDate: moment().format("MM/DD/YYYY"),
            opens: "right"
         };
         $("#formDateStart").daterangepicker(setOps, function(start, end, label) {
            me.startDate = start.format("YYYY-MM-DD");
         });
         $("#formDateEnd").daterangepicker(setOps, function(start, end, label) {
            me.endDate = start.format("YYYY-MM-DD");
         });
         me.activityUpdate;
      }, 1);
   },
   mounted() {}
});
$.fn.smartmarquee = function(vars) {
   var defaults = {
      duration: 1000, // animate duration
      loop: true,
      interval: 2000, // interval duration
      axis: "vertical",
      easing: "linear" // (next ver)
   };
   var options = $.extend(defaults, vars);
   function marquee(obj) {
      var self = this;
      var timer, indexHandle, marginHandle;
      var container = $(".container", obj);
      obj.hover(
         function() {
            self.stop();
         },
         function() {
            self.play(indexHandle, marginHandle);
         }
      );
      this.play = function(i, margin) {
         if (container.children().length <= 1) {
            return;
         }
         if (!i) i = 0;
         var _vertical = function() {
            if (i < container.children().length - 1) {
               var len = container
                  .children()
                  .eq(i)
                  .height(); // .outerHeight(true)
               len +=
                  (container
                     .children()
                     .eq(i)
                     .outerHeight(true) -
                     len) /
                  2;
               if (!margin) {
                  margin = parseInt(container.css("margin-top")) - len;
                  marginHandle = margin;
               }
               container.animate({ "margin-top": margin + "px" }, options.duration, "linear", function() {
                  timer = setTimeout(function() {
                     self.play(++i);
                  }, options.interval);
               });
               indexHandle = i;
            } else if (options.loop) {
               var len = container
                  .children()
                  .eq(i)
                  .height();
               margin = parseInt(container.css("margin-top")) - len;
               container.animate({ "margin-top": margin + "px" }, options.duration / 2, "linear", function() {
                  container.css({ "margin-top": len + "px" });
                  container.animate({ "margin-top": 0 + "px" }, options.duration / 2, "linear", function() {
                     setTimeout(function() {
                        self.play(0);
                     }, options.interval);
                  });
               });
            }
         };
         var _horizontal = function() {
            if (i < container.children().length - 1) {
               var len = container
                  .children()
                  .eq(i)
                  .outerWidth(true);
               if (!margin) {
                  margin = container.css("margin-left").split("px")[0] - len;
                  marginHandle = margin;
               }
               container.animate({ "margin-left": margin + "px" }, options.duration, "linear", function() {
                  timer = setTimeout(function() {
                     self.play(++i);
                  }, options.interval);
               });
               indexHandle = i;
            } else if (options.loop) {
               container.animate({ "margin-left": "0px" }, "linear", function() {
                  setTimeout(function() {
                     self.play(0);
                  });
               });
            }
         };
         options.axis == "vertical" ? _vertical() : _horizontal();
      };
      this.stop = function() {
         clearTimeout(timer);
         if (container.is(":animated")) container.stop();
      };
   }
   return this.each(function() {
      var slide = new marquee($(this));
      setTimeout(function() {
         slide.play();
      }, options.interval);
   });
};
</script>


<style lang="less">
@headerheight: 50px;
@searchHeight: 44px;
.form-header-filter {
   .search {
      margin: 0 23px;
      margin-top: 15px;
      background: #fff;
      height: @searchHeight;
      .location {
         line-height: @searchHeight;
         margin-left: 15px;
         color: #000;
         p {
            display: inline-block;
            span{
               padding: 5px 10px;
               background: #E8F6FF;
               color: #65A0DC;
               border-radius: 5px;
               img{
                  margin-right: 0;

               }
            }
         }
         .select{
            position: absolute;
            background: #fff;
            z-index: 2;
            width: 900px;
            padding: 5px;
            box-shadow: 0 0 12px rgba(0,0,0,.8);
            .close{
               position: fixed;
               width: 100%;
               height: 100%;
               left: 0; top: 0;
               z-index: 1;
            }
            .vp-scope-locations-selectzone{
               position: relative;
               z-index: 2;
            }
         }
         img {
            vertical-align: sub;
            margin-right: 4px;
         }
         span {
            cursor: pointer;
            img {
               vertical-align: middle;
            }
         }
      }
      .date {
         .select {
            position: relative;
            top: 0;
         }
         p {
            line-height: @searchHeight;
            color: #000;
            font-size: 14px;
            & > img {
               vertical-align: sub;
               margin-right: 7px;
            }
            input,
            button {
               background: #f5f5f5;
               border: 0;
               border-radius: 5px;
               width: 90px;
               padding-left: 10px;
               height: 26px;
               color: #000;
               vertical-align: middle;
            }
            button {
               background: #f5f5f5;
               width: auto;
               padding: 0 3px;
               margin-left: 4px;
               cursor: pointer;
            }
         }
      }
   }
   .activity {
      position: relative;
      .activityList {
         position: relative;
         overflow: hidden;
         height: 44px;
      }
      .activityList .container {
         position: absolute;
      }
   }
   .weather,
   .activity {
      img {
         vertical-align: sub;
      }
      color: #000;
      line-height: @searchHeight;
   }
   .activity {
      img {
         float: left;
         margin-top: 12px;
         margin-right: 8px;
      }
      .container {
         li {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 200px;
         }
      }
   }
}
</style>
