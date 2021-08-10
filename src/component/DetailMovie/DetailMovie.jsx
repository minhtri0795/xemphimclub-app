import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./DetailMovie.scss";
import Trailer from "./Trailer";
import Actor from "./Actor";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

function DetailMovie({ id, type, getCastId, getColection }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [productCountry, setProductCountry] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    const fecthDetail = async () => {
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=5761f00d4efd80b92ba2496773204780&language=vi`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetail(data);
      setGenres(data.genres);
      setProductCountry(data.production_countries);
    };
    fecthDetail();
  }, []);
  const genresList = genres.map((genre) => {
    return <span className="genre-item">{genre.name}</span>;
  });
  const history = useHistory();
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
          <div className="tt-detail">
            <div className="poster-column">
              <img
                src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`}
                alt=""
              />
              <button
                href="#"
                className="watch-btn"
                onClick={() => {
                  history.push(`/watch/${type}/${id}`);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
                XEM PHIM{" "}
              </button>
            </div>
            <div className="main-column">
              <h1 className="maintitle">
                {movieDetail.original_title || movieDetail.name}
              </h1>
              <h2 className="subtitle">
                {movieDetail.title || movieDetail.original_name}
              </h2>
              <div className="meta">
                <span
                  className="runtime"
                  style={
                    type === "tv"
                      ? { display: "none" }
                      : { display: "inline-block" }
                  }
                >
                  {Math.floor(movieDetail.runtime / 60)} giờ{" "}
                  {movieDetail.runtime % 60} phút
                </span>
                <span className="content-rating">PG-13</span>
              </div>
              <div className="meta">
                <span className="imb-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                      fill="#ffc107"
                    ></path>
                    <path
                      d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                      fill="#263238"
                    ></path>
                  </svg>
                </span>
                <span className="imb-rating">6.8</span>
              </div>
              <div className="level genres">
                <div className="level-left">
                  <div className="level-item">
                    <a href="#">
                      <FacebookIcon />
                      Chia sẻ
                    </a>
                  </div>
                  <div className="level-item">
                    <p
                      className={`colection ${isSelect ? "add" : ""}`}
                      onClick={() => {
                        if (!isSelect) {
                          getColection({
                            isSelect,
                            id,
                            name: movieDetail.name,
                            title: movieDetail.title,
                            poster_path: movieDetail.poster_path,
                          });
                          setIsSelect(!isSelect);
                        }
                      }}
                    >
                      {!isSelect ? <AddIcon /> : <CheckIcon />}
                      {!isSelect ? "Bộ sưu tập" : "Đã thêm"}
                    </p>
                  </div>
                </div>
                <div className="level-right">{genresList}</div>
              </div>
              <div className="horizontal">
                <div className="hoz-content">
                  <p>Đạo diễn</p>
                  <span>Jaume Collet-Serra</span>
                </div>
                <div className="hoz-content">
                  <p>Quốc gia</p>
                  <span>
                    {productCountry.map((country) => country.name + ", ")}
                  </span>
                </div>
                <div className="hoz-content">
                  <p>Khởi chiếu</p>
                  <span>
                    {movieDetail.release_date || movieDetail.first_air_date}
                  </span>
                </div>
              </div>
              <div className="intro">
                {movieDetail.overview === ""
                  ? "Đang cập nhật..."
                  : movieDetail.overview}
              </div>
              <div className="cast">
                <h3>Diễn viên</h3>
                <Actor id={id} type={type} getCastId={getCastId} />
              </div>
              <div className="trailer">
                <h3>Trailer</h3>
                <Trailer id={id} type={type} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DetailMovie;
