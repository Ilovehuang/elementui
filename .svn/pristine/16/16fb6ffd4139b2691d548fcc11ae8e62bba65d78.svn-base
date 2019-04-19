<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_PhysicalZone.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-location operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-location>
      <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-item-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.ParentId" :rule="Rules.ParentId">
         <vx-item-input disabled="true" v-model="FormData.ParentName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.ParentId"></vx-item-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-item-number :min="0"  v-model="FormData.Rank" ></vx-item-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-item-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-item-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Visible">
         <vx-item-radio v-model="FormData.GetWeather" type="Visible"></vx-item-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
var Event = new Vue();
$VueFactory.businessForm({
   template: template,
   name: "vb-form-location",
   created() {
      var me = this;
      me.DefaultForm.ParentName = "智慧商业云平台"
      me.DefaultForm.ParentId = "-"
      Event.$on("Form.ParentName", function(data) {
         me.DefaultForm.ParentId = data.Id;
         me.DefaultForm.ParentName = data.Name;
      });
   },
   methods:{
      onAfterSave(){
           Event.$emit("Form.Tree",{a:1});
      }
   },
   FormData: {
      Name: null,
      ParentId: null,
      ParentName: null,
      Enabled: 1,
      Rank:1,
      GetWeather:1
   },
   Rules: {
      Name: { required: true },
      ParentId: { required: true }
   }
});
</script>
