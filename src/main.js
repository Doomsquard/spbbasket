import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/styles/index.scss"
import vuetify from "./vuetify"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	store,
	render: (h) => h(App),
}).$mount("#app")
