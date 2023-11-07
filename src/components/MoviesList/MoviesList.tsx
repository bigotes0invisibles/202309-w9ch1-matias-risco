import { useDispatch } from "react-redux";

import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import UseMoviesApi from "../../hooks/moviesActions";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";

const MoviesList = (): React.ReactElement => {
  const { getMoviesApi } = UseMoviesApi();

  const movies = useAppSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentmovies = await getMoviesApi();
      dispatch(loadMoviesActionCreator(currentmovies));
    })();
  }, [dispatch, getMoviesApi]);

  return (
    <ul>
      {movies.map((movie) => (
        <li>
          <h2>{movie.name}</h2>
          <span>{movie.genre}</span>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
