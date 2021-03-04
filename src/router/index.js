import Vue from "vue"
import VueRouter from "vue-router"
import startPage from "../views/startPage.vue"
import signPage from "../views/signPage"
import newsPage from "../views/newsPage"
import statisticPage from "../views/statisticPage"
import mapPage from "../views/mapPage"
import commandPage from "../views/commandPage"
import profilePage from "../views/profilePage"

import header from "../components/headerComponent"

Vue.use(VueRouter)

const headerComponent = (name) => {
	return { path: "", name: name, component: (resolve) => resolve(header) }
}

const routes = [
	{
		path: "/home",
		component: startPage,
		children: [headerComponent("headerHome")],
	},
	{
		path: "/signin",
		name: "signin",
		component: signPage,
	},
	{
		path: "/signup",
		name: "signup",
		component: signPage,
	},
	{
		path: "/news",
		component: newsPage,
		children: [headerComponent("headerNews")],
	},
	{
		path: "/stats",
		component: statisticPage,
		children: [headerComponent("headerStats")],
	},
	{
		path: "/map",
		component: mapPage,
		children: [headerComponent("headerMap")],
	},
	{
		path: "/command",
		component: commandPage,
		children: [headerComponent("headerCommand")],
	},
	{
		path: "/profile",
		component: profilePage,
		children: [headerComponent("headerProfile")],
	},

	{
		path: "*",
		redirect: { path: "/home" },
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

export default router
