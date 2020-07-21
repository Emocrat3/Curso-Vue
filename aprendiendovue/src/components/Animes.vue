<template>
     <section id="content">
                <h2 class="subheader">Animes</h2>

                <!--LISTADO ARTICULOS-->
                <div id="articles">
                    <article class="article-item" v-for="anime in animes" v-bind:key="anime.title">
                        <div class = "image-wrap">
                            <img :src="anime.image" :alt="anime.title" :title="anime.title" />
                        </div>

                        <h2>{{anime.title}}</h2>

                        <span class="date" v-bind:class="{
                           yeargreen: anime.year >= 2015,
                           yearred: anime.year < 2015,
                        }">
                           {{anime.year}}
                        </span>
                        <a href="#">Leer mas</a>

                        <div class="clearfix"></div>
                    </article>
                    
                    


                </div>
                
            </section>

</template>

<script>
export default {
    name: 'Animes',
    data(){
        return {
            animes: [
                {title: 'Parasyte 1', year:2015, image: "https://www.alfabetajuega.com/wp-content/uploads/2020/01/anime-770x433.jpg"},
                {title: 'Parasyte 2', year:2015, image: "https://www.alfabetajuega.com/wp-content/uploads/2020/01/anime-770x433.jpg"},
                {title: 'Parasyte 3', year:2015, image: "https://www.alfabetajuega.com/wp-content/uploads/2020/01/anime-770x433.jpg"}
            ]
        }
    }
}
</script>