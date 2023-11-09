import { useCallback } from "react";
import {
  MoviesStructure,
  MoviesStructureIdOptional,
} from "../store/feature/movies/types";
import { copyMovie } from "../store/feature/movies/movieUtils";

const useMoviesApi = () => {
  const apiurl = import.meta.env.VITE_URL_API;

  const getMoviesApi = useCallback(async () => {
    const response = await fetch(`${apiurl}/movies`);
    const movies = (await response.json()) as MoviesStructure[];

    return movies;
  }, [apiurl]);

  const toggleWatchMovieApi = useCallback(
    async (movie: MoviesStructure): Promise<boolean> => {
      try {
        const response = await fetch(`${apiurl}/movies/${movie.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            watched: !movie.watched,
          }),
        });

        if (!response.ok) return false;
        return true;
      } catch (error) {
        console.log((error as Error).message);
        return false;
      }
    },
    [apiurl],
  );

  const addMovieApi = useCallback(
    async (movie: MoviesStructure) => {
      const movieWithOutId: MoviesStructureIdOptional = copyMovie(movie);
      delete movieWithOutId.id;
      try {
        const response = await fetch(`${apiurl}/movies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movieWithOutId),
        });
        const newMovie = (await response.json()) as MoviesStructure;
        return newMovie;
      } catch (error) {
        console.log((error as Error).message);
        return {} as MoviesStructure;
      }
    },
    [apiurl],
  );

  return { getMoviesApi, toggleWatchMovieApi, AddMovieApi: addMovieApi };
};

export default useMoviesApi;
