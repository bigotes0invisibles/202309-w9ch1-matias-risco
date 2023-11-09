import { useState } from "react";
import { MoviesStructure } from "../../store/feature/movies/types";

interface FormMoviePropsStructure {
  onSumbit: (movie: MoviesStructure) => void;
}

const FormMovie = ({
  onSumbit,
}: FormMoviePropsStructure): React.ReactElement => {
  const [newMovie, setNewMovie] = useState<MoviesStructure>({
    duration: "",
    genres: [""],
    id: 0,
    image: "",
    mainProtagonist: "",
    meme: "no",
    name: "",
    watched: true,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let valueOnChange: unknown;
    switch (event.target.id) {
      case "watched":
        valueOnChange = !newMovie.watched;
        break;
      case "duration":
        valueOnChange = event.target.value + ":00";
        break;
      case "genres":
        valueOnChange = event.target.value.split(",");
        break;
      default:
        valueOnChange = event.target.value;
        break;
    }
    setNewMovie(() => ({
      ...newMovie,
      [event.target.id]: valueOnChange,
    }));
  };

  const onSumbitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSumbit(newMovie);
  };

  return (
    <form onSubmit={onSumbitForm}>
      <label htmlFor="name">name: </label>
      <input
        type="text"
        id="name"
        onChange={onChange}
        value={newMovie.name}
        required
      />
      <label htmlFor="duration">duration:</label>
      <input
        type="time"
        id="duration"
        onChange={onChange}
        value={newMovie.duration}
        required
      />
      <label htmlFor="mainProtagonist">main protagonist:</label>
      <input
        type="text"
        onChange={onChange}
        id="mainProtagonist"
        value={newMovie.mainProtagonist}
        required
      />
      <label htmlFor="watched">watched: </label>
      <input
        type="checkbox"
        checked={newMovie.watched}
        id="watched"
        onChange={onChange}
        required
      />
      <label htmlFor="image">image:</label>
      <input
        type="url"
        value={newMovie.image}
        id="image"
        onChange={onChange}
        required
      />
      <label htmlFor="genres">genres:</label>
      <input
        type="text"
        value={newMovie.genres.join(",")}
        id="genres"
        onChange={onChange}
        required
      />
      <button>Hello it's is you who i am lokking for</button>
    </form>
  );
};

export default FormMovie;
