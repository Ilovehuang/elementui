<template>
   <vx-form-select :options="List" labelfield="ZoneTypeName" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="label">
      <vd-company-devicezone operate="load"  :trigger.sync="trigger"  :query="Query" method="grid" :result.sync="List"></vd-company-devicezone>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-physicalzone", {
   
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {
            MallId:null
         },
         List: null,
         result: "",
         // label: "",
         trigger: false,
         groupfield: "ZoneTypeName"
      };
   },
   created(){
      var me = this;
      this.$Bus.$on("Select.PhysicalZone", function ( data) {
         me.Query.MallId = data.Id;
         me.trigger = true;
      });
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
