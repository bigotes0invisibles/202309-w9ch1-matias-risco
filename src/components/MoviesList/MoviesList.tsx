import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/moviesActions";

const MoviesList = (): React.ReactElement => {
  const { getMoviesApi } = useMoviesApi();

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
        <li key={movie.id}>
          <h2>{movie.name}</h2>
          <span>{movie.genre}</span>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
