<template>
	<div class="mainPage">
		<router-view></router-view>
		<startComponent />
	</div>
</template>

<script>
	import startComponent from "../components/startComponent.vue"

	export default {
		name: "startPage",
		components: { startComponent },
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
