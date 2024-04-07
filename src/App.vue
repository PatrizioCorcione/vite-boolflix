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
    
        store.counterLoader++
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
        store.counterLoader++;
        
      })
    },
    getApiAllGen(type){
      store.gen=[]
      axios.get(this.store.apiUrlGen+type+'/list',{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          language:'it-IT',
        }
      })
      .then(result =>{
        result.data.genres.forEach(element => {
          if (!store.gen.includes(element)) {
            store.gen.push(element)
          }
        });
      })
    },
    getApiGen(type){
      axios.get(this.store.apiUrlPop+'discover/' + type,{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          query: store.inputSearch,
          with_genres:store.genSelected,
          language:'it-IT',

        }
      })
      .then(result =>{
        store[type] = result.data.results;
        store.counterLoader++
        
        console.log(store[type]);
      })

    },
    getApiCast(type){
      axios.get(this.store.apiUrlPop+ type+'/'+ store.movieId + '/credits',{
        params:{
          api_key:'926a534a33faeeafba160ec28ae8a506',
          movie_id:store.movieId,
         

        }
      })
      .then(result =>{
        store.cast = result.data.results;
        store.counterLoader++
        
        console.log(store.cast);
      })
      .catch(error =>{
        
      })

    },
  }, 
  mounted() {
    
    this.getApiPopular('movie')
    this.getApiAllGen('movie')
  }, 
}
</script>

<template>
  <Header
   @startPopular="getApiPopular('movie')"
   @startPopularTv="getApiPopular('tv')"
   @startSearch="getApi('movie'),getApi('tv')"
   @searchGenMovie=" getApiAllGen('movie')"
   @searchGenTv=" getApiAllGen('tv')"
   @searchCast=" getApiCast('movie')"
   @searchGen="getApiGen('movie'),getApiGen('tv')"
   />
  <Main/>
  <Footer/>
</template>

<style lang="scss">

@import './assets/scss/main.scss';

</style>
