import React from "react";
import GenreSelect from "../data/GenreSelect";
import ReleaseYear from "../data/YearSelect";
import CountrySelect from "../data/CountrySelect";
import "./FilterMovie.scss";
function FilterMovie({
  handleChangeYear,
  handleChangeGenre,
  handChangeCountry,
  handleSort,
}) {
  const changeYear = (e) => {
    const value = e.target.value;
    handleChangeYear(value);
  };
  const changeGenre = (e) => {
    const value = e.target.value;
    handleChangeGenre(value);
  };
  const changeCountry = (e) => {
    const value = e.target.value;
    handChangeCountry(value);
  };
  const changeSort = (e) => {
    const value = e.target.value;
    handleSort(value);
  };
  return (
    <div className="filter-wrapper">
      <div className="select-field">
        <label>Thể loại:</label>
        <div className="select">
          <select onChange={changeGenre}>
            <GenreSelect />
          </select>
        </div>
      </div>
      <div className="select-field">
        <label>Quốc gia:</label>
        <div className="select">
          <select onChange={changeCountry}>
            <CountrySelect />
          </select>
        </div>
      </div>
      <div className="select-field">
        <label>Năm:</label>
        <div className="select">
          <select onChange={changeYear} id="gener">
            <ReleaseYear />
          </select>
        </div>
      </div>
      <div className="select-field">
        <label>Sắp xếp:</label>
        <div className="select">
          <select onChange={changeSort}>
            <option value="popularity.desc">Theo độ phổ biến</option>
            <option value="vote_count.desc">Theo điểm đánh giá</option>
            <option value="release_date.desc">Theo ngày ra mắt</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterMovie;
