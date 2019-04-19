<template>
	<div class="right-content">
		<slot></slot>
	</div>
</template>
<style lang="less">
.right-content {
	margin-left: 250px;
   border-left:1px solid #ccc;
	min-height: 890px;
}
</style>
<script>
Vue.component("vp-layout-right", {

});
</script>
