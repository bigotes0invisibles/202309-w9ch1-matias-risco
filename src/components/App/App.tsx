import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import AddMoviePage from "../../pages/AddMoviePage/AddMoviePage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie/add" element={<AddMoviePage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
