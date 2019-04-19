<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ConditionOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-conditionoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-conditionoption>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.Label" :rule="Rules.Label">
         <vx-item-input v-model="FormData.Label" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Label"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.Code" :rule="Rules.Code">
         <vx-item-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.Code"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.OptionType" :rule="Rules.OptionType">
         <vx-item-input v-model="FormData.OptionType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.OptionType"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ConditionOption.ComponentName" :rule="Rules.ComponentName">
         <vx-item-input v-model="FormData.ComponentName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ConditionOption.ComponentName"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-conditionoption",
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
   },
   created() {
      console.log("form");
   }
});
</script>
