<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.S_Menu.Title" width="780" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-menu operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-menu>
      <vx-container-item :label="LoaderDict.Business.S_Menu.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Menu.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Menu.ParentId" :rule="Rules.ParentId">
         <vx-form-input v-model="FormData.ParentName" :rule="Rules.ParentId" ></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Menu.PageUrl" :rule="Rules.PageUrl">
         <vx-form-input v-model="FormData.PageUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Menu.PageUrl" :rule="Rules.PageUrl"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.Rank" :rule="Rules.Rank">
         <vx-form-number v-model="FormData.Rank"></vx-form-number>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.RoleLevel">
         <vx-form-radio v-model="FormData.RoleLevel" type="Level"></vx-form-radio>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.S_Menu.PageIcon" :rule="Rules.PageIcon">
         <vx-form-input v-model="FormData.PageIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Menu.PageIcon" :rule="Rules.PageIcon"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Menu.MobileIcon" :rule="Rules.MobileIcon">
         <vx-form-input v-model="FormData.MobileIcon" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Menu.MobileIcon" :rule="Rules.MobileIcon"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.S_Menu.SwPlatform">
         <vx-form-radio v-model="FormData.SwPlatform" type="SwPlatform"></vx-form-radio>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Business.Visible">
         <vx-form-radio v-model="FormData.Visible" type="Visible"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-menu", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            ParentId: "-",
            ParentName: "",
            PageUrl: null,
            Rank: 1,
            RoleLevel: 1,
            PageIcon: null,
            MobileIcon: null,
            SwPlatform: 1,
            Visible: 1,
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            ParentId: { required: true },
            PageUrl: { required: true }
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
   methods: {
      onAfterSave() {
         this.$Bus.$emit("Form.Tree", { a: 1 });
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
