import React, { useEffect } from "react";
import { useState } from "react";

function App() {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    const fecthMovie = async () => {
      const URL =
        "https://api.themoviedb.org/3/discover/tv?api_key=5761f00d4efd80b92ba2496773204780";
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    };
    fecthMovie();
  }, []);
  return <div className="App"></div>;
}

export default App;
