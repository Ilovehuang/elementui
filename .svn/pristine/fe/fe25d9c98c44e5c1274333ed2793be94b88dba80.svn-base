<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ChartOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-chartoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-chartoption>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartOption.Code" :rule="Rules.Code">
         <vx-form-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartOption.Code" :rule="Rules.Code"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ChartOption.ChartType" :rule="Rules.ChartType">
         <vx-form-input v-model="FormData.ChartType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartOption.ChartType" :rule="Rules.ChartType"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark" :rule="Rules.Remark">
         <vx-form-input type="textarea" rows="5" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark" :rule="Rules.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-chartoption", {
   data(){
      return {
         FormData: {
            Id: null,
            Name: null,
            Code: null,
            ChartType: "",
            Remark: "",
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            Code: { required: true },
            ChartType: { required: true },
            Remark: { required: true }
         }
      }
   },
   computed:{
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
