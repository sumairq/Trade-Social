import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomeView.vue";
import AboutPage from "@/pages/AboutView.vue";
import FaqPage from "@/pages/FaqView.vue";
import LoginPage from "@/pages/LoginView.vue";
import RegisterPage from "@/pages/RegisterView.vue";
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
	{
		path: "/faq",
		name: "Faq",
		component: FaqPage,
	},
	{
		path: "/login",
		name: "Login",
		component: LoginPage,
	},
	{
		path: "/register",
		name: "Register",
		component: RegisterPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
