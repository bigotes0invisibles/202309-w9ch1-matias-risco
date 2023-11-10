import { useDispatch } from "react-redux";
import FormMovie from "../../components/FormMovie/FormMovie";
import { MovieStructure } from "../../store/feature/movies/types";
import { AddMovieActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const AddMoviePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { AddMovieApi } = useMoviesApi();
  const navigate = useNavigate();
  const onSumbit = async (movie: MovieStructure) => {
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
      <NavigationBar />
      <h2>Add new movie</h2>
      <FormMovie onSumbit={onSumbit} />
    </>
  );
};

export default AddMoviePage;
