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
    <div>
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
  input{
    color: white;
    background-color: black;
    border-radius: 8px;
    outline: none;
    padding: 0px 10px;
  }
}
}


</style>