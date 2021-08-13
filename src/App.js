import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CastDetail from "./component/CastDetail/CastDetail";
import Colection from "./component/Colection/Colection";
import DetailMovie from "./component/DetailMovie/DetailMovie";
import FAQpage from "./component/FAQpage/FAQpage";
import Footer from "./component/Footer/Footer";
import Homepage from "./component/Homepage/Homepage";
import MoviePage from "./component/MoviePage/MoviePage";
import NavBar from "./component/NavBar/NavBar";
import SearchPage from "./component/SearchPage/SearchPage";
import TVPage from "./component/TVPage/TVPage";
import WatchPage from "./component/WatchPage/WatchPage";
function App() {
  const [MovieID, setMovieID] = useState();
  const [MovieType, setMovieType] = useState("");
  const [actor, setActor] = useState({
    actorId: "",
    name: "",
  });
  const [colection, setColection] = useState([]);
  const getId = (newId, newType) => {
    setMovieID(newId);
    setMovieType(newType);
  };
  const getCastId = (myActorId, myActorName) => {
    const newActor = { ...actor, actorId: myActorId, name: myActorName };
    setActor(newActor);
  };
  const getColection = (colectionFilm) => {
    const newColection = [...colection];
    newColection.unshift(colectionFilm);
    setColection(newColection);
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
          <Route exact path={`/colection`}>
            <Colection type={MovieType} colection={colection} getId={getId} />
          </Route>
          <Route exact path={`/${MovieType}/${MovieID}`}>
            <DetailMovie
              id={MovieID}
              type={MovieType}
              getCastId={getCastId}
              getColection={getColection}
            />
          </Route>
          <Route exact path={`/cast/${actor.name}`}>
            <CastDetail actor={actor} getId={getId} />
          </Route>
          <Route exact path={`/watch/${MovieType}/${MovieID}`}>
            <WatchPage type={MovieType} id={MovieID} />
          </Route>
          <Route path="/">
            <Homepage getId={getId} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
