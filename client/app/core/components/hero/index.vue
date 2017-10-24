<template lang="pug">
    section.hero.is-dark
        .hero-body
            h1.title
                | {{heroTitulo}}
            h2.subtitle
                | {{heroSubtitulo}}
</template>

<script>
export default {
    data() {
        return {
            titulos:{
                inicio: "Inicio",
                devices: "Devices",
                posts: "Post",
                counter: "Contador",
                diagnostico: "Diagnostico"
            },
            subtitulos: {
                inicio: "Subtitulo de Inicio",
                devices: "Subtitulo de Devices",
                posts: "Subtitulo de Posts",
                counter: "Subtitulo de Counter",
                diagnostico: "Subtitulo de Diagnostico"
            }
        };
    },
    computed: {
        heroTitulo () {
            return this.titulos[this.$route.name] 
        },
        heroSubtitulo () {
            return this.subtitulos[this.$route.name]
        }
    }
};
</script>

<style lang="scss">

</style>