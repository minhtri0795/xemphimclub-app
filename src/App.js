import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DetailMovie from "./component/DetailMovie/DetailMovie";
import MoviePage from "./component/MoviePage/MoviePage";
import NavBar from "./component/NavBar/NavBar";
import Poster from "./component/Poster/Poster";
import SearchPage from "./component/SearchPage/SearchPage";
import TVPage from "./component/TVPage/TVPage";
function App() {
  const [recommentFilm, setRecommnetFilm] = useState([]);
  const [newFilm, setNewFilm] = useState([]);
  const [newTV, setNewTV] = useState([]);
  useEffect(() => {
    const fecthMovie = async () => {
      const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=5761f00d4efd80b92ba2496773204780&language=vi`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      setRecommnetFilm(results);
    };
    fecthMovie();
  }, []);
  useEffect(() => {
    const fecthMovie = async (specify) => {
      const URL = `https://api.themoviedb.org/3/discover/${specify}?api_key=5761f00d4efd80b92ba2496773204780&language=vi`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      if (specify === "movie") {
        setNewFilm(results);
      } else setNewTV(results);
    };
    fecthMovie("tv");
    fecthMovie("movie");
  }, []);
  const [id, setId] = useState(497698);
  const getId = (newId) => {
    setId(newId);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/type/movie">
            <MoviePage getId={getId} />
          </Route>
          <Route path="/type/tv">
            <TVPage />
          </Route>
          <Route exact path={`/movie/${id}`}>
            <DetailMovie id={id} />
          </Route>
          <Route path="/">
            <div className="container">
              <div className="title">
                <h2>PHIM ĐỀ CỬ</h2>
              </div>
            </div>
            <Poster getId={getId} filmData={recommentFilm} number={8} />
            <div className="container">
              <div className="title">
                <h2>PHIM LẺ MỚI CẬP NHẬT</h2>
                <p>
                  <Link to="/type/movie">Xem tất cả</Link>
                </p>
              </div>
            </div>
            <Poster getId={getId} filmData={newFilm} number={8} />
            <div className="container">
              <div className="title">
                <h2>PHIM BỘ MỚI CẬP NHẬT</h2>
                <p>
                  <Link to="/type/tv">Xem tất cả</Link>
                </p>
              </div>
            </div>
            <Poster getId={getId} filmData={newTV} number={8} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
