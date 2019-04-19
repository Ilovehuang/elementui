<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.Location.PhysicalManager+'—'+LoaderDict.Business.T_PhysicalZone.ZoneRelated" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-physicalzone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-company-physicalzone>
      <vm-transfer-physicalzone v-model="FormData.SubZones" :values.sync="values"></vm-transfer-physicalzone>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-physicalzoneplugin", {
   data(){
      return {
         FormData: {
            Id:"",
            SubZones: null
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
