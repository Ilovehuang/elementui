<template>
   <div class="page-header">
      <br/>
      <vp-nav-breadcrumb></vp-nav-breadcrumb>
      <el-row type="flex">
         <el-col :span="18">
            <!-- <span class="title">{{PageTitle}}</span> -->
            <h3 class="title content-title">{{PageTitle}}</h3>
         </el-col>
         <el-col :span="6">
            <slot name="buttons"></slot>
         </el-col>
      </el-row>
   </div>
</template>
<style lang="less">
.page-header {
   height: 84px;
   padding: 15px 15px 15px 25px;
   border-bottom: 1px solid #ccc;

   .breadcrumb {
      height: 20px;
      font-size: 14px;
      margin-bottom: 5px;
      span span {
         color: #2680c4;
      }
      span span:hover {
         color: #555;
         cursor: pointer;
      }
      i {
         padding-left: 3px;
      }
   }
   .title {
      font-size: 25px;
      font-weight: 500;
      color: #495060
   }
   .left {
      margin-right: 35px;
   }
}
</style>

<script>
Vue.component("vp-nav-pageinfo", {

   props: [],
   computed: {
   },
   data(){
      return {
         PageTitle:""
      }
   },
   mounted(){
      this.$Bus.$on('Form.Tree',data=>{
         this.PageTitle=data.Tree.join(' > ')
      })
   }
});
</script>
