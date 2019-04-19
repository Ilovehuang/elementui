<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="Label">
      <vd-system-category operate="load" :query="Query" method="grid"  :result.sync="List"></vd-system-category>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-zonetype", {
   
   props: [
      "value", /// 选中项返回值
      "label" /// 选中项文字内容
   ],
   data() {
      return {
         Query: {
            ParentId: "36ad6439123541b5948033e8e63a7413"
         },
         result: "",
         // label: "",
         List: []
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
         get() {
            return this.label;
         },
         set(val) {
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
