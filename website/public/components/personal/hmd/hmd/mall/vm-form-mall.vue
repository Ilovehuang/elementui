<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Mall.Title" width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-mall operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-mall>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Province" :rule="Rules.CityId">
         <vm-cascader-city v-model="FormData.LocationIds" :label.sync="FormData.MallLocation" :provinceid.sync="FormData.ProvinceId" :cityid.sync="FormData.CityId"  :districtid.sync="FormData.DistrictId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Province" ></vm-cascader-city>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.TimeZone" :rule="Rules.TimeZone">
         <vx-form-select v-model="FormData.TimeZone" :options='ShiQu'  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.TimeZone"></vx-form-select>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Area">
         <vx-form-number v-model="FormData.Area" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Area"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Clerks">
         <vx-form-number v-model="FormData.Clerks" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Clerks"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Address">
         <vx-form-input v-model="FormData.Address" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Address"></vx-form-input>
      </vx-container-item>

      <!-- <vx-container-item :label="LoaderDict.Business.Longitude" >
         <vx-form-input  v-model="FormData.Longitude" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Longitude"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Latitude" >
         <vx-form-input  v-model="FormData.Latitude" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Latitude"></vx-form-input>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.T_Mall.MallCode">
         <vx-form-input v-model="FormData.MallCode"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.MallCode"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.T_Mall.SalesInterface">
         <vx-form-input v-model="FormData.MallCode"  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.SalesInterface"></vx-form-input>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.T_Mall.MallLocation">
         <vx-form-location  :width="400" :clickhide="true" :height="400" :longitude.sync="FormData.Latitude" :latitude.sync="FormData.Longitude"></vx-form-location>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-form-number v-model="FormData.Rank" :min="0" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Rank"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-mall", {
   data(){
      return {
         ShiQu:[
                     {
                        value: "+1",
                        label: "+1区"
                     },
                     {
                        value: "+2",
                        label: "+2区"
                     },
                     {
                        value: "+3",
                        label: "+3区"
                     },
                     {
                        value: "+4",
                        label: "+4区"
                     },
                     {
                        value: "+5",
                        label: "+5区"
                     },
                     {
                        value: "+6",
                        label: "+6区"
                     },
                     {
                        value: "+7",
                        label: "+7区"
                     },
                     {
                        value: "+8",
                        label: "+8区"
                     },
                     {
                        value: "+9",
                        label: "+9区"
                     },
                     {
                        value: "+10",
                        label: "+10区"
                     },
                     {
                        value: "+11",
                        label: "+11区"
                     },
                     {
                        value: "+12",
                        label: "+12区"
                     },
                     {
                        value: "0",
                        label: "0区"
                     },
                     {
                        value: "-1",
                        label: "-1区"
                     },
                     {
                        value: "-2",
                        label: "-2区"
                     },
                     {
                        value: "-3",
                        label: "-3区"
                     },
                     {
                        value: "-4",
                        label: "-4区"
                     },
                     {
                        value: "-5",
                        label: "-5区"
                     },
                     {
                        value: "-6",
                        label: "-6区"
                     },
                     {
                        value: "-7",
                        label: "-7区"
                     },
                     {
                        value: "-8",
                        label: "-8区"
                     },
                     {
                        value: "-9",
                        label: "-9区"
                     },
                     {
                        value: "-10",
                        label: "-10区"
                     },
                     {
                        value: "-11",
                        label: "-11区"
                     },
                     {
                        value: "-12",
                        label: "-12区"
                     }
                  ],
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
            Longitude:null,
            Latitude:null,
            DistrictId:null,
            Rank: 1,
            TimeZone:"+8"
         },
         Rules: {
            Name: { required: true },
            // CompanyId:{ required: true },
            // CityId:{required: true},
            TimeZone:{required: true}
         }
      }
   },
   created(){
   },
   methods: {
   },
   mixins:["defaultBusinessForm"]
});
</script>
