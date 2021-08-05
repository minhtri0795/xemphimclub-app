import React, { useEffect, useState } from "react";
import "./DetailMovie.scss";
function DetailMovie({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [productCountry, setProductCountry] = useState([]);
  useEffect(() => {
    const fecthDetail = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5761f00d4efd80b92ba2496773204780&language=vi`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovieDetail(data);
      setProductCountry(data.production_countries);
    };
    fecthDetail();
  }, []);

  return (
    <div className="detail-page">
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
        }}
      ></div>
      <section className="section">
        <div className="container shiftup">
          <div className="poster-column">
            <img
              src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`}
              alt=""
            />
            <button className="watch-btn">XEM PHIM</button>
          </div>
          <div className="main-column">
            <h1 className="maintitle">{movieDetail.original_title}</h1>
            <h2 className="subtitle">{movieDetail.title}</h2>
            <div className="meta">
              <span></span>
              <span className="content-rating"></span>
            </div>
            <div className="meta">
              <span className="imb-icon"></span>
              <span className="imb-rating"></span>
            </div>
            <div className="level genres">
              <div className="level-left"></div>
              <div className="level-right"></div>
            </div>
            <div className="horizontal">
              <div className="hoz-content">
                <p>Quốc gia:</p>
                <span>{productCountry.map((country) => country.name)}</span>
              </div>
              <div className="hoz-content">
                <p>Khởi chiếu:</p>
                <span>{movieDetail.release_date}</span>
              </div>
            </div>
            <div className="intro">{movieDetail.overview}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DetailMovie;
