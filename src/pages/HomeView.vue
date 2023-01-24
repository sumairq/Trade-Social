<template>
	<div>
		<exchange-hero />
		<exchange-list :exchanges="exchanges" />
		<button @click="$store.dispatch('test', { arg1: 'some string here' })">
			Test vuex
		</button>
		<exchange-pagination />
	</div>
</template>

<script>
import ExchangeList from "@/components/ExchangeList.vue";
import ExchangePagination from "@/components/ePagination.vue";
import ExchangeHero from "@/components/eHero.vue";
export default {
	components: {
		ExchangeList,
		ExchangePagination,
		ExchangeHero,
	},
	computed: {
		exchanges() {
			return this.$store.state.exchange.items;
		},
	},

	created() {
		this.$store.dispatch("exchange/getExchanges");
	},
};
</script>
