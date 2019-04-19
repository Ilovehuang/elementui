<template>
<div>
   <vx-form-select :options="List" labelfield="DeviceCode" valuefield="DeviceCode" v-model="Value"   >
      <vd-company-device operate="load"  :trigger.sync="trigger" :query="Query" :result.sync="List"></vd-company-device>
   </vx-form-select>
</div>
</template>
<script>
Vue.component("vm-select-devicecode", {
   
   props: [
      "value", /// 输出的值
      "mallid",
      "label"
   ],
   data() {
      return {
         Query: {
            MallId:""
         },
         List: null,
         result: "",
         trigger: false,
         placeholder: ""
      };
   },
   created(){
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            var value=val;
            for (let index = 0; index < this.List.length; index++) {
               const element = this.List[index];
               if(element.Id==val) value=element.DeviceCode
            }
            this.$emit("input", value);
         }
      }
   },
   watch:{
      mallid(){
         this.Query.MallId=this.mallid
         this.trigger=true
      },
      trigger(trigger){
         if(!trigger){
            if(!this.List.length){
               this.Value=""
            }
         }
      }
   }
});
</script>
