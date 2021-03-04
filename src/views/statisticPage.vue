<template>
	<div class="mainPage">
		<router-view></router-view>
		<statistic-component />
	</div>
</template>

<script>
	import StatisticComponent from "../components/statisticComponent.vue"

	export default {
		name: "statisticPage",
		components: { StatisticComponent },
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
