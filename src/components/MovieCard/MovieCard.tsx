import { MoviesStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardPropsStructure {
  movie: MoviesStructure;
}

const MovieCard = ({
  movie: { name, genres, mainProtagonist, duration },
}: MovieCardPropsStructure): React.ReactElement => {
  return (
    <MovieCardStyled>
      <h2>{name}</h2>
      <ul>
        genres:
        {genres.map((genre, position) => (
          <li key={position}>{genre}</li>
        ))}
      </ul>
      <p>Protagonist: {mainProtagonist}</p>
      <p>Duracion: {duration}</p>
    </MovieCardStyled>
  );
};

export default MovieCard;
