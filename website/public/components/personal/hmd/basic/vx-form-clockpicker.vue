<template>
   <div class="vx-form-clockpicker">
      <vx-container-combo :leftvisible="leftvisible" :leftbackground="leftbackground" :leftwidth="leftwidth">
         <div class="clock">
            <input type="text" :id="Id" v-model="selected" readonly ref="dateInput" :placeholder="placeholder">
         </div>
         <span slot="leftslot">
            <i class="fa fa-clock-o"></i>
         </span>
      </vx-container-combo>
   </div>
</template>
<style lang="less">
.vx-form-clockpicker {
   font-family: 'pingfangmedium', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
   position: relative;
   cursor: pointer;
   display: inline-block;
   // margin-left: 15px;
   padding-left: 10px;
   input {
      width: 100%;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      border-radius: 4px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      height: 30px;
      line-height: 1;
      outline: 0;
      padding: 3px 10px 3px 30px;
      font-size: 13px;
      &::-webkit-input-placeholder {
         color: #98a9c1;
      }
      &:hover {
         border-color: #8391a5;
      }
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
   template: template,
   props: {
      "leftwidth":{
         default:""
      },
      "leftbackground":{
         default:""
      },
      "value":{
         default:""
      }, //当前值
      "placeholder":{
         default:""
      } //占位符
      // "setDefault" //默认值
   },
   data() {
      var id = "xdp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1))); //生成随机Id
      var Value = "";
      return {
         Id: id, //随机Id
         Value: Value, //接收被选中的时间
         leftvisible: true, //左边显示
         rightvisible: true //右边显示
      };
   },
   computed: {
      selected: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val); // 更新父组件
         }
      }
   },
   watch: {
      Value() {
         // console.log(this.Value);
         // console.log(this.value);
      }
   },
   created() {},
   mounted() {
      let me = this;
      $(".clock")
         .clockpicker({
            autoclose: true
         })
         .find("input#" + this.Id)
         .change(function() {
            me.Value = this.value;
            me.$emit("input", this.value);
         });
   }
});
</script>
