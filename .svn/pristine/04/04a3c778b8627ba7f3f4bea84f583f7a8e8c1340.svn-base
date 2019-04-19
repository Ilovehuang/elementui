<template>
   <div class="vx-form-textarea">
      <el-input type="textarea" v-bind="$attrs" v-model="valueInput" ></el-input>
   </div>
</template>
<style lang="less">
.vx-form-textarea {
   position: relative;
   textarea {
      height: 120px;
      padding-left: 10px;
      padding-right: 10px;
      cursor: pointer;
      font-size: 13px;
   }
}
</style>
<script>
Vue.component("vx-form-textarea", {
   
   props: {
      "value":{
         defalut:""
      }
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
   },
   methods: {
   }
});
</script>
