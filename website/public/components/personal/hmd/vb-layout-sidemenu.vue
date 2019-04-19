<template>
   <div class="left_menu">
      <vb-nav-menu color="#555" fontcolor="#555" background="#F8F8F8" ></vb-nav-menu>

   </div>
</template>
<style lang="less">
.left_menu {
	position: absolute;
	width: 251px; // height:90vh;
   background: #f8f8f8;

}
</style>
<script>
Vue.component('vb-layout-sidemenu', {
	template: template,
	data() {
		return {};
	},
	computed: {
		Menu: {

		},
		ActiveMenus: {

		}
	},
	methods: {
	},
});
</script>
