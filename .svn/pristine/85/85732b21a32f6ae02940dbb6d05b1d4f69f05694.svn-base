<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_PhysicalZone.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-physicalzone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-physicalzone>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
        <vb-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId"  :label.sync="FormData.CompanyName" ></vb-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.MallId">
        <vb-select-mall v-model="FormData.MallId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Name"  :label.sync="FormData.MallName" ></vb-select-mall>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_PhysicalZone.ZoneName" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneName"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_PhysicalZone.ZoneType"  :rule="Rules.ZoneTypeId">
         <vb-select-zonetype v-model="FormData.ZoneTypeId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneTypeName" :label.sync="FormData.ZoneTypeName"></vb-select-zonetype>
      </vx-container-item>
      <vx-container-item label="楼层">
         <vb-select-floor v-model="FormData.FloorId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneTypeName"></vb-select-floor>
      </vx-container-item>
      <vx-container-item label="X轴坐标">
         <vx-item-input v-model="FormData.LocationX" :placeholder="LoaderDict.Placeholder.PleaseInput"></vx-item-input>
      </vx-container-item>
      <vx-container-item label="Y轴坐标">
         <vx-item-input v-model="FormData.LocationY" :placeholder="LoaderDict.Placeholder.PleaseInput"></vx-item-input>
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
      MallName:null,
      ZoneTypeId:null,
      ZoneTypeName:null,
      ZoneType:null,
      Enabled: 1,
      MallId:null,
      CompanyId:null,
      CompanyName:null,
      FloorId:null,
      LocationX:null,
      LocationY:null
   },
   Rules: {
      CompanyId:{required:true},
      MallId: { required: true },
      Name:{required: true },
      ZoneTypeId:{required: true }
   }
});
</script>
