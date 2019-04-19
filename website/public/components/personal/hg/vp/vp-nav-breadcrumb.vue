<template>
   <div></div>
   <!-- <el-row>
      <el-col :span="24" class="breadcrumb">
         <span>
            <i class="fa fa-home"></i>
            <span>
               <a href="/report/RealReport.html">132546</a>
            </span> > {{BreadCrumb}}</span>
      </el-col>
   </el-row> -->
</template>
<script>
Vue.component("vp-nav-breadcrumb", {

   props: [],
   data() {
      return {
         LoaderDict: LoaderDict
      };
   },
   computed: {
      BreadCrumb: {
         get() {
            var breadcrumb = [];
            var menuPath = store.state.MenuPath;
            if (menuPath) {
               for (var i = menuPath.length - 1; i >= 0; i--) {
                  breadcrumb.push(menuPath[i].Name);
               }
            }
            return breadcrumb.join(" > ");
         }
      }
   }
});
</script>
