import { reactive } from "vue";
export const store = reactive({
  apiUrlMovie:'https://api.themoviedb.org/3/search/movie',
  apiUrlSeries:'https://api.themoviedb.org/3/search/tv',
  apiUrlPopular:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  movieList:[],
  seriesList:[],
  popularList:[],
  inputSearch:''
  
});