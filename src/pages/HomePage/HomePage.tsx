import MoviesList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <h2>Our Movies</h2>
      <MoviesList />
    </HomePageStyled>
  );
};

export default HomePage;
