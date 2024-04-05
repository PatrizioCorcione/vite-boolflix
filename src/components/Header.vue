<script>
import {store} from '../store';
export default {
  data(){
    return{
      store,
      
    }
  }
}


</script>

<template>
  <header>
    <div  class="text-center container">
    <img src="../assets/img/boolflix-logo.png" alt="">
    <div class="select">
      <select class="form-select" aria-label="Default selectexample">
         <option
          v-for="(gen, index) in store.genMovie" :key="index"
          @click="
          store.genSelected=store.gen[index].id,
          $emit('searchGen')"
          selected>{{ gen.name }}</option>
      </select>
      <input 
      @keyup.enter="$emit('startSearch')"
      v-model="store.inputSearch"
      type="text" placeholder="Serie tv/Film">
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
  img{
    width: 230px;
    height: 50px;
  }
  .select{
    display: flex;
    input{
    color: white;
    background-color: black;
    border-radius: 8px;
    
    padding: 0px 10px;
  }
  select{
    color: white;
    background-color: black;
    border-radius: 8px;
    outline: none;
    padding: 0px 10px;
  }
  }
  
}
}


</style>