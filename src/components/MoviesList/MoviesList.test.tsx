import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { renderWithProviders } from "../../utils/testUtils";
import mockMovies from "../../mocks/mockData";
import mainTheme from "../../styles/mainTheme";
import MoviesList from "./MoviesList";

describe("Given the component MoviesList", () => {
  describe("When it is render and have alredy pulled information of store", () => {
    test("then it should show the titles of the movies", () => {
      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <MoviesList />
        </ThemeProvider>,
        {
          preloadedState: {
            moviesState: { movies: mockMovies },
          },
        },
      );

      const HeadingElements = screen.getAllByRole("heading");

      expect(HeadingElements.length).toBe(2);
    });
  });
});
