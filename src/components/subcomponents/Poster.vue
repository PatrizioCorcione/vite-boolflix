<script>
// import {store} from '../store';
export default {
  data(){
    return{
      

    }
    
  },
  props:{
    OriginalTitle:String,
    Title:String,
    Desc:String,
    Language:String,
    Rating:Number,
    ImgPath:String
  },
  methods: {
    starRating(rate){
      const rateInt = Math.ceil(rate)
      const starArray = []
      for (let i = 0; i < 5; i++) {
        if (i < rateInt/2) {
          starArray.push('<i class="fa-solid fa-star"></i>')
        }else{
          starArray.push('<i class="fa-regular fa-star"></i>')
        }
      }
      return starArray.join('');
    }
  },
}


</script>

<template>

<div class="card position-relative ">
  <img
  v-if="this.ImgPath!==null"
  :src="`https://image.tmdb.org/t/p/w342${ ImgPath }`"
  class="card-img-top" alt="...">
  <img
  v-else
  src="../../assets/img/errore-404-pagina-non-trovata.jpg" alt="">
  <div class="card-body position-absolute">
    <h5 class="card-title">Titolo originale: {{OriginalTitle}}</h5>
    <h5 class="card-title">{{Title}}</h5>
    <p
    v-if="this.Language == 'it'"
    class="card-text text-center ">
    <img src="../../assets/img/it.png" alt="">
    </p>
    <p
    v-else-if="this.Language == 'en'"
    class="card-text text-center ">
    <img src="../../assets/img/en.png" alt="">
    </p>
    <p v-else>Lingua originale: {{Language}}</p>
    <p class="card-text">{{Desc}}</p>
    <p v-html="starRating(Rating)"></p>
  </div>
</div>
  
</template>



<style lang="scss" scoped>
.card{ 
  
  overflow: hidden;
  img{
    height: 480px;
  }
  &:hover .card-body{
    top: 0;
   
  }
  height: 560px;
  .card-body{
    
    top: 100%;
    transition: all 2s;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.566);
    img{
      width: 70px;
      height: 40px;
    }
  }
}


</style>