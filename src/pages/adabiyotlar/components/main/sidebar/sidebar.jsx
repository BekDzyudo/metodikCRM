import React from "react";
import { NavLink } from "react-router-dom";
import useGetFetch from "../../../../../hooks/useGetFetch";

export function Sidebar() {
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/category-adabiyot/`
  );
  // console.log(data);

  return (
    <div className="sidebar">
      <div className="talim_search">
        <input type="search" placeholder="izlash" />
      </div>
      {data && (
        <div className="sidebar">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? "isActive" : "malumot_card"
            }
          >
            <p>Barchasi</p>
          </NavLink>
          {data.map((item) => {
            return (
              <NavLink
              key={item.id}
                to={`/${item.id}`}
                className={({ isActive }) =>
                  isActive ? "isActive" : "malumot_card"
                }
              >
                <p>{item.name}</p>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
