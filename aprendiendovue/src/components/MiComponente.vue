<template>
<section id="mi-componente" >
    <h2 class="subheader">{{titulo}}</h2>
    <hr/>
    <h1>Este es MI COMPONENTE</h1>
    <h2> {{subtitulo}} </h2>
    <hr/>

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    El nombre ingresado es <strong>{{nombre}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es: <strong>{{edad}}</strong>

    <p class="alert-success-provisional" v-if="edad && edad >= 18"> Eres mayor de edad </p>
    <p class="alert-danger-provisional" v-else> Eres menor de edad </p>

    <h2>Directiva iterativa</h2>
    <ol>
        <li v-for="anime in animes" :key="anime">{{anime}}</li>
    </ol>

</section>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
            return {
                titulo: 'Mi componente',
                subtitulo: 'soy el subtitulo de mi componente',
                nombre: '',
                edad: '20',
                animes: ['Parasyte', 'Ataque de los titanes', 'Full metal alchemist']
                }
        }
}
</script>