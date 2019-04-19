<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="Label" :resultinfo.sync="resultinfo">
      <vd-company-physicalzone operate="load"  :trigger.sync="trigger"  :query="Query" method="grid" :result.sync="List"></vd-company-physicalzone>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-physicalzone", {
   
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
         // resultinfo:null,
         List: null,
         result: "",
         // label: "",
         trigger: false,
         groupfield: "ZoneTypeName"
      };
   },
   created(){
      var me = this;
      this.$Bus.$on("Select.PhysicalZone", function (data) {
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
            this.$Bus.$emit("Grid.LinkedPhysicalZone",this.resultinfo);
         }
      },
      Label:{
         get(){
            return this.label;
         },
         set(){
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
