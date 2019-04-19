<template>
   <div>
         <vb-layout-header></vb-layout-header>
         <vb-layout-main>
            <vb-layout-sidemenu></vb-layout-sidemenu>
            <vb-layout-right>
               <vb-layout-pageheader>
                  <div slot="buttons">
                     <slot name="pagebtn"></slot>
                  </div>
               </vb-layout-pageheader>
               <vb-layout-content>
                  <el-row>
                     <el-col :span="4">
                        <div>
                           <slot name="pagetree"></slot>
                        </div>
                     </el-col>
                     <el-col :span="20">
                        <div>
                           <slot name="pagesearch"></slot>
                           <slot name="pagegrid"></slot>
                           <slot name="pageform"></slot>
                        </div>
                     </el-col>
                  </el-row>
               </vb-layout-content>
            </vb-layout-right>
         </vb-layout-main>
         <vb-layout-footer></vb-layout-footer>
      </div>
</template>
<script>
Vue.component("vm-page-grid", {
   template: template
});
</script>
