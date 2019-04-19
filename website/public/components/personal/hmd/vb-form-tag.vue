<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.LabelManagement" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-tag operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-tag>
      <vx-container-item :label="LoaderDict.Business.T_Tag.TagValue">
         <vx-item-input  v-model="FormData.TagValue" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Tag.TagValue"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Tag.TagClass" >
         <vx-item-input v-model="FormData.TagClass" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Tag.TagClass"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.CompanyId" >
         <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.CompanyId"></vm-select-company >
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.CompanyId" >
         <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.CompanyId"></vm-select-company >
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-tag",
   FormData: {
      Id: null,
      TagClass:null,
      TagValue:null,
      CompanyId:null
   },
   Rules: {
   }
});
</script>
