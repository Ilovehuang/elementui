<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="label" :resultinfo.sync="resultinfo">
      <vd-bd-physicalzone operate="load"  :trigger.sync="trigger"  :query="Query" method="grid" :result.sync="List"></vd-bd-physicalzone>
   </vx-item-select>
</template>
<script>
 var Event = new Vue();
Vue.component("vb-select-physicalzone", {
   template: template,
   props: [
      "value", /// 输出的值
      "label", /// 输出的文字,
      "resultinfo"
   ],
   data() {
      return {
         Query: {
            MallId:null
         },
         resultinfo:null,
         List: null,
         result: "",
         label: "",
         trigger: false,
         groupfield: "ZoneTypeName"
      };
   },
   created(){
      var me = this;
      Event.$on("Select.PhysicalZone", function (data) {
         me.Query.MallId = data.Id;
         me.trigger = true;
         me.Value = null
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
            console.log("resultinfo")
            console.log(this.resultinfo)
            Event.$emit("Grid.LinkedPhysicalZone",this.resultinfo);
         }
      }
   }
});
</script>
