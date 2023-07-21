import { Container } from "App.styled";
import Header from "components/Header/Header";
import Cast from "pages/Cast/Cast";
import HomePage from "pages/HomePage/HomePage";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import Reviews from "pages/Reviews/Reviews";
import SearchMoviesPage from "pages/SearchMoviesPage/SearchMoviesPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviesPage />} />
          <Route path="/movies/:moviesID/*" element={<MoviesDetails />}>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;