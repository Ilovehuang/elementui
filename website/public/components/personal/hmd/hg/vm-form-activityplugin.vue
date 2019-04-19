<template>
   <vx-container-dialog :form="FormData"  :title="LoaderDict.Business.S_UserGroup.Title" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-activity operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-activity>
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
