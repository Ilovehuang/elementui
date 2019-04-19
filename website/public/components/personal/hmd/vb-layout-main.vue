<template>
	<div class="main-content">
		<el-row>
			<slot></slot>
		</el-row>
	</div>
</template>
<style lang="less">
.main-content {
   margin: 50px 0 10px;
   width: 100%;
   position: absolute;
   background: none repeat scroll 0 0 #f8f8f8;
}
</style>
<script>
Vue.component("vb-layout-main", {
   template: template
});
</script>
