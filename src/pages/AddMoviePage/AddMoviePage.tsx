import { useDispatch } from "react-redux";
import FormMovie from "../../components/FormMovie/FormMovie";
import { MoviesStructure } from "../../store/feature/movies/types";
import { AddMovieActionCreator } from "../../store/feature/movies/moviesSlice";

const AddMoviePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const onSumbit = (movie: MoviesStructure) => {
    dispatch(AddMovieActionCreator(movie));
  };
  return (
    <>
      <h2>Add new movie</h2>
      <FormMovie onSumbit={onSumbit} />
    </>
  );
};

export default AddMoviePage;
