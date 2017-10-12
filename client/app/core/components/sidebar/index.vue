<template lang="pug">
	.column.is-one-third-tablet.is-2-desktop
		aside.menu
			p.menu-label 
				| {{ "General" | i18n }}
			ul.menu-list
				router-link(tag="li", to="/")
					a(:title="_('Home')" v-bind:class="{ 'is-active' : activo('inicio') }")
						| {{ "Inicio" | i18n }}

				router-link(tag="li", to="/counter")
					a(:title="_('Demo')" v-bind:class="{ 'is-active' : activo('counter') }")
						| {{ "Demo" | i18n }}

				router-link(tag="li", to="/devices")
					a(:title="_('Devices')" v-bind:class="{ 'is-active' : activo('devices') }") 
						| {{ "Devices" | i18n }}

				router-link(tag="li", to="/posts")
					a(:title="_('Posts')" v-bind:class="{ 'is-active' : activo('posts') }") 
						| {{ "Posts" | i18n }}

				router-link(tag="li", to="/diagnostico")
					a(:title="_('Diagnostico')" v-bind:class="{ 'is-active' : activo('diagnostico') }")
						| {{ "Diagnostico" | i18n }}

			p.menu-label 
				| {{ "Perfil" | i18n }}
			ul.menu-list
				li
					a(href="/logout", :title="_('Logout')")
						| {{ "Salir" | i18n }}

</template>

<script>
	export default {
	methods: {
		activo(a) {
			if (this.$route.name === a) {
				return true
			} else {
				return false
			}
		}

	}
};
	
</script>

<style lang="scss">
</style>