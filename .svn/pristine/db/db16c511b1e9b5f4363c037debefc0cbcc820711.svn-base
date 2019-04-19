<template>
   <div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 集团名称 -->
               <vb-select-company v-model="FormData.CompanyId"></vb-select-company>
            </el-col>
         </el-row>
      </div>
      <div>
         <el-row>
            <el-col :span="8">
               <!-- 案场名称 -->
               <vb-select-mall v-model="FormData.MallId"></vb-select-mall>
            </el-col>
            <el-col :span="8">
               <!-- 物理区域名称 -->
               <vb-select-physicalzone></vb-select-physicalzone>
            </el-col>
            <el-col :span="8">
               <!-- 摄像区域名称 -->

            </el-col>
         </el-row>
      </div>
   </div>
</template>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-zonecamera-query",
   FormData: {
      Id: null,
      CompanyId: null,
      MallId: null,
      PhysicalId: null
   }
});
</script>
