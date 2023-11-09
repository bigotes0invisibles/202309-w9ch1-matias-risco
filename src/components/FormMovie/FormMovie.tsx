import { useState } from "react";
import { MoviesStructure } from "../../store/feature/movies/types";
import FormMovieStyled from "./FormMovieStyled";

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
    image:
      "https://st3.depositphotos.com/1064045/15061/i/450/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg",
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
    <FormMovieStyled onSubmit={onSumbitForm} className="form-movie">
      <div className="form-movie__input">
        <label htmlFor="name">name: </label>
        <input
          type="text"
          id="name"
          onChange={onChange}
          value={newMovie.name}
          required
        />
      </div>
      <div className="form-movie__input">
        <label htmlFor="duration">duration:</label>
        <input
          type="time"
          id="duration"
          onChange={onChange}
          value={newMovie.duration}
          required
        />
      </div>
      <div className="form-movie__input">
        <label htmlFor="mainProtagonist">main protagonist:</label>
        <input
          type="text"
          onChange={onChange}
          id="mainProtagonist"
          value={newMovie.mainProtagonist}
          required
        />
      </div>
      <div className="form-movie__input">
        <label htmlFor="watched">watched: </label>
        <input
          type="checkbox"
          checked={newMovie.watched}
          id="watched"
          onChange={onChange}
          className="form-movie__checkbox"
          required
        />
      </div>
      <div className="form-movie__input">
        <label htmlFor="genres">genres:</label>
        <input
          type="text"
          value={newMovie.genres.join(",")}
          id="genres"
          onChange={onChange}
          required
        />
      </div>
      <div className="form-movie__input">
        <label htmlFor="image">image:</label>
        <input
          type="url"
          value={newMovie.image}
          id="image"
          onChange={onChange}
          required
        />
      </div>
      <img
        src={newMovie.image}
        alt={`the movie ${newMovie.name}`}
        width="300"
        height="150"
        className="form-movie__image"
      />
      <button className="form-movie__button">Add new movie</button>
    </FormMovieStyled>
  );
};

export default FormMovie;
