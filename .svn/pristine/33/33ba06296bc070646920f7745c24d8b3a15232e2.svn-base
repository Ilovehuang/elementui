<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Mall.Title" width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-mall operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-mall>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vb-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vb-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Province" :rule="Rules.CityId">
         <vb-cascader-city v-model="FormData.LocationIds" :label.sync="FormData.MallLocation" :provinceid.sync="FormData.ProvinceId" :cityid.sync="FormData.CityId"  :districtid.sync="FormData.DistrictId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Province" ></vb-cascader-city>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.TimeZone" :rule="Rules.TimeZone">
         <vx-item-select v-model="FormData.TimeZone" options="" type="ShiQu" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.TimeZone"></vx-item-select>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Area">
         <vx-item-number v-model="FormData.Area" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Area"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Clerks">
         <vx-item-number v-model="FormData.Clerks" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Clerks"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Address">
         <vx-item-input v-model="FormData.Address" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Address"></vx-item-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.T_Mall.MallLocation">
         <vx-item-location  :width="200" :clickhide="true" :height="400" longitude.sync="116.394801" latitude.sync="40.013214"></vx-item-location>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.T_Mall.MallCode">
         <vx-item-input v-model="FormData.MallCode"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.MallCode"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.SalesInterface">
         <vx-item-input v-model="FormData.MallCode"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.SalesInterface"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-item-number v-model="FormData.Rank" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Rank"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-mall",
   FormData: {
      Id: null,
      Name: null,
      Enabled: 1,
      CompanyName:null,
      CompanyId:null,
      Area: 0,
      Clerks: 0,
      MallLocation:null,
      LocationIds: [],
      ProvinceId:null,
      CityId:null,
      DistrictId:null,
      Rank: 1,
      TimeZone:"+8"
   },
   Rules: {
      Name: { required: true },
      CompanyId:{ required: true },
      CityId:{required: true},
      TimeZone:{required: true}
   }
});
</script>
