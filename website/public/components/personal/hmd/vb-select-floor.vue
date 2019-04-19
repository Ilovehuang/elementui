<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value"  :label.sync="label">
      <vd-bd-physicalzone operate="load"  :trigger.sync="trigger"  :query="Query" method="grid" :result.sync="List"></vd-bd-physicalzone>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-floor", {
   template: template,
   props: [
      "value", /// 输出的值
      "label", /// 输出的文字,
   ],
   data() {
      return {
         Query: {
            ZoneTypeId:"21a9fe6fe9be432589dea9167e748364"
         },
         resultinfo:null,
         List: null,
         result: "",
         label: "",
         trigger: false
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
      }
   }
});
</script>
