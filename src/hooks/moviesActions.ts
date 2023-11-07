import { moviesStructure } from "../store/feature/movies/moviesSlice";
const apiurl = import.meta.env.VITE_URL_API;

const UseMoviesApi = () => {
  const getMoviesApi = async () => {
    const response = await fetch(`${apiurl}/movies`);
    const movies = (await response.json()) as moviesStructure[];
    return movies;
  };

  return { getMoviesApi };
};

export default UseMoviesApi;
