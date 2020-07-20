<template>
<div id="mi-componente" >
    <h1>Este es MI COMPONENTE</h1>
    <h2> {{subtitulo}} </h2>
</div>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
            return {
                subtitulo: 'soy el subtitulo de mi componente'
                }
        }
}
</script>