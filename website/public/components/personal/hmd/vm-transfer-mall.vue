<template>
   <div class="transfermall">
      <vx-form-transfer :options="List" labelfield="Name" keyfield="Id" v-model="Value" mode="object" :values.sync="malls">
         <vx-container-item :label="LoaderDict.Business.CompanyId">
            <vm-select-company v-model="FormData.CompanyId"></vm-select-company>
         </vx-container-item>
         <vd-company-mall operate="load" :trigger.sync="LoadTrigger" :query="Query" method="grid" :result.sync="List"></vd-company-mall>
      </vx-form-transfer>
   </div>
</template>
<style>
.transfermall .vx-container-item .form-label {
   margin-left: -130px
}
</style>
<script>
Vue.component("vm-transfer-mall", {
   props: {
      value: {
         default: function() {
            return [];
         }
      },
      values: {
         default: function() {}
      }
   },
   data() {
      return {
         FormData: {
            Id: null,
            CompanyId: null,
            CompanyName: null
         },
         LoaderDict: LoaderDict,
         LoadTrigger: null,
         Query: {},
         List: null,
         result: "",
         malls: []
      };
   },
   created(){
      var me = this;
      this.$Bus.$on("Transfer.Mall", function(data) {
         console.log("data++")
         console.log(data)
         me.Query.CompanyId = data.Id
         me.LoadTrigger = true
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
