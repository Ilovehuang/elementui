<template>
   <div class="vx-form-daterangepicker">
      <vx-container-combo :rightvisible="false" :value="selectedValue">
         <i slot="leftslot" class="fa fa-calendar"></i>
         <input v-bind="$attrs" type="text" :id="Id" v-model="selectedValue" readonly >
      </vx-container-combo>
   </div>
</template>
<style lang="less">
.vx-form-daterangepicker {
}
</style>
<script>
Vue.component("vx-form-daterangepicker", {
   
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
         default:function(){return moment().subtract(5, "years").startOf("year").format("YYYY-MM-DD")}
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
      var id = "XDP" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id, //随机Id
         Datepicker: null
      };
   },
   computed: {
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
      },
      selectedValue: {
         get() {
            if(this.starttime == this.endtime) return this.starttime;
            else if(!this.starttime) return this.endtime;
            else if(!this.endtime) return this.starttime;
            return this.starttime + this.separator + this.endtime;
         }
      }
   },
   created() {
      this.init();
   },
   methods: {
      init() {
         this.$nextTick(() => {
            $("#" + this.Id)
               .daterangepicker(
                  {
                     locale: {
                        format: this.format,
                        separator: this.separator
                     },
                     showWeekNumbers: true,
                     showDropdowns: true,
                     autoApply: true,
                     minDate: this.mindate,
                     maxDate: this.maxdate,
                     startDate: this.starttime,
                     endDate: this.endtime
                  },
                  (start, end, label) => {
                     this.$emit("update:starttime", start.format(this.format));
                     this.$emit("update:endtime", end.format(this.format));
                  }
               );
            this.Datepicker = $("#" + this.Id).data("daterangepicker");
         });
      },
      clear() {
         this.$emit("update:starttime", "");
         this.$emit("update:endtime", "");
      }
   }
});
</script>
