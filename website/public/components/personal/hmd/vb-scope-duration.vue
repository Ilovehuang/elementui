<template>
   <div class="duration">
      <div>
         <div class="searchonlinecount">按上网用户数查询</div>
         <div>
            <el-row :gutter="16">
               <el-col :span="8">
                  <vx-container-item label="新增上网用户数:">
                     <vx-item-input v-model="FormData.addusernumxia" options="" placeholder="上网用户数下限"></vx-item-input> -
                     <vx-item-input v-model="FormData.addusernumshang" options="" placeholder="上网用户数上限"></vx-item-input>
                  </vx-container-item>
               </el-col>
               <el-col :span="8">
                  <vx-container-item label="在线用户人数:">
                     <vx-item-input v-model="FormData.onlineuserxia" options="" placeholder="在线用户人数下限"></vx-item-input> -
                     <vx-item-input v-model="FormData.onlineusershang" options="" placeholder="在线用户人数上限"></vx-item-input>
                  </vx-container-item>
               </el-col>
            </el-row>
         </div>
      </div>
   </div>
</template>
<style lang="less">
.duration {
   .clear {
      margin-left: 40%;
   }
   .search {
      margin-right: -60px;
   }
}
</style>
<script>
$VueFactory.businessForm({
   template: template,
   name: "vb-scope-online",
   FormData: {
      addusernumxia:null,
      addusernumshang:null,
      onlineuserxia:null,
      onlineusershang:null,
      onlinetimexia:null,
      onlinetimeshang:null
   },
   methods: {
      Clear() {
         for (let key in this.FormData) {
               this.FormData[key] = null;
         }
      },
      Search() {
         console.log("Search");
         console.log(this.FormData);
         PubSub.publish("Grid.Online", this.FormData);
      }
   }
});
</script>
