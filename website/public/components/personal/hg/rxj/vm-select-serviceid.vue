<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-rpt-serviceid operate="load" :query="Query" method="select" :result.sync="List"> </vd-rpt-serviceid>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-serviceid", {
   
   props: [
      "value", /// 选中返回的值
      "label" /// 选中返回的文字
   ],
   data() {
      return {
         Query: {},
         List: [],
         result: ""
      };
   },
   created() {
      
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            this.$emit("update:label", this.label);
            
         }
      }
   },
   wacth:{
   }
});
</script>
