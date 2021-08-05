import React, { useState } from "react";
import "./Poster.scss";
import { useHistory } from "react-router-dom";
function Poster({ filmData, number, getId }) {
  filmData.splice(
    number,
    filmData.length - number
  ); /*define how many poster render*/
  const [show, setShow] = useState(true);
  let history = useHistory();
  useState(() => {
    setShow(!show);
  }, [show]);
  return (
    <div className="title-list">
      <div className="container">
        <ul>
          {filmData.map((film) => {
            return (
              <li
                onClick={() => {
                  history.push(`/movie/${film.id}`);
                  getId(film.id);
                }}
                className="poster-item"
              >
                <div className="poster-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt=""
                  />
                </div>
                <h3>{film.title || film.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Poster;
