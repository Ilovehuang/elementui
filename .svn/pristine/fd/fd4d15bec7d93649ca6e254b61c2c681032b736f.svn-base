<template>
   <vx-container-dialog :form="FormData" :rules="Rules" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-componentslist operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-componentslist>
      <vx-container-item label="组件名" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" placeholder="请输入组件名" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="描述" :rule="Rules.Description">
         <vx-form-input v-model="FormData.Description" placeholder="请输入描述" :rule="Rules.Description"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="备注" :rule="Rules.Remark">
         <vx-form-input v-model="FormData.Remark" placeholder="请输入备注" :rule="Rules.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="测试地址" :rule="Rules.Url">
         <vx-form-input v-model="FormData.Url" placeholder="请输入测试地址" :rule="Rules.Url"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="属性" :rule="Rules.Attribute">
         <vx-form-input type="textarea" rows="5" v-model="FormData.Attribute" placeholder="请输入属性" :rule="Rules.Attribute"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="启用状态">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-componentslist", {
   data() {
      return {
         FormData: {
            Name: null,
            Description: null,
            Remark: null,
            Attribute: null,
            Url: null,
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            Description: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
