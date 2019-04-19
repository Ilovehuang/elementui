<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_PhysicalZone.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-physicalzone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-physicalzone>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.Name">
        <vx-item-input v-model="FormData.Name" :placeholder="请输入" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_PhysicalZone.ZoneTypeName">
         <vb-select-physicalzone v-model="FormData.MallId" :placeholder="请输入" :label.sync="FormData.ZoneTypeName"></vb-select-physicalzone>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-physicalzone",
   FormData: {
      Id: null,
      Name: null,
      ZoneTypeName:null,
      Enabled: 1,
      MallId:null
   },
   Rules: {
      Name: { required: true }
   }
});
</script>
