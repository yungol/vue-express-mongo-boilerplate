<template lang="pug">

	span.nav-item(v-if="me")
		.dropdown.is-right(v-bind:class="{ 'is-active' : isActive }")
			.dropdown-trigger
				button.button.is-primary(aria-haspopup='true', aria-controls='dropdown-menu' @click="activar")
					span {{ me.fullName }}
					span.icon.is-small
						i.fa.fa-angle-down(aria-hidden='true')
			.dropdown-menu
				.dropdown-content
					a.dropdown-item(href='#/profile')
						| Perfil
					a.dropdown-item(href='#/settings')
						| Preferencias
					hr.dropdown-divider
					a.dropdown-item(href='/logout')
						| Salir

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		computed: mapGetters("session", [
			"me"
		]),

		components: {
			
		},

		data() {
			return {
				expandedUserMenu: false,
				isActive: false
			};
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