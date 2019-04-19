<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ChartStyle.Title" width="860" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vx-container-col :span="11">
            <vd-rpt-chartstyle operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-chartstyle>
            <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
               <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-form-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.R_ChartStyle.Code" :rule="Rules.Code">
               <vx-form-input v-model="FormData.Code" :rule="Rules.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.Code"></vx-form-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Business.R_ChartStyle.CodeType" :rule="Rules.CodeType">
               <vx-form-input v-model="FormData.CodeType" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.CodeType"></vx-form-input>
            </vx-container-item>
            <vx-container-item :label="'对应属性'" :rule="Rules.CodeType">
               <vx-form-input v-model="FormData.Property" :placeholder="LoaderDict.Placeholder.PleaseInput + '对应属性'"></vx-form-input>
            </vx-container-item>
            
            <vx-container-item :label="LoaderDict.Business.Remark" >
               <vx-form-input type="textarea" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
            </vx-container-item>
            <vx-container-item :label="LoaderDict.Common.Enabled">
               <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
            </vx-container-item>
      </vx-container-col>
      <vx-container-col :span="13">
            <vx-container-item :label="LoaderDict.Business.R_ChartStyle.JsonCode" :rule="Rules.JsonCode">
               <vx-form-input :rows="17" :lazy="true"  type="textarea" v-model.lazy="JsonCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ChartStyle.JsonCode"></vx-form-input>
            </vx-container-item>
      </vx-container-col>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-chartstyle", {
   data(){
      return {
         FormData: {
            Id: null,
            Name: null,
            Code: null,
            CodeType: "",
            JsonCode: {},
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            Code: { required: true },
            CodeType: { required: true },
            JsonCode: { required: true }
         }
      }
   },
   created(){
   },
   methods:{
   },
   computed:{
      JsonCode:{
         get() {
            if(this.FormData.JsonCode!="")
               return JSON.stringify(this.FormData.JsonCode);
            else
               return ""
         },
         set(val) {
            try {
               this.FormData.JsonCode = JSON.parse(val)
            } catch (error) {
               alert('JSON 格式错误')
            }
         }
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
