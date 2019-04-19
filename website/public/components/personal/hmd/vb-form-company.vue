<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-company operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-company>
      <vx-container-item :label="LoaderDict.Business.T_Company.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Company.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Host" :rule="Rules.Host">
         <vx-item-input type="textarea" rows="5" v-model="FormData.Host" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Host"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-item-input type="textarea" rows="3" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-company",
   FormData: {
      Name: null,
      Host: null,
      Enabled: 1 //设置启用状态，默认启用

   },
   Rules: {
      Name: { required: true },
      Host: { required: true }
   }
});
</script>
