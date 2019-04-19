<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.S_Category.Title" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-category operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-category>
      <vx-container-item :label="LoaderDict.Business.S_Category.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.ParentId" :rule="Rules.ParentId">
         <vx-form-input v-model="FormData.ParentName" :rule="Rules.ParentId"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank" :rule="Rules.Rank">
         <vx-form-number v-model="FormData.Rank"></vx-form-number>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.KeyName" :rule="Rules.KeyName">
         <vx-form-input v-model="FormData.KeyName" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.KeyName" :rule="Rules.KeyName"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.Data" :rule="Rules.Data">
         <vx-form-input v-model="FormData.Data" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.Data" :rule="Rules.Data"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Category.ImageUrl" :rule="Rules.ImageUrl">
         <vx-form-input v-model="FormData.ImageUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Category.ImageUrl" :rule="Rules.ImageUrl"></vx-form-input>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-category", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            ParentId: "-",
            ParentName: "",
            Rank: 1,
            KeyName: null,
            Data: null,
            ImageUrl: null
         },
         Rules: {
            Name: { required: true },
            ParentId: { required: true },
            Rank: { required: true }
         }
      };
   },
   created() {
      var me = this;
      me.DefaultForm.ParentName = "智慧商业云平台";
      me.DefaultForm.ParentId = "-";
      this.$Bus.$on("Form.ParentName", function(data) {
         me.DefaultForm.ParentId = data.Id;
         me.DefaultForm.ParentName = data.Name;
      });
   },
   mixins: ["defaultBusinessForm"]
});
</script>
