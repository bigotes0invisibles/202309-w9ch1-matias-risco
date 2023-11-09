import { useCallback } from "react";
import { MoviesStructure } from "../store/feature/movies/types";

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

  return { getMoviesApi, toggleWatchMovieApi };
};

export default useMoviesApi;
