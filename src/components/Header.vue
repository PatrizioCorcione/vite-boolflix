<script>
import {store} from '../store';
export default {
  data(){
    return{
      store,
      
    }
  },
  methods: {
    resetCounteLoad(){
      store.counterLoader=0
    },
    checkSearch(){
      if (store.inputSearch === '') {
        this.$emit('startPopular')
      } else {
        this.$emit('startSearch')
      }
    }
  },
}


</script>

<template>
  <header>
    <div  class="text-center container">
      <div class="d-flex ">
            <img src="../assets/img/boolflix-logo.png" alt="">
        <ul>
          <li
          @click="this.resetCounteLoad(),$emit('startPopular'),store.tv=[],$emit('searchGenMovie')"
          >Film</li>
          <li
          @click="this.resetCounteLoad(),$emit('startPopularTv'),store.movie=[],$emit('searchGenTv')"
          >Serie TV</li>
          
        </ul>
      </div>
   
    <div class="select">
      
      <select class="form-select" aria-label="Default selectexample">
         <option
          v-for="(gen, index) in store.gen" :key="index"
          @click="
          this.resetCounteLoad(),
          store.genSelected=store.gen[index].id,
          $emit('searchGen')"
          selected>{{ gen.name }}</option>
      </select>
      
      <input 
      @keyup.enter="checkSearch(),resetCounteLoad()"
      v-model="store.inputSearch"
      type="text" placeholder="Cerca....">
    </div>
    
  </div>
  </header>
 
  
</template>



<style lang="scss" scoped>
header{
  padding: 10px 0px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: #141414;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
      display: flex;
      margin: 0px 0px;
      li{
        margin-right: 20px;
        font-size: 1.3rem;
        color: #dc1a28;
        list-style: none;
        display: flex;
        align-items: center;
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }  
    }
    img{
      width: 230px;
      height: 50px;
    }
    .select{
      display: flex;
      input{
        border: none;
        color: white;
        background-color: black;
        border-radius: 8px;
        padding: 0px 10px;
      }
      select{
        border: none;
        color: white;
        background-color: black;
        border-radius: 8px;
        padding: 0px 10px;
        margin-right: 20px;
      }
    }
  }
}


</style>