import React, { useEffect, useState } from "react";
import TitleMovie from "./TitleMovie";

function Homepage({ getId }) {
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
  return (
    <div className="home-section">
      <div className="container">
        <TitleMovie
          title="PHIM ĐỀ CỬ"
          type={"movie"}
          getId={getId}
          filmData={recommentFilm}
        />
        <TitleMovie
          title="PHIM LẺ"
          type={"movie"}
          getId={getId}
          filmData={newFilm}
        />
        <TitleMovie
          title="PHIM BỘ"
          type={"tv"}
          getId={getId}
          filmData={newTV}
        />
      </div>
    </div>
  );
}

export default Homepage;
