<template>
	<div class="mainPage">
		<router-view></router-view>
		<map-component />
	</div>
</template>

<script>
	import mapComponent from "../components/mapComponent.vue"

	export default {
		name: "mapPage",
		components: { mapComponent },
	}
</script>

<style lang="scss" scoped>
	.mainPage {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		margin-top: 60px;
	}
</style>
