import { useDispatch } from "react-redux";
import { MoviesStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchMovieActionCreator } from "../../store/feature/movies/moviesSlice";
import { useCallback } from "react";
import useMoviesApi from "../../hooks/moviesActions";

interface MovieCardPropsStructure {
  movie: MoviesStructure;
}

const MovieCard = ({
  movie: { name, genres, mainProtagonist, duration, image, watched, id },
  movie,
}: MovieCardPropsStructure): React.ReactElement => {
  const dispatch = useDispatch();
  const { toggleWatchMovieApi } = useMoviesApi();
  const onchange = useCallback(async () => {
    const isError = await toggleWatchMovieApi(movie);
    if (isError) {
      dispatch(toggleWatchMovieActionCreator(id));
    }
  }, [dispatch, id, movie, toggleWatchMovieApi]);

  return (
    <MovieCardStyled>
      <h2>{name}</h2>
      <div className="movie-card__content">
        <div className="movie-card__information">
          <ul className="movie-card__genres">
            genres:
            {genres.map((genre, position) => (
              <li key={position}>{genre}</li>
            ))}
          </ul>
          <span>Protagonist: {mainProtagonist}</span>
          <span>Duracion: {duration}</span>
          <label>
            Wached:
            <input
              type="checkbox"
              className="movie-card__checkbox"
              checked={watched}
              onChange={onchange}
            />
          </label>
        </div>
        <img
          src={image}
          alt={`movie of ${name}`}
          className="movie-card__image"
        />
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
