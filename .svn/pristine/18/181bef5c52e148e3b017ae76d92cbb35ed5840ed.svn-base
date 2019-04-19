<template>
   <div class="vx-form-password">
      <vx-container-combo :leftvisible="false" :rightclick="viewpass" :value="valueInput">
         <input :type="Type" v-bind="$attrs" v-model="valueInput" >
         <i slot="rightslot" class="fa" :class="RightClass"></i>
      </vx-container-combo>
   </div>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-form-password", {
   
   props: {
      "value":{
         default:""
      } //string，number
   },
   data() {
      return {
         Type: "password",
         RightClass: "fa-eye-slash"
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
   },
   methods: {
      viewpass() {
         this.Type = this.Type == "password" ? "text" : "password";
         this.RightClass = this.Type == "password" ? "fa-eye-slash" : "fa-eye";
      }
   }
});
</script>
