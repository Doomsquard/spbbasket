<template>
	<div class="mainPage">
		<router-view></router-view>
		<profile-component />
	</div>
</template>

<script>
	import profileComponent from "../components/profileComponent.vue"

	export default {
		components: { profileComponent },
		name: "profilePage",
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
