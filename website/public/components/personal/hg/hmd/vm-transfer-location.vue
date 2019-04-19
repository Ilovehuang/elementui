<template>
   <vx-form-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="result" mode="object" :values.sync="Values">
      <vd-bd-location operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-location>
   </vx-form-transfer>
</template>
<script>
Vue.component("vm-transfer-location", {
   
   props: ["values"],
   data() {
      return {
         Query: {},
         List: [],
         result: ""
      };
   },
   created() {
      console.log(22);
   },
   watch: {
      /// 层级太多，拿不到select选择的value
      result() {
         console.log(this.result)
         var arr = []
         this.$emit("input", this.result);
         if(this.values){
            this.values.forEach(function(item) {
               var obj ={}
               obj.Id = item.Id
               obj.Name = item.Name
               arr.push(obj)
            })
         }
         this.$emit("update:values", arr);
      }
   },
   computed: {
      Values: {
         get() {
            return this.values;
         },
         set(val) {
            this.$emit("update:values", this.values);
         }
      }
   }
});
</script>
