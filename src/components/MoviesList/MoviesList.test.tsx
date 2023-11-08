import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import mockMovies from "../../mocks/mockData";
import mainTheme from "../../styles/mainTheme";
import MoviesList from "./MoviesList";
import { setupStore } from "../../utils/setUpStore";

describe("Given the component MoviesList", () => {
  describe("When it is render and have alredy pulled information of store", () => {
    test("then it should show the titles of the movies", () => {
      const mockstore = setupStore({
        moviesState: { movies: mockMovies },
      });
      const firstMovieName = mockMovies[0].name;
      const secondMovieName = mockMovies[1].name;
      render(
        <Provider store={mockstore}>
          <ThemeProvider theme={mainTheme}>
            <MoviesList />
          </ThemeProvider>
        </Provider>,
      );

      const firstMovieElement = screen.getByRole("heading", {
        name: firstMovieName,
      });
      const secondMovieElement = screen.getByRole("heading", {
        name: secondMovieName,
      });

      expect(firstMovieElement).toBeInTheDocument();
      expect(secondMovieElement).toBeInTheDocument();
    });
  });
});
