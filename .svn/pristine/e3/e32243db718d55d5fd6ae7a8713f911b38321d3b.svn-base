<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ConditionOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-conditionoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-conditionoption>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.Label" :rule="Rules.Label">
         <vx-form-input v-model="FormData.Label" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Label"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="'条件配置码'" :rule="Rules.Code">
         <vx-form-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Code"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.OptionType" :rule="Rules.OptionType">
         <vm-select-conditionoption v-model="FormData.OptionType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.OptionType"></vm-select-conditionoption>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.ComponentName" :rule="Rules.ComponentName">
         <vx-form-input v-model="FormData.ComponentName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.ComponentName"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-form-input v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-conditionoption", {
   data(){
      return {
         FormData: {
            Id: null,
            Name: null,
            Label: null,
            Code: "",
            OptionType: null,
            ComponentName: "",
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            Label: { required: true },
            Code: { required: true },
            OptionType: { required: true },
            ComponentName: { required: true }
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
