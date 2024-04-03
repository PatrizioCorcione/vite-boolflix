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
  <div class="row row-cols-4 ">

    <Poster
    v-for="movie in store.movieList"
    :key="movie.id"
    :MovieOriTitle = movie.original_title
    />
    
  </div>
</div>
    
</template>



<style lang="scss" scoped>

</style>