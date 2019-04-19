<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_Company.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-company operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-company>
      <vx-container-item :label="LoaderDict.Business.T_Company.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Company.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="'集团类型'"  :rule="Rules.Type">
         <vx-form-select v-model='FormData.Type' :options='CompanyType'  ></vx-form-select>
      </vx-container-item>

      <vx-container-item :label="LoaderDict.Business.Host" :rule="Rules.Host">
         <vx-form-input type="textarea" rows="5" v-model="FormData.Host" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Remark">
         <vx-form-input type="textarea" rows="3" v-model="FormData.Remark" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-company", {

   data(){
      return {
         CompanyType:[{
            label:'购物中心',
            value:'购物中心'
         },{
            label:'连锁店',
            value:'连锁店'
         },{
            label:'公共场所',
            value:'公共场所'
         },{
            label:'其他',
            value:'其他'
         }],
         FormData: {
            Longitude:"",
            Id:null,
            Name: null,
            Host: null,
            Type:null,
            Enabled: 1 //设置启用状态，默认启用
         },
         Rules: {
            Name: { required: true },
            Host: { required: true },
            Type: { required: true }
         }
      }
   },
   created(){
   },
   methods: {
      plugin() {
         this.$Bus.$emit("CompanyOptionsForm.Visible",{});
      },
      index(){
         this.$Bus.$emit("CompanyIndexForm.Visible", {});
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
