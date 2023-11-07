import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/moviesActions";
import MovieCard from "../Card/Card";

const MoviesList = (): React.ReactElement => {
  const { getMoviesApi } = useMoviesApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentmovies = await getMoviesApi();
      dispatch(loadMoviesActionCreator(currentmovies));
    })();
  }, [dispatch, getMoviesApi]);

  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
