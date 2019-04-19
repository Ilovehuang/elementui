<template>
   <div class="vx-form-datesinglepicker">
      <vx-container-combo :rightvisible="false" :value="selectedValue">
         <i slot="leftslot" class="fa fa-calendar"></i>
         <input type="text" :id="Id" v-model="selectedValue" readonly>
      </vx-container-combo>
   </div>
</template>
<style lang="less">
.vx-form-datesinglepicker {
}
</style>
<script>
Vue.component("vx-form-datesinglepicker", {

   props: {
      "value":{
         default:function() { return moment().format("YYYY-MM-DD") }
      }, //当前值
      "format":{
         default:"YYYY-MM-DD"
      }, //日期格式
      "theme":{
         default:"blue"
      }, //风格样式选择
      "language":{
         default:"zh-cn"
      }, //语言选择
      "mindate":{
         default:function(){return ''}
      }, //最小值
      "maxdate":{
         default:function(){return ''}
      }, //最大值
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
            if(this.Datepicker && this.value && moment.isMoment(moment(this.value, this.format))) {
               this.Datepicker.setStartDate(this.value);
               this.Datepicker.setEndDate(this.value);
            }
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
         }
      }
   },
   created() {
      this.init();
   },
   methods: {
      init() {
         this.selectedValue = moment().format(this.format);
         this.$nextTick(() => {
            $("#" + this.Id)
               .daterangepicker(
                  {
                     locale: {
                        format: this.format
                     },
                     showWeekNumbers: true,
                     singleDatePicker: true,
                     showDropdowns: true,
                     minDate: this.mindate,
                     maxDate: this.maxdate,
                     startDate: this.value
                  },
                  (start, end, label) => {
                     this.selectedValue = start.format(this.format);
                  }
               );
            this.Datepicker = $("#" + this.Id).data("daterangepicker");
         });
      },
      clear() {
         this.selectedValue = "";
      }
   }
});
</script>
