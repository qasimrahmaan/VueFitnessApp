import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "Main",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Main.vue"),
	},
	{
		path: "/SignUp",
		name: "SignUp",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
	},
	{
		path: "/Login",
		name: "Login",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Login.vue"),
	},
	{
		path: "/DietPlan",
		name: "DietPlan",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/DietPlan.vue"),
	},
	{
		path: "/ExercisePlan",
		name: "ExercisePlan",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/ExercisePlan.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
