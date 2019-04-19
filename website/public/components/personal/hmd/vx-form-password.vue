<template>
   <vx-form-input v-model="valueInput" class="vx-form-radio" v-bind="$attrs"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Common.Password" :suffix-icon="icon" >
   </vx-form-input>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-form-password", {
   template: template,
   props: {
      // "type", //text，password
      "value":{
         default:""
      }, //string，number
      // "disabled", //false，true
      "icon":{
         default:""
      } //默认是fa fa-eye-slash ，
   },
   data() {
      return {
         LoaderDict: LoaderDict
      };
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
