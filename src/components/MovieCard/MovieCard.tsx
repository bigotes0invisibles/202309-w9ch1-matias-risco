import { useDispatch } from "react-redux";
import { MovieStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchMovieActionCreator } from "../../store/feature/movies/moviesSlice";
import { useCallback } from "react";
import useMoviesApi from "../../hooks/useMoviesApi";
import Button from "../Button/Button";

interface MovieCardPropsStructure {
  movie: MovieStructure;
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
          <span>
            this movie is mark as <br />
            {watched ? "watched" : "not watched"}
          </span>
          <Button
            onClick={onchange}
            textContent={watched ? "unWatch" : "Watch"}
          />
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
