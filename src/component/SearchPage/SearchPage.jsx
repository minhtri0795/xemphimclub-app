import React, { useEffect, useRef, useState } from "react";
import Poster from "../Poster/Poster";
import "./SearchPage.scss";

function SearchPage({ getId }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [query, setQuery] = useState("");
  const typingTimeoutRef = useRef(null);
  const fetchMovie = async (searchKey) => {
    const queryString = searchKey.replace(" ", "+");
    const URL = `
      https://api.themoviedb.org/3/search/movie?api_key=5761f00d4efd80b92ba2496773204780&query=${queryString}`;
    const response = await fetch(URL);
    const data = await response.json();
    const { results } = data;
    if (results) {
      setDataSearch(results);
    }
  };
  useEffect(() => {
    fetchMovie(query);
  }, [query]);
  const handleInput = (e) => {
    const value = e.target.value;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setQuery(value);
    }, 500);
  };
  return (
    <>
      <div className="search-wrapper">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Nhập tên phim..."
        />
        <Poster
          type={"movie"}
          getId={getId}
          filmData={dataSearch}
          number={!dataSearch ? 0 : dataSearch.length}
        />
      </div>
    </>
  );
}

export default SearchPage;
