<template>
   <div class="vx-form-input">
      <vx-container-combo class="center" :class="close?'':'close'" :leftvisible="false" :rightclick="clear" :value="valueInput" >
         <template v-if="type!='textarea'">
            <input v-bind="$attrs" v-if="lazy" v-model.lazy="valueInput" :disabled="disabled">
            <input v-bind="$attrs" v-else v-model="valueInput" :disabled="disabled">
         </template>
         <template v-else>
            <textarea v-bind="$attrs" :rows="rows" v-if="lazy" v-model.lazy="valueInput">2</textarea>
            <textarea v-bind="$attrs" :rows="rows" v-else v-model="valueInput" >1</textarea>
         </template>
      </vx-container-combo>
   </div>
</template>
<style lang="less">
.vx-form-input {
   
   .center{
      width: 314px;
      padding: 2px;
      height:30px
   }
   .vx-container-combo span.rightslot{
      top:3px;
      right:4px
   }
   .close span.rightslot {
      display: none
   }
   position: relative;
   input, textarea {
      cursor: pointer;
      font-size: 13px;
      max-width:310px;
      width:100%;
      border:0;
      border-radius: 5px
   }
   textarea{
      min-height: 80px;
   }
   input[type='text'] {
      height: 22px;
   }
}
</style>
<script>
Vue.component("vx-form-input", {

   props: {
      "disabled":{
         default:false
      },
      "value":{
         defalut:""
      },
      "lazy":{
         default:false
      },
      "type":{
         default:""
      },
      "rows":{
         default:"5"
      },
      "close":{
         default:true
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
      clear() {
         if(this.close)
         this.$emit("input", "");
      }
   }
});
</script>
