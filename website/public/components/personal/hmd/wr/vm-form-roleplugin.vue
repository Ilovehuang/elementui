<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.S_Role.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-role operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="Result"></vd-system-role>
      <vx-container-item :label="LoaderDict.Business.S_Role.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" disabled="true" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Role.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-roleplugin", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: ""
         },
         Rules: {
            Name: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
