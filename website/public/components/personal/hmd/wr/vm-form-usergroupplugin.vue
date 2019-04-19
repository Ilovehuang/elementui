<template>
<div class="usergroupmall">
   <vx-container-dialog :form="FormData"  :title="'用户组管理-可选案场'" width="1000" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-usergroup operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-usergroup>
      <vm-transfer-mall v-model="FormData.MallIds" :values.sync="values"></vm-transfer-mall>
   </vx-container-dialog>
</div>

</template>
<script>
Vue.component("vm-form-usergroupplugin", {
   data() {
      return {
         FormData: {
            Id: null,
            MallIds: null
         }
      };
   },
   watch:{
      values(){
         console.log(this.values)
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
