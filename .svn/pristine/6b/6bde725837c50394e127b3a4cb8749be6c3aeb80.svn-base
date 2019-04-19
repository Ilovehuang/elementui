<template>
   <vx-item-select :options="List" labelfield="Name" :placeholder="placeholder" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-bd-company operate="load" :query="Query" method="select" :result.sync="List"></vd-bd-company>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-company", {
   template: template,
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
         result: "",
         label: "",
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
            PubSub.publish("Select.Mall",{Id:val});
         }
      }
   }
});
</script>
