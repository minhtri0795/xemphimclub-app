import React, { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import "./SearchPage.scss";

function SearchPage() {
  const [dataSearch, setDataSearch] = useState([]);
  const [query, setQuery] = useState("loki");
  console.log(dataSearch);
  useEffect(() => {
    const fetchMovie = async (searchKey) => {
      const queryString = searchKey.replace(" ", "+");
      console.log(queryString);
      const URL = `
        https://api.themoviedb.org/3/search/multi?api_key=5761f00d4efd80b92ba2496773204780&query=${queryString}`;
      const response = await fetch(URL);
      const data = await response.json();
      const { results } = data;
      setDataSearch(results);
    };
    fetchMovie(query);
  }, [query]);
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search-wrapper">
      <input
        onChange={handleInput}
        type="text"
        placeholder="Search movie name"
      />
      <Poster filmData={dataSearch} number={dataSearch.length} />
    </div>
  );
}

export default SearchPage;
