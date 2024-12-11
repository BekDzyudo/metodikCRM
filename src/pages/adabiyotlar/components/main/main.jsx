import React from "react";
import "./main.scss";
import { Sidebar } from "./sidebar/sidebar";
import { Bookblok } from "./booksBlok/bookblok";

export function MainAdabiyot() {
  return (
    <div className="adabiyotlarMain">
      <Sidebar />
      <Bookblok />
    </div>
  );
}
