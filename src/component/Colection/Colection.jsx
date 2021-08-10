import React from "react";
import Poster from "../Poster/Poster";
import "./Colection.scss";
function Colection({ type, colection, getId }) {
  console.log(colection);
  return (
    <section className="colection-section">
      <div className="container">
        <h1>Bộ sưu tập phim của bạn</h1>
        <h2>Các phim bạn muốn xem:</h2>
        <Poster
          type={type}
          filmData={colection}
          number={colection.length}
          getId={getId}
        />
      </div>
    </section>
  );
}

export default Colection;
