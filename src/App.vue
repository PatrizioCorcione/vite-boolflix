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
    getApi(type){
      axios.get(this.store.apiUrl + type,{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          query: store.inputSearch,
          language:'it-IT',

        }
      })
      .then(result =>{
        store[type] = result.data.results;
        
        
      })
    },
    getApiPopular(type){
      axios.get(this.store.apiUrlPop + type + '/popular',{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          language:'it-IT',

        }
      })
      .then(result =>{
        store[type] = result.data.results;
        ;
      })
    },
  }, 
  mounted() {
    this.getApi('movie')
    this.getApi('tv')
    this.getApiPopular('movie')
    this.getApiPopular('tv')
    
  }, 
}
</script>

<template>
  <Header @startSearch="getApi('movie'),getApi('tv')"/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">

@import './assets/scss/main.scss';

</style>
