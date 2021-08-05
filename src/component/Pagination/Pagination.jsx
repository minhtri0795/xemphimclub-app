import React, { useState } from "react";
import "./Pagination.scss";
function Pagination({ page, totalPage, handlePageChange }) {
  const [goPage, setGoPage] = useState(page);
  const handleClick = (newpage) => {
    handlePageChange(newpage);
  };
  return (
    <div className="pagination-wrapper">
      <div className="btn-wrapper">
        <button
          disabled={page === 1}
          onClick={() => {
            handleClick(page - 1);
          }}
        >
          Preview
        </button>
        <button
          disabled={page === totalPage}
          onClick={() => {
            handleClick(page + 1);
          }}
        >
          Next
        </button>
      </div>
      <div className="current-page">
        <span style={{ color: "#fff" }}>
          Page {page} of {totalPage}
        </span>
      </div>
      <div className="goto-page">
        <input
          onChange={(e) => {
            setGoPage(e.target.value);
          }}
          type="number"
          placeholder="Goto page"
        />
        <button
          onClick={() => {
            if (goPage > totalPage || goPage < 1) {
              return;
            }
            handleClick(goPage);
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default Pagination;
