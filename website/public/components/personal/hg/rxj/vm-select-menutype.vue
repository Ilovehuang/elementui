<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :label.sync="label">
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-menutype", {
   
   props: [
      "value", /// 选中返回的值
      "label" /// 选中返回的文字
   ],
   data() {
      return {
         Query: {},
         List: [
            {
               Id: "Scene",
               Name: "场景分析"
            },
            {
               Id: "Report",
               Name: "分析报表"
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
            console.log("val");
            console.log(val);
            this.$emit("input", val);
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
