import { reactive } from "vue";
export const store = reactive({
  apiUrlMovie:'https://api.themoviedb.org/3/search/movie',
  apiUrlSeries:'https://api.themoviedb.org/3/search/tv',
  apiUrlPopular:'https://api.themoviedb.org/3/movie/popular',
  movieList:[],
  seriesList:[],
  popularList:[],
  inputSearch:'',
});