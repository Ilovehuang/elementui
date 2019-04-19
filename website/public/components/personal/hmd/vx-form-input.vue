<template>
   <div class="vx-form-input">
      <el-input v-bind="$attrs" v-model="valueInput"></el-input>
   </div>
</template>
<style lang="less">
.vx-form-input {
   display: inline-block;
   input,textarea {
      font-size: 13px;
   }
   input[type='text'] {
      height: 30px;
   }
}
</style>
<script>
Vue.component("vx-form-input", {
   template: template,
   props: {
      // "type", //text，textarea
      // "rows", // textarea的行数
      "value":{
         defalut:""
      }, //string，number
      // "placeholder", //提示文字
      // "clearable",// false，true
      // "disabled", //false，true,
      // "readonly"//是否可编辑
   },
   data() {
      console.log(this.readonly)
      return {};
   },
   computed: {
      valueInput: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
         }
      }
   }
});
</script>
