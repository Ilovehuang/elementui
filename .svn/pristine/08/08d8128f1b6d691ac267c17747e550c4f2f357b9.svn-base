<template>
<div>
   <vx-form-select :options="List" labelfield="Name" :placeholder="placeholder" valuefield="Id"  v-model="Value" :label.sync="label">
      <vd-system-category operate="load" :query="Query" method="select" :result.sync="List"></vd-system-category>
   </vx-form-select>

   </div>
</template>
<script>
Vue.component("vm-select-devicetype", {
   template: template,
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {
            ParentId: "673ff8c5efa04bfea86554b7fd818c16"
         },
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
            this.$emit("update:label", this.label)
         }
      }
   }
});
</script>
