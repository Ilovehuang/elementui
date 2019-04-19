<template>
   <div class="vx-form-datesinglepicker">
      <input type="text" class="singleDateinp" :id="Id" v-model="Value" :defaultvalue="defaultvalue" :class="{'invalid-input': validInput}">
      <span>
         <i class="fa fa-calendar"></i>
      </span>
   </div>
</template>
<style lang="less">
.vx-form-datesinglepicker {
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
Vue.component("vx-form-datesinglepicker", {
   template: template,
   props: {
      "value":{
         default:""
      }, //当前值
      "theme":{
         default:"blue"
      }, //风格样式选择
      "language":{
         default:"zh-cn"
      }, //语言选择
      "defaultvalue":{
         default:function(){return moment().format("YYYY-MM-DD")}
      } //默认值
   },
   data() {
      var Format = "YYYY-MM-DD";
      var id = "xdp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id, //随机Id
         Format: Format
      };
   },
   computed: {
      Value: {
         get: function() {
            return this.value ? moment(this.value).format(this.Format) : "";
         },
         set: function(val) {
            this.$emit("input", val); /// 更新父组件
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
      // this.rule = {
      // 	required: true,
      // 	valid: false,
      // };
      this.Value = this.value ? moment(this.value).format(this.Format) : this.defaultvalue ? this.defaultvalue : "";
      console.log(this.Value);
      var me = this;
      me.$nextTick(function() {
         // laydate.render({
         // 	elem: '#' + this.id, //指定元素,
         // 	max: 0,
         // 	done: function(value, date, endDate) {
         // 		me.$emit('input', value);
         // 	},
         // });
         me.datepicker = $("#" + me.Id)
            .daterangepicker(
               {
                  singleDatePicker: true,
                  showDropdowns: true
               },
               function(start, end, label) {
                  me.Value = start.format(me.Format);
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
