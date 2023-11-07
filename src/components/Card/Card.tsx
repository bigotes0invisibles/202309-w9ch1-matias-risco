import { MoviesStructure } from "../../store/feature/movies/types";

interface MovieCardPropsStructure {
  movie: MoviesStructure;
}

const MovieCard = ({
  movie: { name, genres, mainProtagonist, duration },
}: MovieCardPropsStructure): React.ReactElement => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        genres:
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
      <p>Protagonist: {mainProtagonist}</p>
      <p>Duracion: {duration}</p>
    </div>
  );
};

export default MovieCard;
