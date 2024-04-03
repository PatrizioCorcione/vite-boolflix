<script>
import {store} from '../store';
import Poster from './subcomponents/Poster.vue';
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    Poster
  }
}
</script>

<template>

<div class="containe">
  <h1>Movie</h1>
  <div class="row row-cols-4 ">
    
    <Poster
    v-for="movie in store.movieList"
    :key="movie.id"
    :OriginalTitle = movie.original_title
    :Title = movie.title
    :Desc = movie.overview
    :Language = movie.original_language
    :Rating = movie.vote_average
    :ImgPath = movie.poster_path
    />
    
  </div>
</div>
<div class="containe">
  <h1>Series</h1>
  <div class="row row-cols-4 ">
    
    <Poster
    v-for="serie in store.seriesList"
    :key="serie.id"
    :OriginalTitle = serie.original_name
    :Title = serie.name
    :Desc = serie.overview
    :Language = serie.original_language
    :Rating = serie.vote_average
    :ImgPath = serie.poster_path
    />
    
  </div>
</div>
    
</template>



<style lang="scss" scoped>

</style>