import React, { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Poster from "./component/Poster/Poster";
import SearchPage from "./component/SearchPage/SearchPage";
function App() {
  const [recommentFilm, setRecommnetFilm] = useState([]);
  const [newFilm, setNewFilm] = useState([]);
  const [newTV, setNewTV] = useState([]);
  useEffect(() => {
    const fecthMovie = async () => {
      const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=5761f00d4efd80b92ba2496773204780`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results, page, total_pages } = data;
      setRecommnetFilm(results);
    };
    fecthMovie();
  }, []);
  useEffect(() => {
    const fecthMovie = async (specify) => {
      const URL = `https://api.themoviedb.org/3/discover/${specify}?api_key=5761f00d4efd80b92ba2496773204780`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results, page, total_pages } = data;
      if (specify === "movie") {
        setNewFilm(results);
      } else setNewTV(results);
    };
    fecthMovie("tv");
    fecthMovie("movie");
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <h2 className="title">Recomment movie</h2>
            <Poster filmData={recommentFilm} number={8} />
            <h2 className="title">New movie</h2>
            <Poster filmData={newFilm} number={8} />
            <h2 className="title">New TV Show</h2>
            <Poster filmData={newTV} number={8} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
