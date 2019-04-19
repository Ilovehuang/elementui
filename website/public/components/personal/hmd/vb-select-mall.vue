<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="label">
      <vd-bd-mall operate="load" :trigger.sync="trigger" :query="Query" method="select" :result.sync="List"></vd-bd-mall>
   </vx-item-select>
</template>
<script>
var Event = new Vue();
Vue.component("vb-select-mall", {
   template: template,
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
         List: null,
         result: "",
         label: "",
         trigger: false,
         placeholder: ""
      };
   },
   created() {
      var me = this;
      Event.$on("Select.Mall", function(data) {
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
            Event.$emit("Select.PhysicalZone", { Id: val });
         }
      }
   }
});
</script>
