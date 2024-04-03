<script>
import axios from 'axios';
import {store} from './store';
import Header from "../src/components/Header.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";

export default{
  components:{
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      store,
    };
    
  },
  methods: {
    getApi(){
      axios.get(this.store.apiUrlMovie,{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          query: store.inputSearch,
          language:'it-IT',

        }
      })
      .then(result =>{
        store.movieList = result.data.results;
        console.log(store.movieList);
        
        
      })
    },
    getApiSeries(){
      axios.get(this.store.apiUrlSeries,{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          query: store.inputSearch,
          language:'it-IT',

        }
      })
      .then(result =>{
        store.seriesList = result.data.results;
        console.log(store.seriesList);
        
        
      })
    },
  }, 
  mounted() {
    this.getApi()
    this.getApiSeries()

  }, 
}
</script>

<template>

  

  <Header @startSearch="getApi(),getApiSeries()"/>
  <Main/>
  <Footer/>

  
  
</template>

<style lang="scss">

@import './assets/scss/main.scss';

</style>
