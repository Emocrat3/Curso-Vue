<template>
     <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>

                <!--LISTADO ARTICULOS-->
                <div id="articles">
                    <article class="article-item" id="article-template">
                        <div class = "image-wrap">
                            <img src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_600x600.jpg?ext=.jpg" alt="Waffles" />
                        </div>

                        <h2>Waffle con sirop</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer mas</a>

                        <div class="clearfix"></div>
                    </article>
                    <!--AÑADIR ARTICULOS VIA JS -->


                </div>
                
            </section>

</template>

<script>
export default {
    name: 'LastArticles'
}
</script>