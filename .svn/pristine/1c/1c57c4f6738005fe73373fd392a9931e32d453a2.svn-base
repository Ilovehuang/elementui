<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="Label">
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-conditionoption", {
   
   props: [
      "value", /// 选中返回的值
      "label" /// 选中返回的文字
   ],
   data() {
      return {
         Query: {},
         List: [
            {
               Id: "Filter",
               Name: "过滤条件"
            },
            {
               Id: "Compare",
               Name: "对比条件"
            },
            {
               Id: "GroupBy",
               Name: "分组方式"
            },
            {
               Id: "KPIField",
               Name: "指标选择"
            }
         ]
      };
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
      },
      Label:{
         get(){
            return this.label;
         },
         set(val){
            this.$emit("update:label",this.label)
         }
      }
   }
});
</script>
