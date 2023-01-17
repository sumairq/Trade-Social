<template>
	<div>
		<ExchangeNavbar
			v-bind:title="brandName"
			v-bind:items="menuItems"
		/>
		<div :class="$route.path !== '/' ? 'page-wrapper' : ''">
			<router-view />
		</div>
	</div>
</template>

<script>
import ExchangeNavbar from "@/components/eNavbar.vue";

export default {
	name: "App",
	components: { ExchangeNavbar },
	data() {
		return {
			brandName: "Trade Social",
			menuItems: [
				{ text: "Home", link: "/" },
				{ text: "About", link: "/about" },
				{ text: "Faq", link: "/faq" },
				{ text: "Login", link: "/login" },
				{ text: "Register", link: "/register" },
			],
		};
	},
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
</style>
