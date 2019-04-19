<template>
   <vx-container-dialog :form="FormData" :title="LoaderDict.Pages.Business.TagManager" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-tag operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-tag>
      <vx-container-item :label="LoaderDict.Business.T_Tag.TagValue">
         <vx-form-input v-model="FormData.TagValue" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Tag.TagValue"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Tag.TagClass">
         <vx-form-input v-model="FormData.TagClass" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Tag.TagClass"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.CompanyId">
         <!-- <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.CompanyId"></vm-select-company> -->
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-tag", {
   data() {
      return {
         FormData: {
            Id: null,
            TagClass: null,
            TagValue: null,
            CompanyId: null
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
