<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-company operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-company-company>
      <vm-transfer-mall v-model="FormData.MallIds" :values.sync="FormData.Malls"></vm-transfer-mall>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-transfer-mall", {
   data(){
      return {
         FormData: {
            Id: null,
            Name: "",
            Malls: [],
            MallIds: []
         },
         Rules: {
            Name: { required: true }
         }
      }
   },
   created(){
   },
   methods: {
   },
   mixins:["defaultBusinessForm"]
});
</script>
