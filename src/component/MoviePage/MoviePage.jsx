import React, { useEffect, useState } from "react";
import FilterMovie from "../FilterMovie/FilterMovie";
import Pagination from "../Pagination/Pagination";
import Poster from "../Poster/Poster";
function MoviePage({ getId }) {
  const [filters, setFilters] = useState({
    page: 1,
    year: "",
    genre: "",
    sortBy: "popularity.desc",
    country: "en",
  });
  const [renderfilm, setRenderFilm] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fechtMovie = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=5761f00d4efd80b92ba2496773204780&language=vi&with_genres=${filters.genre}&page=${filters.page}&primary_release_year=${filters.year}&with_original_language=${filters.country}&sort_by=${filters.sortBy}`;
      const response = await fetch(url);
      const data = await response.json();
      const { results, total_pages } = data;
      setRenderFilm(results);
      setTotalPage(total_pages);
    };
    fechtMovie();
  }, [filters]);

  const handleChangeGenre = (value) => {
    setFilters({ ...filters, page: 1, genre: value });
  };

  const handleChangeYear = (value) => {
    setFilters({ ...filters, page: 1, year: value });
  };

  const handChangeCountry = (value) => {
    setFilters({ ...filters, page: 1, country: value });
  };
  const handlePageChange = (pageNumber) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };
  const handleSort = (value) => {
    setFilters({ ...filters, page: 1, sortBy: value });
  };
  return (
    <div className="movie-section">
      <div className="container">
        <h1 style={{ color: "#fff", fontWeight: "500" }}>Phim lẻ</h1>
        <FilterMovie
          handleChangeYear={handleChangeYear}
          handleChangeGenre={handleChangeGenre}
          handChangeCountry={handChangeCountry}
          handleSort={handleSort}
        />
        <Poster
          type={"movie"}
          getId={getId}
          filmData={renderfilm}
          number={16}
        />
        <Pagination
          page={filters.page}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
export default MoviePage;
