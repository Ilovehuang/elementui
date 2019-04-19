<template>
   <vx-item-transfer :options="List"  labelfield="Name" keyfield="Id" v-model="Value" mode="object" :values.sync="options">
      <vd-bd-physicalzone operate="load" :query="Query" method="grid" :result.sync="List"></vd-bd-physicalzone>
   </vx-item-transfer>
</template>
<script>
Vue.component("vb-transfer-physicalzone", {
   template: template,
   props: ["value", /// 选中的id
      "values" /// 存放选中数据的数组],
   ],
   data() {
      return {
         Query: {
            ZoneTypeId:["1f41336b31a4400eabae2f099d99be17","268dece4837b484d92abc389bad3f2ec"]
         },
         List: null,
         result: "",
         options: []
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            this.$emit("update:values", this.value);
         }
      }
   }
});
</script>
