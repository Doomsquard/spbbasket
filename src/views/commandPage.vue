<template>
	<div class="mainPage">
		<router-view></router-view>
		<command-component />
	</div>
</template>

<script>
	import commandComponent from "../components/commandComponent.vue"

	export default {
		name: "commandPage",
		components: { commandComponent },
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
