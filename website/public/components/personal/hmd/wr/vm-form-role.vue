<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.S_Role.Title" width="780" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-system-role operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-system-role>
      <vx-container-item :label="LoaderDict.Business.S_Role.Name" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.S_Role.Name" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="'角色级别'">
         <vx-form-radio v-model="FormData.RoleLevel" :list="radioList"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.S_Role.MenuIds">
         <vm-tree-menu  :showcheckbox="true" :treeids.sync="FormData.MenuIds" :fulltreeids.sync="FormData.FulleMenuIds"></vm-tree-menu>
      </vx-container-item>
   </vx-container-dialog>
</template>
<style>
.el-tree {
   max-height: 260px;
   overflow: scroll;
}
</style>

<script>
Vue.component("vm-form-role", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            ParentId: "-",
            ParentName: "",
            RoleLevel: 1,
            MenuIds: [],
            FulleMenuIds: [],
            CompanyId: null,
            CompanyName: null,
            Enabled: 1
         },
         Rules: {
            Name: { required: true }
         },
         radioList:[{label:"级别一",value:1},{label:"级别二",value:2},{label:"级别三",value:3},{label:"级别四",value:4}],
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
