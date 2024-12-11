import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumps() {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumbs" key={crumb}>
          <Link to={currentLink.join("")} style={{ color: "white" }}>
            {crumb}
          </Link>
        </div>
      );
    });
  return <div className="url">{crumbs}</div>;
}

export default BreadCrumps;
