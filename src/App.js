import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CastDetail from "./component/CastDetail/CastDetail";
import DetailMovie from "./component/DetailMovie/DetailMovie";
import FAQpage from "./component/FAQpage/FAQpage";
import Footer from "./component/Footer/Footer";
import MoviePage from "./component/MoviePage/MoviePage";
import NavBar from "./component/NavBar/NavBar";
import Poster from "./component/Poster/Poster";
import SearchPage from "./component/SearchPage/SearchPage";
import TVPage from "./component/TVPage/TVPage";
import WatchPage from "./component/WatchPage/WatchPage";
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
  const [id, setId] = useState();
  const [cast, setCast] = useState({
    castId: "",
    name: "",
  });
  const [type, setType] = useState("");
  const getId = (newId, newType) => {
    setId(newId);
    setType(newType);
  };
  const getCastId = (myCastId, myCastName) => {
    const newCast = { ...cast, castId: myCastId, name: myCastName };
    setCast(newCast);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/search">
            <SearchPage getId={getId} />
          </Route>
          <Route path="/type/movie">
            <MoviePage getId={getId} />
          </Route>
          <Route path="/type/tv">
            <TVPage getId={getId} />
          </Route>
          <Route exact path={`/FAQ`}>
            <FAQpage />
          </Route>
          <Route exact path={`/${type}/${id}`}>
            <DetailMovie id={id} type={type} getCastId={getCastId} />
          </Route>
          <Route exact path={`/cast/${cast.name}`}>
            <CastDetail cast={cast} getId={getId} />
          </Route>
          <Route exact path={`/watch/${type}/${id}`}>
            <WatchPage type={type} id={id} />
          </Route>
          <Route path="/">
            <div className="home-section">
              <div className="container">
                <div className="title">
                  <h2>PHIM ĐỀ CỬ</h2>
                </div>
                <Poster
                  type={"movie"}
                  getId={getId}
                  filmData={recommentFilm}
                  number={8}
                />
                <div className="title">
                  <h2>PHIM LẺ MỚI CẬP NHẬT</h2>
                  <p>
                    <Link to="/type/movie">Xem tất cả</Link>
                  </p>
                </div>
                <Poster
                  type={"movie"}
                  getId={getId}
                  filmData={newFilm}
                  number={8}
                />
                <div className="title">
                  <h2>PHIM BỘ MỚI CẬP NHẬT</h2>
                  <p>
                    <Link to="/type/tv">Xem tất cả</Link>
                  </p>
                </div>
                <Poster type={"tv"} getId={getId} filmData={newTV} number={8} />
              </div>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
