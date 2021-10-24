import React from "react";
import Poster from "../Poster/Poster";

function TitleMovie({ title, type, getId, filmData }) {
  return (
    <>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <Poster type={type} getId={getId} filmData={filmData} number={8} />
    </>
  );
}

export default TitleMovie;
