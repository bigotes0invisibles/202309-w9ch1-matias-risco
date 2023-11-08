import { MoviesStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardPropsStructure {
  movie: MoviesStructure;
}

const MovieCard = ({
  movie: { name, genres, mainProtagonist, duration, image },
}: MovieCardPropsStructure): React.ReactElement => {
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
