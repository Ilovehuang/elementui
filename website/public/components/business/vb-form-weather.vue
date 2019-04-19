<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Pages.WeatherManagement" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-weather operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-weather>
      <vx-container-item :label="LoaderDict.Business.Date" >
         <vx-item-datesinglepicker format="YYYY-MM-DD" :defaultvalue="FormData.Date" v-model="FormData.Date" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Date"></vx-item-datesinglepicker>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Weather.CityId" >
         <vx-item-input v-model="FormData.CityId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Weather.CityId"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Weather.WeatherName" >
         <vx-item-input v-model="FormData.WeatherName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Weather.WeatherName"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Weather.LowTemp" >
         <vx-item-number  size="mini" v-model="FormData.LowTemp" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Weather.LowTemp" ></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Weather.HighTemp" >
         <vx-item-number size="mini"  v-model="FormData.HighTemp" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Weather.HighTemp"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="'PM2.5'" >
         <vx-item-input  v-model="FormData.PM25" :placeholder="LoaderDict.Placeholder.PleaseInput + 'PM2.5'"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Weather.Wind" >
         <vx-item-input  v-model="FormData.Wind" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Weather.Wind"></vx-item-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-weather",
   FormData: {
      Id: null,
      Date: moment().format("YYYY-MM-DD"),
      CityId: null,
      WeatherName:null,
      LowTemp:null,
      HighTemp:null,
      PM25:null,
      Wind:null
   },
   Rules: {
   }
});
</script>
