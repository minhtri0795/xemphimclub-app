import React from "react";
import "./Poster.scss";
function Poster({ filmData, number }) {
  filmData.splice(
    number,
    filmData.length - number
  ); /*define how many poster render*/
  return (
    <div className="title-list">
      <ul>
        {filmData.map((film) => {
          return (
            <li className="poster-item">
              <img
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt=""
              />
              <h3>{film.title || film.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Poster;
