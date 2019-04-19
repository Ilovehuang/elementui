<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportMenu.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportmenu operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-reportmenu>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.MenuType" :rule="Rules.MenuType">
         <vm-select-menutype v-model="FormData.MenuType" :placeholder="LoaderDict.Placeholder.PleaseChoose + LoaderDict.Business.R_ReportMenu.MenuType"></vm-select-menutype>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.PageIcon">
         <vx-form-input v-model="FormData.PageIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportMenu.PageIcon"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.MobileIcon">
         <vx-form-input v-model="FormData.MobileIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportMenu.MobileIcon"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.SwPlatform">
         <vx-form-radio v-model="FormData.SwPlatform" :list="SwPlatform"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label=" LoaderDict.Business.Visible ">
         <vx-form-radio v-model="FormData.Visible" type="Visible"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-form-number v-model="FormData.Rank" :min="0"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label=" LoaderDict.Common.Enabled ">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-reportmenu", {
   data(){
      return {
         SwPlatform: [
            {
               label: LoaderDict.Business.R_ReportMenu.All,
               value: 1
            },
            {
               label: LoaderDict.Business.R_ReportMenu.Website,
               value: 2
            },
            {
               label: LoaderDict.Business.R_ReportMenu.MobileTerminal,
               value: 3
            }
         ],
         FormData: {
            Id: null,
            Name: null,
            MenuType: "",
            PageIcon: "",
            MobileIcon: "",
            Rank: 0,
            SwPlatform: 1,
            Visible: 1,
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            MenuType: { required: true }
         }
      }
   },
   created(){
   },
   mixins:["defaultBusinessForm"]
});
</script>
