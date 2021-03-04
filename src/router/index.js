import Vue from "vue"
import VueRouter from "vue-router"
import startPage from "../views/startPage.vue"
import signPage from "../views/signPage"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "startPage",
		component: startPage,
	},
	{
		path: "/signin",
		name: "signin",
		component: signPage,
		// // route level code-splitting
		// // this generates a separate chunk (about.[hash].js) for this route
		// // which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/signup",
		name: "signup",
		component: signPage,
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

export default router
