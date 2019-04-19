<template>
   <vx-form-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="Value" mode="object" :values.sync="malls">
      <vd-company-mall operate="load" :query="Query" method="grid" :result.sync="List"></vd-company-mall>
   </vx-form-transfer>
</template>
<script>
Vue.component("vm-transfer-mall", {
   
   props : {
      "value":{
         default:function(){return []}
      },
      "values":{
         default:function(){}
      }
   },
   data() {
      return {
         Query: {},
         List: [],
         result: "",
         malls: []
      };
   },
   // watch: {
   //    result() {
   //       console.log(this.value)
   //       this.$emit("input", this.result);
   //       this.$emit("update:values", this.malls);
   //    }
   // }
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            this.$emit("update:values", this.value);
         }
      }
   }
});
</script>
