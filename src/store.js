import { reactive } from "vue";
export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/',
  apiUrlPop:'https://api.themoviedb.org/3/',
  apiUrlGen:'https://api.themoviedb.org/3/genre/',
  gen:[],
  genMovie:[],
  genTv:[],
  movie:[],
  tv:[],
  cast:[],
  inputSearch:'',
  genSelected:'',
  counterLoader:0,
  movieId:0,
})