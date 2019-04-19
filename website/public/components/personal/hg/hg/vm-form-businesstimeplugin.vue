<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Business.BusinessTime+'-关联案场'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-businesstime operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-businesstime>
      <vx-container-col :span="14">
         <vx-container-item :label="LoaderDict.Business.CompanyId" >
            <vm-select-company v-model="selectCompany"></vm-select-company>
         </vx-container-item>
      </vx-container-col>
      <br/>
      <vm-transfer-mall v-model="FormData.MallIds"></vm-transfer-mall>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-businesstimeplugin", {
   data() {
      
      return {
         selectCompany:"",
         FormData: {
            Id: null,
            MallIds: []
         }
      };
   },
   wacth:{
      selectCompany(val){
         console.log(val,this.Query)
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
