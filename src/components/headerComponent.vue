<template>
	<header class="headerComponent">
		<div class="headerComponent__leftSide">
			<div class="headerComponent__leftSide__dropMenu">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="primary" dark v-bind="attrs" v-on="on">
							<v-icon>toc</v-icon>
						</v-btn>
					</template>
				</v-menu>
			</div>
			<div headerComponent__logo>
				<p class="headerComponent__logo__text" @click="toHomePage">
					SPBBASKET
				</p>
			</div>
			<div class="headerComponent__nav">
				<v-btn-toggle tile color="deep-purple accent-3" group>
					<v-btn @click="toNewsPage">
						Новости
					</v-btn>

					<v-btn @click="toComandPage">
						Команды
					</v-btn>

					<v-btn @click="toStatsPage">
						Статистика
					</v-btn>

					<v-btn @click="toMapPage">
						Карта полей
					</v-btn>
				</v-btn-toggle>
			</div>
		</div>
		<div class="headerComponent__rightSide">
			<v-icon @click="activeSearch" class="headerComponent__rightSide__searchButton">search</v-icon>
			<v-text-field ref="inputSearch" v-model="searchInput"></v-text-field>
			<div class="headerComponent__rightSide__profile" @click="toProfilePage">
				<v-icon class="headerComponent__rightSide__profile__icon">perm_identity</v-icon>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "headerComponent",
		data() {
			return {
				searchInput: "",
			}
		},
		methods: {
			toProfilePage() {
				localStorage.getItem("token")
					? this.$router.push({ name: "headerProfile" }).catch(() => {})
					: this.$router.push({ path: "/signup" })
			},
			activeSearch() {
				this.$refs.inputSearch.focus()
			},
			toHomePage() {
				this.$router.push({ name: "headerHome" }).catch(() => {})
			},
			toNewsPage() {
				this.$router.push({ name: "headerNews" }).catch(() => {})
			},
			toStatsPage() {
				this.$router.history.current.path !== "/stats"
					? this.$router.push({ name: "headerStats" }).catch(() => {})
					: null
			},
			toComandPage() {
				this.$router.push({ name: "headerCommand" }).catch(() => {})
			},
			toMapPage() {
				this.$router.push({ name: "headerMap" }).catch(() => {})
			},
		},
	}
</script>

<style lang="scss" scoped>
	//font-family: "Bebas Neue", cursive;
	.headerComponent {
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		height: 56px;
		justify-content: space-between;
		background: #fafafa;

		&__leftSide {
			&__dropMenu {
				display: none;
			}
			background-color: #fff;
			color: #6b778c;
			display: flex;
			align-items: center;
			background: #fafafa;
		}
		&__rightSide {
			display: flex;
			margin-right: 15px;
			&__searchButton {
				cursor: pointer;
				background: #fafafa;
			}
			&__profile {
				cursor: pointer;
				margin: 10px 10px 10px 40px;
				width: 40px;
				flex-shrink: 0;
				height: 40px;
				border-radius: 50%;
				background: rgba(107, 107, 107, 0.7);

				display: flex;
				justify-content: center;
				align-items: center;
				&:hover {
					background: rgba(107, 107, 107, 1);
				}
			}
		}
		&__logo {
			&__text {
				cursor: pointer;
				font-size: 2rem;
				margin-left: 50px;
				font-family: "Bebas Neue", cursive;
			}
		}
		&__nav {
			display: flex;
			margin-left: 30px;
		}
	}
	.headerComponent::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 100%;
		height: 4px;
		background: linear-gradient(
			180deg,
			rgba(9, 30, 66, 0.13) 0,
			rgba(9, 30, 66, 0.13) 1px,
			rgba(9, 30, 66, 0.08) 1px,
			rgba(9, 30, 66, 0) 4px
		);
	}
	@media (max-width: 950px) {
		.headerComponent {
			&__rightSide {
				display: none;
			}
		}
	}
	@media (max-width: 700px) {
		.headerComponent {
			&__leftSide {
				&__dropMenu {
					position: absolute;
					left: 10px;
					display: block;
					.v-btn:not(.v-btn--round).v-size--default {
						background-color: #fafafa;
						color: #6b778c;
					}
				}
			}
			justify-content: center;
			&__rightSide {
				display: none;
			}
			&__nav {
				display: none;
			}
			&__logo {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
