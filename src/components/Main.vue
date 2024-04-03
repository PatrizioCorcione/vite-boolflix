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
    :MovieOriTitle = movie.original_title
    :MovieTitle = movie.title
    :MovieDesc = movie.overview
    :MovieLanguage = movie.original_language
    :MovieRating = movie.vote_average.toFixed(1)
    />
    
  </div>
</div>
<div class="containe">
  <h1>Series</h1>
  <div class="row row-cols-4 ">
    
    <Poster
    v-for="serie in store.seriesList"
    :key="serie.id"
    :MovieOriTitle = serie.original_name
    :MovieTitle = serie.name
    :MovieDesc = serie.overview
    :MovieLanguage = serie.original_language
    :MovieRating = serie.vote_average.toFixed(1)
    />
    
  </div>
</div>
    
</template>



<style lang="scss" scoped>

</style>