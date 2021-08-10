import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrailerPopup from "./TrailerPopup";
const MultipleItems = ({ id, type }) => {
  const [trailer, setTrailer] = useState([]);
  const [videoKey, setVideoKey] = useState("");
  console.log(videoKey);
  useEffect(() => {
    const getTrailer = async () => {
      const url = `
            https://api.themoviedb.org/3/${type}/${id}/videos?api_key=5761f00d4efd80b92ba2496773204780`;
      const response = await fetch(url);
      const data = await response.json();
      const trailerList = data.results;
      setTrailer(trailerList);
    };
    getTrailer();
  }, []);

  const trailerVideo = trailer.map((video) => {
    return (
      <div className="item">
        <div
          className="clip"
          onClick={() => {
            setVideoKey(video.key);
          }}
        >
          <img
            className="trailer-img"
            alt={video.key}
            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
          ></img>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  const closePopup = () => {
    setVideoKey("");
  };
  return (
    <div>
      <Slider {...settings}>{trailerVideo}</Slider>
      {videoKey ? (
        <TrailerPopup videoKey={videoKey} closePopup={closePopup} />
      ) : (
        ""
      )}
    </div>
  );
};
export default MultipleItems;
