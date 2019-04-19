<template>
   <vx-container-dialog :form="FormData"  :title="'关联案场'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-activity operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-activity>
      <vd-company-mall operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-mall>
      <vm-transfer-mall v-model="FormData.MallIds" :values.sync="values"></vm-transfer-mall>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-activityplugin", {
   data() {
      return {
         FormData: {
            Id: null,
            MallIds: null
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
