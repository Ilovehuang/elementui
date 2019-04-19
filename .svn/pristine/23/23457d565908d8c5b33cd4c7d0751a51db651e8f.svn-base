<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_PhysicalZone.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-location operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-location>
      <!-- <vx-container-item :label="LoaderDict.Business.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.ParentId" :rule="Rules.ParentId">
         <vx-form-input :disabled="true" v-model="FormData.ParentName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.ParentId"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank">
         <vx-form-number :min="0"  v-model="FormData.Rank" ></vx-form-number>
      </vx-container-item> -->
      <vx-container-item label='天气是否启用'>
         <vx-form-radio v-model="FormData.GetWeather" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.Visible">
         <vx-form-radio v-model="FormData.GetWeather" type="Visible"></vx-form-radio>
      </vx-container-item> -->
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-location", {
   data(){
      return {
         FormData: {
            Id:null,
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
      }
   },
   created(){
      var me = this;
      me.DefaultForm.ParentName = "智慧商业云平台"
      me.DefaultForm.ParentId = "-"
      this.$Bus.$on("Form.ParentName", function(data) {
         me.DefaultForm.ParentId = data.Id;
         me.DefaultForm.ParentName = data.Name;
      });
   },
   methods: {
      onAfterSave(){
           this.$Bus.$emit("Form.Tree",{a:1});
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
