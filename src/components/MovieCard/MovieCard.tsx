import { useDispatch } from "react-redux";
import { MoviesStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchMovieActionCreator } from "../../store/feature/movies/moviesSlice";
import { useCallback } from "react";

interface MovieCardPropsStructure {
  movie: MoviesStructure;
}

const MovieCard = ({
  movie: { name, genres, mainProtagonist, duration, image, watched, id },
}: MovieCardPropsStructure): React.ReactElement => {
  const dispatch = useDispatch();
  const onchange = useCallback(() => {
    dispatch(toggleWatchMovieActionCreator(id));
  }, [dispatch, id]);

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
