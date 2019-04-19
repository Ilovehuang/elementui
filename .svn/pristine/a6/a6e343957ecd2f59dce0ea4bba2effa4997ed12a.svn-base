<template>
   <vx-container-dialog :form="FormData" :title="LoaderDict.Pages.Business.WeatherManager" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-log-weather operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-log-weather>
      <vx-container-item :label="LoaderDict.Business.T_Weather.CityId">
         <vx-form-input  v-model="FormData.CityId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.CityId"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Date">
         <vx-form-datesinglepicker format="YYYY-MM-DD" :defaultvalue="FormData.Date" v-model="FormData.Date" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Date"></vx-form-datesinglepicker>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaqujiangwenlvderDict.Business.T_Weather.CityId" >
         <vb-cascader-city v-model="FormData.CityIds" ></vb-cascader-city>
         {{FormData.CityIds}}
         <vx-item-input v-model="FormData.CityId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.CityId"></vx-item-input>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.T_Weather.WeatherName">
         <vx-form-input v-model="FormData.WeatherName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.WeatherName"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Weather.LowTemp">
         <vx-form-number size="mini" v-model="FormData.LowTemp" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.LowTemp"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Weather.HighTemp">
         <vx-form-number size="mini" v-model="FormData.HighTemp" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.HighTemp"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="'PM2.5'">
         <vx-form-input v-model="FormData.PM25" :placeholder="LoaderDict.Placeholder.PleaseInput + 'PM2.5'"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Weather.Wind">
         <vx-form-input v-model="FormData.Wind" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Weather.Wind"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-weather", {
   data() {
      return {
         FormData: {
            Id: null,
            Date: moment().format("YYYY-MM-DD"),
            CityId: null,
            CityIds: "",
            WeatherName: null,
            LowTemp: null,
            HighTemp: null,
            PM25: null,
            Wind: null,
            CityName:""
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
