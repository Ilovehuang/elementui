<template>
   <vx-item-select :options="List" labelfield="ZoneTypeName" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="label">
      <vd-bd-devicezone operate="load"  :trigger.sync="trigger"  :query="Query" method="grid" :result.sync="List"></vd-bd-devicezone>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-physicalzone", {
   template: template,
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
         label: "",
         trigger: false,
         groupfield: "ZoneTypeName"
      };
   },
   created(){
      var me = this;
      PubSub.subscribe("Select.PhysicalZone", function (msg, data) {
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
