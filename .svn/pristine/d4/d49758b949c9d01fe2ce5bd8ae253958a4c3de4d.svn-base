<template>
   <div class="vx-container-combo">
      <div class="wrap flex">
         <span class="leftslot" v-show="LeftVisible" :style="{'background':leftbackground,'width':LeftWidth}">
            <slot name="leftslot"></slot>
         </span>
         <div class="center" :style="{'padding-left': LeftWidth}">
            <slot></slot>
         </div>
         <span class="rightslot" v-show="RightVisible" @click="rightclick" :style="{'background':rightbackground,'width':rightwidth}">
            <slot name="rightslot">
               <i class="fa fa-close"></i>
            </slot>
         </span>
      </div>
   </div>
</template>
<style lang="less">
.vx-container-combo {
   position: relative;
   cursor: pointer;

   .wrap {
      width: 100%;
   }

   .flex {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -moz-box;
   }

   .flex .center {
      -webkit-box-flex: 1;
      box-flex: 1;
      -moz-box-flex: 1;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
   }

   input {
      width: 100%;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      border: 0px;
      border-radius: 4px;
      box-sizing: border-box;
      color: #1f2d3d;
      height: 24px;
      line-height: 1;
      outline: 0;
      padding: 3px 10px 3px 10px;
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
      position: absolute;
      bottom: 0px;
      top: 1px;
      padding-top: 1px;
      cursor: pointer;
      width: 39px;
      height: 30px;
      border-radius: 4px;
      vertical-align: middle;
      text-align: center;
      .fa {
         font-size: 16px;
         vertical-align: middle;
         border-radius: 4px;
         margin-top: 5px;
      }

   }

   span.leftslot {
      left: 1px;
      border-right: 1px solid #ccc;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
   }

   span.rightslot {
      right: 1px;
      height: 28px;
      top: 1px;
      padding-left: 5px;
      border: 0px;
      background-color: #fff;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      i {
         font-size: 15px;
         opacity: 0.8;
      }
   }
}
</style>
<script>
Vue.component("vx-container-combo", {
   
   props: {
      "leftvisible":{
         default:true,
         type:Boolean
      }, //下拉slot所在得位置(前后)
      "rightvisible":{
         default:true,
         type:Boolean
      }, //图标slot所在得位置
      "leftbackground":{
         default:""
      }, //左边背景颜色
      "rightbackground":{
         default:""
      }, //右边背景颜色
      "leftwidth":{
         default: "40px"
      }, //左边div宽度
      "rightwidth":{
         default: "40px"
      }, //右边div宽度
      "rightclear": {
         default: true,
         type:Boolean
      },// 右边是否显示清空按钮
      "rightclick": {
         default: function() {
            return function() {};
         }
      }, // 清空事件
      "value": {
         default: ""
      },  // 有数据时显示清空按钮
   },
   data() {
      return {
         LeftWidth: "39px"
      };
   },
   computed: {
      LeftVisible: {
         get() {
            let visible = this.leftvisible;
            if(!visible) {
               this.LeftWidth = "0px";
            }
            return visible;
         }
      },
      RightVisible: {
         get() {
            let visible = this.rightvisible;
            if(visible && this.rightclear) {
               visible = this.value ? true : false;
            }
            return visible;
         }
      }
   },
   watch: {
      leftwidth() {
         this.LeftWidth = this.leftwidth;
      }
   },
   mounted() {
      if(this.rightclear) {
         ///TODO 设置清空按钮大小
      }
   }
});
</script>
