<template>
   <vx-container-dialog :form="FormData" :rules="Rules" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-servicelist operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-servicelist>
      <vx-container-item label="服务名" :rule="Rules.Name">
         <vx-form-input v-model="FormData.Name" placeholder="请输入服务名" :rule="Rules.Name"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="描述" :rule="Rules.Description">
         <vx-form-input v-model="FormData.Description" placeholder="请输入描述" :rule="Rules.Description"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="文件名" :rule="Rules.Filename">
         <vx-form-input v-model="FormData.Filename" placeholder="请输入文件名" :rule="Rules.Filename"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="接口" :rule="Rules.Interface">
         <vx-form-input v-model="FormData.Interface" placeholder="请输入接口" :rule="Rules.Interface"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="服务地址" :rule="Rules.Url">
         <vx-form-input v-model="FormData.Url" placeholder="请输入服务地址" :rule="Rules.Url"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="文档地址" :rule="Rules.MarkDownUrl">
         <vx-form-input v-model="FormData.MarkDownUrl" placeholder="请输入文档地址" :rule="Rules.MarkDownUrl"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="备注" :rule="Rules.Remark">
         <vx-form-input v-model="FormData.Remark" placeholder="请输入备注" :rule="Rules.Remark"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="启用状态">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-servicelist", {
   data() {
      return {
         FormData: {
            Id: null,
            Name: null,
            Description: null,
            Remark: null,
            Filename: null,
            Interface: null,
            MarkDownUrl: null,
            Url: null,
            Enabled: 1
         },
         Rules: {
            Name: { required: true },
            Description: { required: true },
            Filename: { required: true },
            Url: { required: true },
            MarkDownUrl: { required: true },
            Interface: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
