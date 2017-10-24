<template lang="pug">
	.container
		.profile.flex.row.align-stretch
			img.avatar(:src="profile.avatar")
			
			.details.flex-item-1
				.name {{ profile.fullName }}
					span.text-muted.username ({{ profile.username }})

				.tags
					.tag.primary !Role name!
					.tag.danger !Administrator!
					.tag.success !Online!

				.description
					.info-row(v-if="profile.profile && profile.profile.location")
						i.fa.fa-map-marker
						span.caption Location:
						span.value {{ profile.profile.location }}

					.info-row
						i.fa.fa-clock-o
						span.caption Last login:
						span.value !Online!
					.info-row
						i.fa.fa-calendar
						span.caption Joined:
						span.value {{ profile.createdAt | ago }}							

				hr.full
		pre(v-html="this.$options.filters.prettyJSON(profile)")

</template>

<script>
	import Service from "../../core/service";

	import { mapGetters, mapActions } from "vuex";

	export default {
		computed: mapGetters("profile", [
			"profile"
		]),

		methods: {
			...mapActions("profile", [
				"getProfile"
			])
		},

		created() {
			this.$service = new Service("profile", this); 
			
			// Get my profile
			this.getProfile(); 
		}
	};

</script>

<style lang="scss" scoped>

</style>