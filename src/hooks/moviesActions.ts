import { MoviesStructure } from "../store/feature/movies/types";
const apiurl = import.meta.env.VITE_URL_API;

const UseMoviesApi = () => {
  const getMoviesApi = async () => {
    const response = await fetch(`${apiurl}/movies`);
    const movies = (await response.json()) as MoviesStructure[];
    return movies;
  };

  return { getMoviesApi };
};

export default UseMoviesApi;
