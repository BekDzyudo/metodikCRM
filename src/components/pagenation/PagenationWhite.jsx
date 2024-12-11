import React from "react";
import "./PagenationWhite.css";

function PagenationWhite() {
  return (
    <div className="pagination_box">
      <div className="paginationwhite">
        <a href="/">&laquo;</a>
        <a className="active" href="/">
          1
        </a>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">...</a>
        <a href="/">10</a>
        <a href="/">&raquo;</a>
      </div>
    </div>
  );
}

export default PagenationWhite;
