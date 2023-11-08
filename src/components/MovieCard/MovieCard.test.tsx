import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import mockMovies from "../../mocks/mockData";
import MovieCard from "./MovieCard";
import { Provider } from "react-redux";
import { setupStore } from "../../utils/setUpStore";

describe("Given the component MovieCard", () => {
  describe(`When is given the information of ${mockMovies[0].name}`, () => {
    test(`Then it should show to the user the title, the protagonist name, and img`, () => {
      const movieInfo = mockMovies[0];
      const { name: expectedName } = movieInfo;
      const mockstore = setupStore();
      render(
        <Provider store={mockstore}>
          <ThemeProvider theme={mainTheme}>
            <MovieCard movie={movieInfo} />
          </ThemeProvider>
        </Provider>,
      );
      const headingElement = screen.getByRole("heading", {
        name: expectedName,
      });
      const imageElement = screen.getByRole("img", {
        name: `movie of ${expectedName}`,
      });

      expect(headingElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    });
  });
});
