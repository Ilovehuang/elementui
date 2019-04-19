<template>
   <div class="transferphyscical">
      <vx-form-transfer :options="List" labelfield="Name" keyfield="Id" v-model="Value" mode="object" :values.sync="options">
         <div class="selectcompany">
            <vx-container-item :label="LoaderDict.Business.CompanyId">
               <vm-select-company v-model="FormData.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
            </vx-container-item>
         </div>
         <div class="selectmall">
            <vx-container-item :label="LoaderDict.Business.T_Mall.Name">
               <vm-select-mall v-model="FormData.MallId" :label.sync="FormData.MallName"></vm-select-mall>
            </vx-container-item>
         </div>
         <vd-company-physicalzone operate="load" :query="Query" :trigger.sync="LoadTrigger" method="grid" :result.sync="List"></vd-company-physicalzone>
      </vx-form-transfer>
   </div>
</template>
<style>
 .transferphyscical .vx-container-item .form-label {
   margin-left: -20px;
}

.selectcompany{ float:left;width:49%}
.selectmall{ float:left;width:49%}
</style>
<script>
Vue.component("vm-transfer-physicalzone", {
   template: template,
   props: [
      "value", /// 选中的id
      "values" /// 存放选中数据的数组],
   ],
   data() {
      return {
         FormData: {
            Id: null,
            CompanyId: null,
            CompanyName: null,
            MallId: null,
            MallName: null
         },
         LoaderDict: LoaderDict,
         Query: {
            ZoneTypeId: ["1f41336b31a4400eabae2f099d99be17", "268dece4837b484d92abc389bad3f2ec"]
         },
         List: null,
         result: "",
         LoadTrigger: null,
         options: []
      };
   },
   created() {
      var me = this;
      this.$Bus.$on("Transfer.PhysicalZone", function(data) {
         if (data.MallId !== null) {
            me.Query.MallId = data.MallId;
            me.LoadTrigger = true;
         }
      });
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
