<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="'用户组管理-报表页面'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-usergroup operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-usergroup>
      <vm-transfer-reportpage v-model="FormData.ReportPages" :values.sync="values"></vm-transfer-reportpage>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-usergroupreportpage", {
   data() {
      return {
         FormData: {
            Id: null,
            ReportPages: null
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
