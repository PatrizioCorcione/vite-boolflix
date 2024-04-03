<script>
// import {store} from '../store';
export default {
  data(){
    return{
      

    }
    
  },
  props:{
        MovieOriTitle:String,
        MovieTitle:String,
        MovieDesc:String,
        MovieLanguage:String,
        MovieRating:String
      }
}


</script>

<template>

<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Titolo originale: {{MovieOriTitle}}</h5>
    <h5 class="card-title">Titolo: {{MovieTitle}}</h5>
    <p class="card-text">{{MovieDesc}}</p>
    <p
    v-if="this.MovieLanguage == 'it'"
    class="card-text">Lingua originale: {{MovieLanguage}}
    <img src="../../assets/img/it.png" alt="">
    </p>
    <p
    v-if="this.MovieLanguage == 'en'"
    class="card-text">Lingua originale: {{MovieLanguage}}
    <img src="../../assets/img/en.png" alt="">
    </p>
    <p v-else>Lingua originale: {{MovieLanguage}}</p>
    <p class="card-text">Voto: {{MovieRating}}</p>
  </div>
</div>
  
</template>



<style lang="scss" scoped>
img{
  width: 50px;
  height: 20px;
}
</style>