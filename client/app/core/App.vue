<template lang="pug">
	div
		page-header(:toggle-sidebar="toggleSidebar")

		hero

		section.section
			.columns
				sidebar
				router-view(keep-alive)

		// section.app-main(:class="{ miniSidebar: miniSidebar }")
			router-view(keep-alive)

	// a(href="https://github.com/icebob/vue-express-mongo-boilerplate")
		img(style="position: absolute; top: 0; left: 0; border: 0; z-index:2000", src="https://camo.githubusercontent.com/8b6b8ccc6da3aa5722903da7b58eb5ab1081adee/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6f72616e67655f6666373630302e706e67", alt="Fork me on GitHub", data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png")
</template>

<script>
	import Vue from "vue";

	import PageHeader from "./components/header/index";
	import Hero from "./components/hero/index";
	import Sidebar from "./components/sidebar/index";

	import Service from "./service";

	import { mapActions, mapGetters } from "vuex";

	export default {

		/**
		 * Create websocket connection to the root namespace
		 */		
		//mixins: [ MixinsIO() ],

		/**
		 * Load sub-components
		 */
		components: {
			PageHeader,
			Sidebar,
			Hero
		},

		/**
		 * Create app data object
		 * 
		 * TODO: move to vuex state
		 */
		data() {
			return {
				wsReconnecting: false
			};
		},

		watch: {
			$lng() {
				console.log("Language updated");
				this.update(this);
			}
		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {

			events: {
				/**
				 * Send welcome message after connect
				 */
				connect() {
					console.log("Websocket connected to " + this.$socket.nsp);

					if (this.wsReconnecting)
						// Reload browser if connection established after disconnect
						window.location.reload(true);
					else
						this.$socket.emit("welcome", "Hello! " + navigator.userAgent);
				},

				disconnect() {
					console.log("Websocket disconnected from " + this.$socket.nsp);
					this.wsReconnecting = true;
				},

				error(err) {
					console.error("Websocket error!", err);
				}
			}
		},

		methods: {
			...mapActions("session", [
				"getSessionUser"
			]),

			update: function(vm) {
				if (vm == null)
					return;
				
				let i = vm._watchers.length;
				while (i--)
					vm._watchers[i].update(true);
				
				let children = vm.$children;
				i = children.length;
				while (i--)
					this.update(children[i]);
			}
		},

		/**
		 * Application created
		 */
		created() {
			console.log("App started!");
			window.app = this;

			this.getSessionUser();

			// debug
			window.postService = new Service("posts", this);
			window.counterService = new Service("counter", this);
			window.deviceService = new Service("device", this);
			
		}
	};
</script>

<style lang="scss">
	@import "../../scss/style.scss";

</style>