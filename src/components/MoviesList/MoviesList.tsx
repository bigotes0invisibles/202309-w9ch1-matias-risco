import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MovieCard from "../MovieCard/MovieCard";
import MoviesListStyled from "./MoviesListStyled";

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
    <MoviesListStyled>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
