import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PageLoader() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "60%",
        width: "100px",
        height: "100px",
      }}
      className="spinner-border text-light"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default PageLoader;
