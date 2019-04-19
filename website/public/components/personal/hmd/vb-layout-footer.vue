<template>
	<div class="footer">
		<!-- <span>©2014 - {{ NowYear }} NTFORCE 北京 上海 深圳 武汉 成都 西安</span> -->
		<span>©2014 - {{ NowYear }} {{ VersionInformation }}</span>
	</div>
</template>
<style lang="less">
.footer {
	height: 36px;
	width: 100%;
	bottom: 0;
	background-color: #f0f0f0;
	border-top: 1px solid #ccc;
	position: fixed;
	line-height: 36px;
	z-index: 2;
	span {
		font-size: 12px;
		color: #999;
		margin-left: 30px;
	}
}
</style>
<script>
Vue.component('vb-layout-footer', {
	template: template,
	data() {
		return {
			NowYear: moment().format('YYYY'),
			VersionInformation: "商业数据分析平台 北京 上海 深圳 武汉 成都 西安"
		};
	}
});
</script>
