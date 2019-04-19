<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="'用户组管理-可选区域'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-usergroup operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-usergroup>
      <vm-transfer-physicalzone v-model="FormData.ZoneIds" :values.sync="values"></vm-transfer-physicalzone>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-usergroupzone", {
   data() {
      return {
         FormData: {
            Id: null,
            ZoneIds: null
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
