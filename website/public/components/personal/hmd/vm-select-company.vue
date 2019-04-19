<template>
<div>
   <vx-form-select :options="List" labelfield="Name" :placeholder="placeholder" valuefield="Id"  v-model="Value" :label.sync="label">
      <vd-company-company operate="load" :query="Query" method="select" :result.sync="List"></vd-company-company>
   </vx-form-select>

   </div>
</template>
<script>
Vue.component("vm-select-company", {
   template: template,
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {},
         List: [],
         result: "",
         // label: "",
         placeholder: ""
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
            this.$Bus.$emit("Select.Mall",{Id:val});
            this.$Bus.$emit("Transfer.Mall",{Id:val});
         }
      }
   }
});
</script>
