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
                inicio: "Inicio de la Aplicacion",
                devices: "Devices de la Aplicación",
                posts: "Post de la Aplicación",
                counter: "Contador de la Aplicación",
                diagnostico: "Diagnostico de la Aplicación"
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