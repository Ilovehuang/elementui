<template>
   <div class="vx-form-number">
      <el-input-number v-model="inputValue"   ></el-input-number>
   </div>
</template>
<style lang="less">
.vx-form-number {
   span[role='button'] {
      height: 28px;
      line-height: 38px;
      i {
         width: 100%;
         line-height: 30px;
      }
   }
   .el-input__inner {
      height: 30px;
      line-height: 30px;
   }
   .el-input-number--medium {
      span[role='button'] {
         height: 34px;
         line-height: 34px;
         i {
            line-height: 34px;
         }
      }
   }
   .el-input-number--small {
      span[role='button'] {
         height: 30px;
         line-height: 30px;
         i {
            line-height: 30px;
         }
      }
   }
   .el-input-number--mini {
      span[role='button'] {
         height: 26px;
         line-height: 26px;
         i {
            line-height: 26px;
         }
      }
   }
}
</style>
<script>
Vue.component("vx-form-number", {
   
   props: {
      "value":{
         default:""
      }, //number
      // "min", //最小值
      // "max", //最大值
      // "disabled", //false，true
      // "size" //large，medium，small，min
   },
   data() {
      var id = "inp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         id: id
      };
   },
   computed: {
      inputValue: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
         }
      }
   },
   methods: {}
});
</script>
