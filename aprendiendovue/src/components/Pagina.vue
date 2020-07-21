<template>
    <section id="content">
        <h2 class="subheader">Pagina</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirBlog()">Ir al blog</button>

        <h4>{{nombre}}</h4>
    </section>
</template>

<script>
export default {
    name: 'Pagina',


    mounted(){
        this.id_desde_url = this.$route.params.id;
    },
    data(){
        return{
        id_desde_url: null,
        nombre: 'Arthuro'
        }
    },
    methods: {
    actualizarNombre(){
        this.nombre = 'Ali';
    }, 
    redirigirBlog(){
        this.$router.push('/blog');
     }
    }
}
</script>