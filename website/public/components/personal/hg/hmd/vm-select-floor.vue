<template>
   <vx-form-select :options="List" labelfield="Name" valuefield="Id" v-model="Value"  >
      <vd-company-physicalzone operate="load"  :trigger.sync="trigger"  :query="Query" method="gridmap" :result.sync="List"></vd-company-physicalzone>
   </vx-form-select>
</template>
<script>
Vue.component("vm-select-floor", {
   
   props: [
      "value", /// 输出的值
      "mapurl"
   ],
   data() {
      return {
         Query: {
            ZoneTypeId:"21a9fe6fe9be432589dea9167e748364",
            showImg:true
         },
         resultinfo:null,
         List: null,
         result: "",
         // label: "",
         trigger: false
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
            var mapurl=null;
            this.List.forEach(element => {
               if(element["Id"]==val){
                  mapurl=element
               }
            });
            this.$emit("update:mapurl", mapurl.MapUrl);
         }
      }
   }
});
</script>
