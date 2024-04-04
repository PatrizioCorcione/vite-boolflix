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
      const rateInt = rate
      const starArray = []
      const hasHalfStar = rate % 1 !== 0;
      for (let i = 0; i < 5; i++) {
        if (i < rateInt/2) {
          starArray.push('<i class="fa-solid fa-star"></i>')
        }else if (hasHalfStar) {
          starArray.push('<i class="fa-regular fa-star-half-stroke"></i>')
        }
        else{
          starArray.push('<i class="fa-regular fa-star"></i>')
        }
      }
      return starArray.join('');
    }
  },
}


</script>

<template>

<div class="card position-relative rounded-0 border-0 ">
  <img
  v-if="this.ImgPath!==null"
  :src="`https://image.tmdb.org/t/p/w342${ ImgPath }`"
  class="card-img-top rounded-0 " alt="...">
  <img
  v-else
  src="../../assets/img/errore-404-pagina-non-trovata.jpg" alt="">
  <div class="card-body position-absolute">
    <h5 class="card-title">Titolo originale: {{OriginalTitle}}</h5>
    <h5 class="card-title">{{Title}}</h5>
    <p
    v-if="this.Language == 'it'"
    class="card-text text-center m-0 ">
    <img src="../../assets/img/pngeggita.png" alt="">
    </p>
    <p
    v-else-if="this.Language == 'en'"
    class="card-text text-center m-0">
    <img src="../../assets/img/pngeggeng.png" alt="">
    </p>
    <p
    v-else-if="this.Language == 'ja'"
    class="card-text text-center m-0 ">
    <img src="../../assets/img/pngeggjap.png" alt="">
    </p>
    <p
    v-else-if="this.Language == 'fr'"
    class="card-text text-center m-0">
    <img src="../../assets/img/pngeggfr.png" alt="">
    </p>
    <p
    v-else-if="this.Language == 'de'"
    class="card-text text-center m-0">
    <img src="../../assets/img/pngegg.png" alt="">
    </p>
    <p v-else>Lingua originale: {{Language}}</p>
    <p class="text-center m-0 " v-html="starRating(Rating)"></p>
    <div class="scrolling">
      <p class="card-text">{{Desc}}</p>
    </div>
    
  </div>
</div>
  
</template>



<style lang="scss" scoped>
.card{ 
  padding: 0px 0px 0px 30px;
  margin: 10px 0px;
  background-color: #141414;
  overflow: hidden;
 
  &:hover .card-body{
    top: 0;
   
  }
  
  .card-body{
    
    top: 100%;
    transition: all 2s;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.566);
    img{
      width: 20%;
      height: 20%;
    }
    .scrolling{
      height: 200px;
      overflow: auto;
    }
  }
}


</style>