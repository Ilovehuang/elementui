<template>
   <div class="form-main">
      <vp-header-nav></vp-header-nav>
      <vp-widget-report-compare></vp-widget-report-compare>
   </div>
</template>
<script>
Vue.component("vp-main-report-default", {
   template: template,
   props: [],
   data() {
   },
   computed: {
   },
   watch: {
   },
   methods: {
   },
   created() {
   },
   mounted() {},
});
</script>


<style lang="less">
@headerheight: 50px;

.form-main {
   margin: 0 23px;
   margin-top: 20px;
   &::after{
      content: "";
      display: block;
      clear: both;
   }

}
</style>
