import { useDispatch } from "react-redux";
import FormMovie from "../../components/FormMovie/FormMovie";
import { MoviesStructure } from "../../store/feature/movies/types";
import { AddMovieActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useNavigate } from "react-router-dom";

const AddMoviePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { AddMovieApi } = useMoviesApi();
  const navigate = useNavigate();
  const onSumbit = async (movie: MoviesStructure) => {
    try {
      const newMovie = await AddMovieApi(movie);
      dispatch(AddMovieActionCreator(newMovie));
      navigate("/");
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return (
    <>
      <h2>Add new movie</h2>
      <FormMovie onSumbit={onSumbit} />
    </>
  );
};

export default AddMoviePage;
