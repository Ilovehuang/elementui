<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.R_IndexOption.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-rpt-indexoption operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-rpt-indexoption>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Label">
         <vx-item-input v-model="FormData.Label" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Code" :rule="Rules.Code">
         <vx-item-input v-model="FormData.Code" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.Code"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Field" :rule="Rules.Field">
         <vx-item-input v-model="FormData.Field" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.Field"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.ChartView">
         <vx-item-input type="textarea" rows="5" v-model="FormData.ChartView" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ChartView"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.ButtonView">
         <vx-item-input type="textarea" rows="5" v-model="FormData.ButtonView" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.ButtonView"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.TableView">
         <vx-item-input type="textarea" rows="5" v-model="FormData.TableView" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.R_IndexOption.TableView"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Rank">
         <vx-item-number v-model="FormData.Rank" :min="0"></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.R_IndexOption.Visible">
         <vx-item-radio v-model="FormData.Visible" type="Visible"></vx-item-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-form-indexoption",
   FormData: {
      Id: null,
      Label: null,
      Code: "",
      Field: "",
      ChartView: null,
      ButtonView: null,
      TableView: null,
      Rank: 0,
      Visible: -1,
      Enabled: 1
   },
   Rules: {
      Label: { required: true },
      Code: { required: true },
      Field: { required: true }
   }
});
</script>
