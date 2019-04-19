<template>
   <div class="clearfix title" style="margin-top: 10px;">
      <el-tabs type="border-card">
         <el-tab-pane :label="paneValue">
            <vx-container-row>
               <vx-container-col :span="8">
                  <vx-container-item :label="'所属集团'">
                     <vm-select-company v-model="company"></vm-select-company>
                  </vx-container-item>
               </vx-container-col>
            </vx-container-row>
            <vx-container-row>
               <vx-container-col :span="8">
                  <vx-container-item :label="'案场名称'">
                     <vm-select-mall v-model="mall"></vm-select-mall>
                  </vx-container-item>
               </vx-container-col>
               <vx-container-col :span="8">
                  <vx-container-item :label="'时间间隔'">
                     <vx-form-select v-model="period" type="TimeSpan" :options="options"></vx-form-select>
                  </vx-container-item>
               </vx-container-col>
               <vx-container-col :span="8">
                  <vx-container-item :label="'指定日期'">
                     <vx-form-datesinglepicker v-model="DateTime"></vx-form-datesinglepicker>
                  </vx-container-item>
               </vx-container-col>
            </vx-container-row>
         </el-tab-pane>
         <el-tab-pane :label="mainValue">
            <vx-container-row>
               <vx-container-col :span="8">
                  <vx-container-item :label="'所属集团'">
                     <vm-select-company v-model="company"></vm-select-company>
                  </vx-container-item>
               </vx-container-col>
            </vx-container-row>
            <vx-container-row>
               <vx-container-col :span="8">
                  <vx-container-item :label="'案场名称'">
                     <vm-select-mall v-model="mall"></vm-select-mall>
                  </vx-container-item>
               </vx-container-col>
               <vx-container-col :span="8">
                  <vx-container-item :label="'接口名称'">
                     <vx-form-input v-model="period" type="IntforceName"></vx-form-input>
                  </vx-container-item>
               </vx-container-col>
               <vx-container-col :span="8">
                  <vx-container-item :label="'时间范围'">
                     <vx-form-daterangepicker v-model="DateTime"></vx-form-daterangepicker>
                  </vx-container-item>
               </vx-container-col>
            </vx-container-row>
         </el-tab-pane>
      </el-tabs>
   </div>
</template>
<script>
Vue.component("vm-manager-salesDataMaintenance", {
   template: template,
   props: [],
   data() {
      return {
         company: "",
         mall: "",
         options: [],
         period: "",
         DateTime: "",
         TimeSpan: "60分钟",
         paneValue: "销售数据维护",
         mainValue: "销售数据导入"
      };
   }
});
</script>
