import Header from "../Header/Header";
import MoviesList from "../MoviesList/MoviesList";
import AppStyled from "./AppStyled";
import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MoviesList />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
