<template>
   <div class="vx-form-clockpicker">
      <vx-container-combo :rightvisible="false" :value="selected">
         <i class="fa fa-clock-o" slot="leftslot"></i>
         <input type="text" :id="Id" v-model="selected" readonly ref="dateInput" :placeholder="placeholder">
      </vx-container-combo>
   </div>
</template>
<style lang="less">
.vx-form-clockpicker {
}

.popover {
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1060;
   display: none;
   max-width: 276px;
   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   font-size: 14px;
   font-style: normal;
   font-weight: normal;
   line-height: 1.42857143;
   text-align: left;
   text-align: start;
   text-decoration: none;
   text-shadow: none;
   text-transform: none;
   letter-spacing: normal;
   word-break: normal;
   word-spacing: normal;
   word-wrap: normal;
   white-space: normal;
   background-color: #fff;
   -webkit-background-clip: padding-box;
   background-clip: padding-box;
   border: 1px solid #ccc;
   border: 1px solid rgba(0, 0, 0, 0.2);
   -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
   line-break: auto;
}

.popover.bottom {
   margin-top: 5px;
}

.popover.bottom > .arrow:after {
   top: 1px;
   margin-left: -10px;
   content: ' ';
   border-top-width: 0;
   border-bottom-color: #fff;
}

.popover.bottom > .arrow {
   display: none;
   top: -11px;
   left: 50%;
   margin-left: -11px;
   border-top-width: 0;
   border-bottom-color: #999;
   border-bottom-color: rgba(0, 0, 0, 0.25);
}

.popover > .arrow {
   border-width: 11px;
}

.popover > .arrow,
.popover > .arrow:after {
   position: absolute;
   display: block;
   width: 0;
   height: 0;
   border-color: transparent;
   border-style: solid;
}

.popover > .arrow:after {
   content: '';
   border-width: 10px;
}

.popover-title {
   padding: 8px 14px;
   margin: 0;
   font-size: 14px;
   background-color: #d0d0d0;
}

.clockpicker-popover .popover-title {
   background-color: #d0d0d0;
   color: #ffffff;
}

.text-primary {
   color: #337ab7;
}

.popover-content {
   padding: 9px 14px;
}
</style>
<script>
Vue.component("vx-form-clockpicker", {
   
   props: {
      "value":{
         default:""
      }, //当前值
      "placeholder":{
         default:""
      }, //占位符
      "rule":{
         default:function(){return {}}
      }
   },
   data() {
      var id = "XCP" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1))); //生成随机Id
      return {
         Id: id //随机Id
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
      selected: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val); // 更新父组件
         }
      }
   },
   created() {},
   mounted() {
      $("#" + this.Id).parent()
         .clockpicker({
            autoclose: true,
            afterDone: () => {
               this.selected = $("input#" + this.Id).val();
            }
         })
   },
   methods: {
      clear() {
         this.selected = "";
      }
   }
});
</script>
