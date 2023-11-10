import MoviesList from "../../components/MoviesList/MoviesList";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <NavigationBar />
      <h2>Our Movies</h2>
      <MoviesList />
    </HomePageStyled>
  );
};

export default HomePage;
