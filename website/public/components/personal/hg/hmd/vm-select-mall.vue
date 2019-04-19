<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value"  :label.sync="Label">
      <vd-company-mall operate="load" :trigger.sync="trigger" :query="Query" method="select" :result.sync="List"></vd-company-mall>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-mall", {
   
   props: [
      "value", /// 输出的值
      "label", /// 输出的文字
      "type"
   ],
   data() {
      var query = {
         CompanyId: ""
      };
      if (this.type === "company") {
         query = {};
      }
      return {
         Query: query,
         List: [],
         result: "",
         // label: "",
         trigger: false,
         placeholder: "",
      };
   },
   created() {
      var me = this;
      this.$Bus.$on("Select.Mall", function(data) {
         me.Query.CompanyId = data.Id;
         me.trigger = true;
         me.Value = null;
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
            this.$Bus.$emit("Select.PhysicalZone", { Id: val });
         }
      },
      Label:{
         get() {
            return this.label;
         },
         set(val) {
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
