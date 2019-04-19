<template>
   <div>
      <div>
         <vp-header-default></vp-header-default>
         <vp-layout-main>
            <vp-nav-menu class="left_menu"></vp-nav-menu>
            <vp-layout-right>
               <vp-nav-pageinfo>
                  <div slot="buttons">
                     <slot name="pagebtn"></slot>
                  </div>
                  {{PageTitle}}
               </vp-nav-pageinfo>
               <vp-layout-content>
                  <slot name="pagegrid"></slot>
               </vp-layout-content>
            </vp-layout-right>
         </vp-layout-main>
         <vp-footer-default></vp-footer-default>
      </div>
   </div>
</template>
<style lang="less">
.left_menu {
   position: absolute;
   width: 250px; // height:90vh;
   background: #f8f8f8;
}
</style>

<script>
Vue.component("vp-layout-menumain", {
   template: template,
   data() {
      return {
         PageTitle: ""
      };
   },
   created() {
      this.PageTitle = sessionStorage.getItem("pageTitle");
   }
});
</script>
