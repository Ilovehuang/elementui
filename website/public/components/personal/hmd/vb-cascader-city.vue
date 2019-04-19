<template>
   <vx-item-cascader :options="List" labelfield="Name" :placeholder="placeholder" valuefield="Id" v-model="Value" :label.sync="label">
      <vd-bd-location operate="load" :query="Query" method="tree" :result.sync="List"></vd-bd-location>
   </vx-item-cascader>
</template>
<script>
Vue.component("vb-cascader-city", {
   template: template,
   props: [
      "value", /// 输出的值
      "provinceid",  //省级Id
      "cityid", // 城市级Id
      "districtid", // 区县Id
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {},
         List: null,
         result: "",
         label:"",
         placeholder: ""
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            //输出省,市,区域
            if(val.length >= 1) {
               this.$emit("update:provinceid", val[0]);
               this.$emit("update:cityid", null);
               this.$emit("update:districtid", null);
            }
            if(val.length >= 2) {
               this.$emit("update:cityid", val[1]);
            }
            if(val.length >= 3) this.$emit("update:districtid", val[2]);
            this.$emit("input", val);
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
