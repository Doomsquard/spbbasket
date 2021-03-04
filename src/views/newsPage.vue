<template>
	<div class="mainPage">
		<router-view></router-view>
		<news-component />
	</div>
</template>

<script>
	import NewsComponent from "../components/newsComponent.vue"

	export default {
		name: "newsPage",
		components: { NewsComponent },
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
