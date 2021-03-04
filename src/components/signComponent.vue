<template>
	<div class="container">
		<div class="startComponent">
			<p class="startComponent__title">SPBBASKET</p>

			<div class="startComponent__container" @submit.prevent="submitForm">
				<v-form ref="form" class="startComponent__form">
					<p class="startComponent__form__title">{{ setSignText.title }}</p>
					<v-text-field
						v-show="switchUnputsForm"
						v-model.trim="form.firstname"
						:rules="nameRules"
						type="text"
						class="startComponent__form__input email"
						label="Имя"
					></v-text-field>
					<v-text-field
						v-show="switchUnputsForm"
						v-model.trim="form.lastname"
						:rules="lastnameRules"
						type="text"
						class="startComponent__form__input email"
						label="Фамилия"
					></v-text-field>
					<v-text-field
						v-model.trim="form.email"
						:rules="emailRules"
						type="text"
						class="startComponent__form__input email customColor"
						label="Email"
					></v-text-field>

					<v-text-field
						v-model.trim="form.password"
						type="password"
						class="startComponent__form__input password"
						label="Пароль"
						:rules="passwordRules"
					></v-text-field>
					<v-text-field
						v-show="switchUnputsForm"
						v-model.trim="form.passwordVerif"
						type="password"
						class="startComponent__form__input password"
						label="Повторить пароль"
						:rules="passwordVerifRules"
					></v-text-field>
					<div :class="setSwitchStyle" class="startComponent__form__select ">
						<v-btn
							type="submit"
							outlined
							color="indigo"
							class="ma-2 startComponent__form__select__button"
						>
							{{ setSignText.buttonForm }}
						</v-btn>

						<p class="startComponent__form__select__switch" @click="switchForm">
							{{ setSignText.setSwitchForm }}
						</p>
					</div>
				</v-form>
			</div>
			<div class="startComponent__foter">
				<a>
					<img src="../assets/img/footer_vk.svg" alt="vk icon" />
				</a>
				<a>
					<img src="../assets/img/footer_mail.svg" alt="mail icon" />
				</a>
			</div>
		</div>
		<div class="rightSide">
			<img src="../assets/img/orig_bg.jpg" alt="basketball hoop" />
		</div>
	</div>
</template>

<script>
	const { required, minLength, email } = require("vuelidate/lib/validators")

	const { validationMixin } = require("vuelidate")
	export default {
		mixins: [validationMixin],

		name: "signComponent",
		data() {
			return {
				switch: false,
				nameRules: [(v) => !!v || "Обязательное поле"],
				lastnameRules: [(v) => !!v || "Обязательное поле"],
				passwordRules: [(v) => (v && v.length > 7) || "Пароль должен быть > 8 символов"],
				passwordVerifRules: [(v) => v === this.form.password || "Пароли не совпадают"],
				emailRules: [
					(v) => !!v || "Обязательное поле",
					(v) => /.+@.+\..+/.test(v) || "Емейл не валидный",
				],
				form: {
					passwordVerif: "",
					firstname: "",
					lastname: "",
					email: "",
					password: "",
				},
			}
		},
		validations: {
			form: {
				firstname: {
					required,
				},
				lastname: {
					required,
				},
				password: {
					required,
					minLength: minLength(8),
				},
				email: {
					required,
					email,
				},
			},
		},

		methods: {
			switchForm() {
				this.switch = !this.switch
				this.form.email = ""
				this.form.password = ""
				this.form.firstname = ""
				this.form.lastname = ""
				this.form.passwordVerif = ""
				this.switch ? this.$router.push({ name: "signup" }) : this.$router.push({ name: "signin" })
			},
			submitForm() {
				this.$v.form.$touch()
				this.$refs.form.validate()

				if (!this.switch) {
					!this.$v.form.email.$error && !this.$v.form.password.$error
						? console.log("success")
						: console.log("fail")
				} else {
					!this.$v.form.email.$error &&
					!this.$v.form.password.$error &&
					!this.$v.form.firstname.$error &&
					!this.$v.form.lastname.$error &&
					this.form.password === this.form.passwordVerif
						? console.log("success")
						: console.log("fail")
				}
				this.form.email = ""
				this.form.password = ""
				this.form.firstname = ""
				this.form.lastname = ""
				this.form.passwordVerif = ""
			},
		},
		created() {
			this.$router.history.current.name === "signup" ? (this.switch = true) : (this.switch = false)
		},

		computed: {
			setSignText() {
				if (!this.switch) {
					return {
						title: "Вход",
						buttonForm: "Войти",
						setSwitchForm: "Не зарегистрированы?",
					}
				} else {
					return {
						title: "Регистрация",
						buttonForm: "Зарегистрироваться",
						setSwitchForm: "Уже зарегистрированы? Войти",
					}
				}
			},

			setSwitchStyle() {
				return this.switch ? "column center" : "row"
			},
			switchUnputsForm() {
				return this.switch ? true : false
			},
		},
	}
</script>

<style scoped lang="scss">
	.container {
		max-height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
	}
	.rightSide {
		width: 100%;
		max-height: 100vh;
		opacity: 0.7;
		img {
			object-fit: cover;
			max-height: 100vh;
		}
	}

	.startComponent {
		background-color: #fafafa;
		position: relative;
		min-width: 700px;
		max-height: 100vh;
		display: flex;
		&__foter {
			position: absolute;
			top: 90%;
			left: 210px;
			a {
				margin: 25px;
				cursor: pointer;
				img {
					width: 50px;
				}
			}
		}

		&__title {
			position: absolute;
			right: 100px;
			top: 150px;
			font-size: 40px;
			font-family: "Bebas Neue", cursive;
			opacity: 0.8;
		}
		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 100%;
			min-height: 100vh;
			flex-direction: column;
		}
		&__form {
			background-color: rgb(150, 150, 146, 0.1);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			border-radius: 10px;

			&__title {
				margin-top: 15px;
			}

			&__input {
				padding: 0 40px;
				margin: 15px 0;
			}
			&__select {
				display: flex;
				margin-bottom: 15px;
				&__button {
					width: fit-content;
					height: 8px;
				}
				&__switch {
					margin: 0 10px;
					align-self: flex-end;
					cursor: pointer;
					opacity: 0.7;
					&:hover {
						opacity: 1;
					}
				}
			}
		}
		.email {
			margin-top: 30px;
		}
	}
	.column {
		flex-direction: column;
	}
	.center {
		justify-content: center;
		align-items: center;
	}
	.row {
		flex-direction: row;
	}

	@media (max-width: 700px) {
		.rightSide {
			display: none;
		}
		.startComponent {
			position: relative;
			right: 150px;
			min-width: none;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			&__title {
				position: absolute;
				top: 40px;
				right: 200px;
			}
			&__foter {
				margin: 25px;
				a {
					cursor: pointer;
					img {
						width: 50px;
					}
				}
			}
		}
	}
	@media (max-width: 1370px) {
		.container {
			min-width: 100%;
		}
		.rightSide {
			display: none;
		}
		.startComponent {
			width: 100vw;
			height: 100vh;
			&__foter {
				a {
					margin: 25px;
					cursor: pointer;
					img {
						width: 50px;
					}
				}
			}
		}
	}
</style>
