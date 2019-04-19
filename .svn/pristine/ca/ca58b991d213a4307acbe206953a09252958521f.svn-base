<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-fencezone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-fencezone>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item label="关联区域Id">
         <vx-item-input v-model="FormData.ZoneId"></vx-item-input>
      </vx-container-item>
      <vx-container-item label="区域类型">
         <vx-item-input v-model="FormData.FenceTypeId"></vx-item-input>
      </vx-container-item>
      <vx-container-item label="电子围栏类型">
         <vx-item-input v-model="FormData.FenceTypeName"></vx-item-input>
      </vx-container-item>
      <vx-container-item label="地图定义">
         <vx-item-input v-model="FormData.MapData"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-fencezone",
   FormData: {
      Id: null,
      Name: null,
      ZoneId: "",
      FenceTypeId: "",
      FenceTypeName: "",
      MapData: null,
      Enabled: 1
   },
   Rules: {
      Name: { required: true }
   }
});
</script>
