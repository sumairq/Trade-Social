import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomeView.vue";
import AboutPage from "@/pages/AboutView.vue";
const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{
		path: "/about",
		name: "About",
		component: AboutPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
