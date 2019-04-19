<template>
   <div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 集团名称 -->
               <vx-container-item label="集团名称">
                  <vm-select-company v-model="FormData.CompanyId"></vm-select-company>
               </vx-container-item>
            </el-col>
         </el-row>
      </div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 案场名称 -->
               <vx-container-item label="案场名称">
                  <vm-select-mall v-model="FormData.MallId"></vm-select-mall>
               </vx-container-item>
            </el-col>
            <el-col :span="10">
               <!-- 物理区域名称 -->
               <vx-container-item label="物理区域名称">
                  <vm-select-physicalzone v-model="FormData.PhysicalId"></vm-select-physicalzone>
               </vx-container-item>
            </el-col>
         </el-row>
      </div>
   </div>
</template>
<script>
Vue.component("vm-scope-physicalzone", {
   template: template,
   data() {
      return {
         FormData: {
            Id: null,
            CompanyId: null,
            MallId: null,
            PhysicalId: null
         }
      };
   }
});
</script>
