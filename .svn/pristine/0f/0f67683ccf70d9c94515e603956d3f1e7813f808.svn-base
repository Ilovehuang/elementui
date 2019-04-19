<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-system-usergroup operate="load" :query="Query" method="select" :result.sync="List"> </vd-system-usergroup>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-usergroup", {
   
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
         result: ""
      };
   },
   watch: {
      /// 层级太多，拿不到select选择的value
      result() {
         this.$emit("input", this.result);
      }
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            this.$emit("update:label", this.label);
            this.$Bus.$on("Select.Mall", { Id: val });
         }
      }
   }
});
</script>
