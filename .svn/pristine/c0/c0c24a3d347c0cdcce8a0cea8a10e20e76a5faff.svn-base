<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_IndexOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-indexoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-indexoption>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Label">
         <vx-form-input v-model="FormData.Label" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Code" :rule="Rules.Code">
         <vx-form-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.Code"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.InnerField" :rule="Rules.InnerField">
         <vx-form-input v-model="FormData.Field" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.InnerField"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Field" :rule="Rules.Field">
         <vx-form-input v-model="FormData.InnerField" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.Field"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.R_IndexOption.ChartView">
         <vx-form-input type="textarea" rows="2" v-model="FormData.ChartView" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ChartView"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.ButtonView">
         <vx-form-input type="textarea" rows="2" v-model="FormData.ButtonView" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ButtonView"></vx-form-input>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.ServiceId">
         <!-- <vx-form-input v-model="FormData.ServiceId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ServiceId"></vx-form-input> -->
         <vm-select-serviceid v-model="FormData.ServiceId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ServiceId"></vm-select-serviceid>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.MainReport">
         <vx-form-input v-model="FormData.MainReport" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.MainReport"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.LocalReport">
         <vx-form-input v-model="FormData.LocalReport" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.LocalReport"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.HistoryTable">
         <vx-form-input v-model="FormData.HistoryTable" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.HistoryTable"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.RowAvg">
         <vx-form-input v-model="FormData.RowAvg" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.RowAvg"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.RowTotal">
         <vx-form-input v-model="FormData.RowTotal" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.RowTotal"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Unit">
         <vx-form-input v-model="FormData.Unit" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.Unit"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-form-number v-model="FormData.Rank" :min="0"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="'输出字段'">
         <vx-form-input v-model="FormData.OutField" :placeholder="LoaderDict.Placeholder.PleaseInput + '输出字段'"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Visible">
         <vx-form-radio v-model="FormData.Visible" type="Visible"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="'可求和'">
         <vx-form-radio v-model="FormData.Summable" :list="[{label:'是',value:1},{label:'否',value:-1}]"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-indexoption", {
   data(){
      return {
         FormData: {
            Id: null,
            Label: null,
            Code: "",
            Field: "",
            InnerField: "",
            OutField:"",
            ChartView: null,
            ButtonView: null,
            TableView: null,
            MainReport: "",
            LocalReport: "",
            HistoryTable: "",
            ServiceId: "",
            RowAvg: "",
            RowTotal: "",
            Unit: "",
            Rank: 0,
            Visible: 1,
            Enabled: 1,
            Summable:1
         },
         Rules: {
            Label: { required: true },
            Code: { required: true },
            Field: { required: true },
            InnerField: { required: true }
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
