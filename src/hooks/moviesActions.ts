import { useCallback } from "react";
import { MoviesStructure } from "../store/feature/movies/types";

const useMoviesApi = () => {
  const apiurl = import.meta.env.VITE_URL_API;

  const getMoviesApi = useCallback(async () => {
    const response = await fetch(`${apiurl}/movies`);
    const movies = (await response.json()) as MoviesStructure[];

    return movies;
  }, [apiurl]);

  return { getMoviesApi };
};

export default useMoviesApi;
