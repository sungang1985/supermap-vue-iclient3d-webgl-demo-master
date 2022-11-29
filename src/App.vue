<template>
	<div id="app">
		<sm-viewer :scene-url="url"></sm-viewer>
	</div>
</template>

<script>
	export default {
		name: "app", // 组件名称
		data () {
			return {
				// 初始化场景的url地址
				url: "https://iserver.supermap.io/iserver/services/3D-CBD/rest/realspace"
			};
		}
	};
</script>

<style scoped>

</style>
