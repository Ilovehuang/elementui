<template>
   <vx-item-select :options="List" labelfield="Name" valuefield="Id" v-model="Value" :groupfield="groupfield" :label.sync="label">
      <vd-bd-mall operate="load" :trigger="trigger" :query="Query" method="select" :result.sync="List"></vd-bd-mall>
   </vx-item-select>
</template>
<script>
Vue.component("vb-select-mall", {
   template: template,
   props: [
      "value", /// 输出的值
      "label" /// 输出的文字
   ],
   data() {
      return {
         Query: {
         },
         List: null,
         result: "",
         label: "",
         trigger: false,
         groupfield: "Tags"
      };
   },
   created(){
      var me = this;
      PubSub.subscribe("Select.Mall", function (msg, data) {
         me.Query.CompanyId = data.Id;
         me.trigger = true;
      });
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
