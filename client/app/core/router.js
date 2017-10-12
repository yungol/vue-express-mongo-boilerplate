"use strict";

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../modules/home";
import Counter from "../modules/counter";
import Devices from "../modules/devices";
import Posts from "../modules/posts";
import Profile from "../modules/profile";
import Diagnostico from "../modules/diagnostico";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [
		{ path: "/", component: Home, name: 'inicio' },
		{ path: "/devices", component: Devices, name:'devices' },
		{ path: "/posts", component: Posts, name: 'posts' },
		{ path: "/counter", component: Counter, name: 'counter' },	
		{ path: "/profile", component: Profile, name: 'profile' },
		{ path: "/diagnostico", component: Diagnostico, name: 'diagnostico' }
		// { path: "/users", component: User, meta: { needRole: "admin" } },
		//{ path: "*", component: NotFound }
	]
});