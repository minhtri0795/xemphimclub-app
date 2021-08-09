import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Comment from "./Comment";
import "./WatchPage.scss";
function WatchPage({ type, id }) {
  const [trailer, setTrailer] = useState([]);
  const [comment, setComment] = useState("");
  const [content, setContent] = useState([{}]);
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
  const keyList = trailer.reduce((acc, item) => {
    if (item.type === "Trailer") {
      acc.push(item.key);
    }
    return acc;
  }, []);
  const nameList = trailer.reduce((acc, item) => {
    if (item.type === "Trailer") {
      acc.push(item.name);
    }
    return acc;
  }, []);
  const history = useHistory();

  return (
    <section className="section-watch">
      <div className="video">
        <iframe
          title="video"
          width="100%"
          height="520"
          src={`https://www.youtube.com/embed/${keyList[0]}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
      <div className="server-switch">
        <button>Sever 1</button>
        <button>Sever 2</button>
        <button>Sever 3</button>
      </div>
      <div class="text-center">
        Đã chọn cả 3 server mà phim vẫn load chậm?{" "}
        <span
          onClick={() => {
            history.push(`/FAQ`);
          }}
        >
          Xem hướng dẫn
        </span>
      </div>
      <p class="text-center">
        Phim không có tiếng / mất tiếng nhân vật / âm thanh bị rè?{" "}
        <span
          onClick={() => {
            history.push(`/FAQ`);
          }}
        >
          Xem hướng dẫn
        </span>
      </p>
      <div className="section">
        <div className="container">
          <div className="columns watch-top">
            <div className="column name">
              <h1>{nameList[0]}</h1>
              <h2>Source: Youtube</h2>
              <div>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=${keyList[0]}`}
                  class="fb-share-button"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                  </svg>{" "}
                  Chia sẻ
                </a>
              </div>
            </div>
            <div className="column feature">
              <div className="dual-sub-toggle">
                <button>Giao diện học tiếng Anh</button>
              </div>
              <div className="back">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z"></path>
                </svg>
                <span
                  onClick={() => {
                    history.push(`/${type}/${id}`);
                  }}
                >
                  Trở về trang giới thiệu phim
                </span>
              </div>
            </div>
          </div>
          <div className="comments-section">
            <h2 class="comments-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.4 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.1 2.1 18.4 3.7 28 4.8 31.5 57.5 105.5 98 191.8 98 20.8 0 40.8-2.4 59.8-6.8 28.5 18.5 71.6 38.8 125.2 38.8 9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.5-.4-22.6-24.2-37.9-54.9zM142.2 311l-11.4 7.4c-20.1 13.1-50.5 28.2-87.7 32.5 8.8-11.3 20.2-27.6 29.5-46.4L83 283.7l-16.5-16.3C50.7 251.9 32 226.2 32 192c0-70.6 79-128 176-128s176 57.4 176 128-79 128-176 128c-17.7 0-35.4-2-52.6-6l-13.2-3zm303 103.4l-11.4-7.4-13.2 3.1c-17.2 4-34.9 6-52.6 6-65.1 0-122-25.9-152.4-64.3C326.9 348.6 416 278.4 416 192c0-9.5-1.3-18.7-3.3-27.7C488.1 178.8 544 228.7 544 288c0 34.2-18.7 59.9-34.5 75.4L493 379.7l10.3 20.7c9.4 18.9 20.8 35.2 29.5 46.4-37.1-4.2-67.5-19.4-87.6-32.4zm-37.8-267.7c.1.2.1.4.2.6-.1-.2-.1-.4-.2-.6z"></path>
              </svg>{" "}
              Bình luận phim
            </h2>
            <form action="comment">
              <textarea
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                className="textarea"
                rows="2"
                placeholder="Nhập bình luận..."
                value={comment}
              ></textarea>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const date = new Date();
                  const year = date.getFullYear();
                  const month = date.getMonth() + 1;
                  const day = date.getDate();
                  const hour = date.getHours();
                  const minute = date.getMinutes();
                  const dateFormat = `${hour}:${minute} ${day}/${month}/${year}`;
                  const newContent = [...content];
                  newContent.unshift({
                    name: "Ẩn danh",
                    date: dateFormat,
                    content: comment,
                  });
                  setContent(newContent);
                  setComment("");
                }}
              >
                Gửi
              </button>
            </form>
            {content.map((item) => {
              return <Comment comment={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchPage;
