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
  },
  methods: {
    takeGener(array){
      let x = 0
      const genGeneration = []
      for (let i = 0; i < store.gen.length; i++) {
        if (array[x] == store.gen[i].id) {
          genGeneration.push(store.gen[i].name)
          x++
        }
        
      }
      return genGeneration.join(' ')

    }
   
  },
}
</script>

<template>
<main>
  
  <div class="container">
    <h1>Film</h1>
    <div class="row row-cols-4 ">
    
    <Poster
    v-for="movie in store.movie"
      :key="movie.id"
      :Title = movie.title
      :gener="takeGener(movie.genre_ids)"
      :Desc = movie.overview
      :Language = movie.original_language
      :Rating = movie.vote_average
      :ImgPath = movie.poster_path
    />
    </div>
  </div>
  

<div class="container">
  <h1>Serie tv</h1>
  <div class="row row-cols-4 ">
    
    <Poster
    v-for="serie in store.tv"
    :key="serie.id"
    :Title = serie.name
    :Desc = serie.overview
    :Language = takeGener(serie.genre_ids)
    :Rating = serie.vote_average
    :ImgPath = serie.poster_path
    />
    
  </div>
</div>
<div class="container">
    
    <div class="row row-cols-4 ">
      
      <Poster
      v-for="moviepop in store.popularList"
      :key="moviepop.id"
      :OriginalTitle = moviepop.original_title
      :Title = moviepop.title
      :Desc = moviepop.overview
      :Language = moviepop.original_language
      :Rating = moviepop.vote_average
      :ImgPath = moviepop.poster_path
      />
     
    </div>
  
</div>
</main>

    
</template>



<style lang="scss" scoped>
main{
  background-color: #141414;
  padding-top: 120px;
}
h1{
  padding-top:20px ;
  text-align: center;
  color: rgb(211, 5, 5);
}
</style>