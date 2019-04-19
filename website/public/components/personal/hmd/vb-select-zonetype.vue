<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-bd-category operate="load" :query="Query" method="grid"  :result.sync="List"></vd-bd-category>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-zonetype", {
   template: template,
   props: [
      "value", /// 选中项返回值
      "label" /// 选中项文字内容
   ],
   data() {
      return {
         Query: {
            ParentId: "36ad6439123541b5948033e8e63a7413"
         },
         List: null,
         result: "",
         label: "",
         List: null
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            console.log("this.label")
            console.log(this.label)
            this.$emit("input", val);
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
