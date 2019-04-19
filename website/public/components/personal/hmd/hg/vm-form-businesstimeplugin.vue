<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="'关联案场'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-businesstime operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-businesstime>
      <vm-transfer-mall v-model="FormData.MallIds"></vm-transfer-mall>
   </vx-container-dialog>
</template>
<style lang="less">
</style>

<script>
Vue.component("vm-form-businesstimeplugin", {
   data() {
      return {
         FormData: {
            Id: null,
            MallIds: []
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
