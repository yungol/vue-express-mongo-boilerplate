<template lang="pug">
	nav.navbar
		.navbar-brand
			logo
			
			.navbar-burger.burger(data-target='navMenubd-example' @click="activar" v-bind:class="{ 'is-active' : isActive }")
				span
				span
				span

		.navbar-menu(v-bind:class="{ 'is-active' : isActive }")
			.navbar-end
				user-box

		

</template>

<script>
	import Logo from "./logo";
	import UserBox from "./user-box";

	export default {
		components: {
			Logo,
			UserBox
		},

		props: [
			"toggleSidebar"
		],

		data() {
			return {
				isActive: false
			}
		},
		methods: {
			activar() {
				if (this.isActive === true) {
					this.isActive = false
				} else {
					this.isActive = true
				}
			}
		}

	};
	
</script>

<style lang="scss">
</style>