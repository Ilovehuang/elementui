<template>
	<div class="right-content">
		<slot></slot>
	</div>
</template>
<style lang="less">
.right-content {
	margin-left: 251px;
   border-left:1px solid #ccc;
	min-height: 890px;
}
</style>
<script>
Vue.component("vb-layout-right", {
	template: template,
});
</script>
