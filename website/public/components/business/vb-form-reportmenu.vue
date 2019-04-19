<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_ReportMenu.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-reportmenu operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-reportmenu>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name" :rule="Rules.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.MenuType" :rule="Rules.MenuType">
         <vb-select-menutype v-model="FormData.MenuType" :placeholder="LoaderDict.Placeholder.PleaseChoose + LoaderDict.Business.R_ReportMenu.MenuType"></vb-select-menutype>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.PageIcon">
         <vx-item-input v-model="FormData.PageIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportMenu.PageIcon"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.MobileIcon">
         <vx-item-input v-model="FormData.MobileIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_ReportMenu.MobileIcon"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_ReportMenu.SwPlatform">
         <vx-item-radio v-model="FormData.SwPlatform" type="PingTai"></vx-item-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Rank">
         <vx-item-number v-model="FormData.Rank" :min="0"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label=" LoaderDict.Business.R_ReportMenu.Visible ">
         <vx-item-radio v-model="FormData.Visible" type="Visible"></vx-item-radio>
      </vx-container-item>
      <vx-container-item :label=" LoaderDict.Common.Enabled ">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-reportmenu",
   FormData: {
      Id: null,
      Name: null,
      MenuType: "",
      PageIcon: "",
      MobileIcon: "",
      Rank: 0,
      SwPlatform: 1,
      Visible: -1,
      Enabled: 1
   },
   Rules: {
      Name: { required: true },
      MenuType: { required: true }
   }
});
</script>
