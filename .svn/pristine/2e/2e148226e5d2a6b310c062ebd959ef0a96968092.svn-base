<template>
   <div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 集团名称 -->
               <vx-container-item label="集团名称">
                  <vb-select-company v-model="FormData.CompanyId"></vb-select-company>
               </vx-container-item>
            </el-col>
         </el-row>
      </div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 案场名称 -->
               <vx-container-item label="案场名称">
                  <vb-select-mall v-model="FormData.MallId"></vb-select-mall>
               </vx-container-item>

            </el-col>
            <el-col :span="10">
               <!-- 物理区域名称 -->
               <vx-container-item label="物理区域名称">
                  <vb-select-physicalzone v-model="FormData.PhysicalId"></vb-select-physicalzone>
               </vx-container-item>
            </el-col>
         </el-row>
      </div>
   </div>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-scope-physicalzone",
   FormData: {
      Id: null,
      CompanyId: null,
      MallId: null,
      PhysicalId: null
   }
});
</script>
