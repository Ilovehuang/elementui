<template>
   <div class="vx-form-daterangepicker">
      <input type="text" class="form-control singleDateinp" :id="Id" :class="{'invalid-input': validInput}">
      <!-- <input type="text" :id="Id" class="form-control singleDateinp" readonly v-model="selectedValue" :class="{'invalid-input': validInput}" /> -->
      <span>
         <i class="fa fa-calendar"></i>
      </span>
   </div>
</template>
<style lang="less">
.vx-form-daterangepicker {
   font-family: 'pingfangmedium', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
   position: relative;
   cursor: pointer;
   // margin-left: 15px;
   padding-left: 39px;
   .singleDateinp {
      // margin-left: 39px;
      cursor: pointer;
      // background: #eeeeee;
      height: 30px;
      display: inline-block;
      // margin-right: 5px;
      // width: 210px;
      width: 100%;
      padding: 3px 10px;
      font-weight: 500;
      color: #555555;
      vertical-align: middle;
      margin-right: 0;
      border-radius: 5px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border: 1px solid #dbdbdb;
   }
   span {
      border-color: #ccc;
      background-color: #f8f8f8;
      color: #999;
      border: 1px solid #ccc;
      position: absolute;
      bottom: 0px;
      left: 0px;
      top: auto;
      cursor: pointer;
      width: 39px;
      height: 30px;
      border-radius: 4px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-right: 0;
      vertical-align: middle;
      text-align: center;
      .fa {
         font-size: 18px;
         vertical-align: middle;
         border-radius: 4px;
         margin-top: 5px;
      }
   }
}
</style>
<script>
Vue.component("vx-form-daterangepicker", {
   template: template,
   props: {
      "starttime":{
         default:function(){return moment().format("YYYY-MM-DD")}
      }, //开始时间
      "endtime":{
         default:function(){return moment().format("YYYY-MM-DD")}
      }, //结束时间
      "format":{
         default:"YYYY-MM-DD"
      }, //日期格式
      "theme":{
         default:"blue"
      }, //风格选择
      "language":{
         default:"zh-cn"
      }, //语言选择
      "mindate":{
         default:""
      }, //最小值
      "maxdate":{
         default:function(){return moment().format("YYYY-MM-DD")}
      }, //最大值
      "separator":{
         default:" 至 "
      }, //日期连接符
      "rule":{
         default:function(){return {}}
      }
   },
   data() {
      var id = "xdp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      var StartTime = this.starttime ? this.starttime : moment().format(this.format);
      var EndTime = this.endtime ? this.endtime : moment().format(this.format);
      console.log(this.EndTime);
      return {
         Id: id, //随机Id
         StartTime: StartTime, //接收开始时间
         EndTime: EndTime //接收结束时间
      };
   },
   watch: {
      mindate() {
         console.log(this.mindate);
      },
      maxdate() {
         console.log(this.maxdate);
      }
   },
   computed: {
      selectedValue: {
         get: function() {
            // if (this.format) {
            return moment(this.value).format(this.format);
            // }
            // return this.value;
         },
         set: function(val) {
            var result = {};
            for (var i = 0; i < this.options.length; i++) {
               if (this.options[i].value == val) {
                  result = this.options[i];
                  break;
               }
            }
            this.$emit("input", result.value);
            this.$emit("update:label", result.label);
         }
      },
      validInput: {
         get() {
            $("#" + this.Id + " input").removeClass("invalid-input");
            if (this.rule) {
               if (this.rule.valid === false) {
                  $("#" + this.Id).addClass("invalid-input");
               }
               return this.rule.valid === false;
            } else return false;
         }
      }
   },
   methods: {},
   created() {
      var me = this;
      me.$nextTick(function() {
         me.datepicker = $("#" + me.Id)
            .daterangepicker(
               {
                  locale: {
                     format: me.format,
                     separator: me.separator
                  },
                  showDropdowns: true,
                  autoApply: true,
                  minDate: this.mindate,
                  maxDate: this.maxdate,
                  startDate: this.StartTime,
                  endDate: this.EndTime
               },
               function(start, end, label) {
                  me.StartTime = start.format(me.format);
                  me.EndTime = end.format(me.format);
                  me.$emit("update:starttime", me.StartTime);
                  me.$emit("update:endtime", me.EndTime);
               }
            )
            // 日期选择框隐藏时候触发的函数 传递日期
            .on("hide.daterangepicker", function(e, picker) {
               // me.$emit('input', obj);
               // console.log("picker");
               // console.log(picker);
            });
      });
   }
});
</script>
