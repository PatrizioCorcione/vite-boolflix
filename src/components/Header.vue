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

  <div  class="text-center">
    <input 
    v-model="store.inputSearch"
    type="text">
    <span
    @click="$emit('startSearch')"
    class="btn btn-dark"></span>
  </div>
  
</template>



<style lang="scss" scoped>

</style>