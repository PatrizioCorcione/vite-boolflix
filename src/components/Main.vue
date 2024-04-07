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
  <span
 v-if="store.counterLoader==1"
  class="loader"></span>
  
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
.loader {
  left: 47%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #ff0000 #ff0000 transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #ffffff #fffdfd;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 70px;
  height: 70px;
  border-color: #ff0000 #ff0000 transparent transparent;
  animation: rotation 1.5s linear infinite;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
    
</style>