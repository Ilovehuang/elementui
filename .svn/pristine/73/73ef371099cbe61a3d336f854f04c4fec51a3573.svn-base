<template>
   <vx-form-cascader :options="List" labelfield="Name" :placeholder="placeholder" valuefield="Id" v-model="Value" :label.sync="Label">
      <vd-bd-location operate="load" :query="Query" method="tree" :result.sync="List"></vd-bd-location>
   </vx-form-cascader>
</template>
<script>
Vue.component("vm-cascader-city", {
   
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
         List: [],
         result: "",
         // label:"",
         placeholder: ""
      };
   },
   computed: {
      Label:{
         get(){
            return this.label;
         },
         set(val){
            this.$emit("update:label", this.label);
         }
      },
      Value: {
         get() {
            return this.value;
         },
         set(val) {
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
