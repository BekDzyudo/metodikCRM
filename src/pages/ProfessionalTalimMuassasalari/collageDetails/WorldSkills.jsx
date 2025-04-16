import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetFetch from "../../../hooks/useGetFetch";
import { MdOutlineErrorOutline } from "react-icons/md";
import PageLoader from "../../../Loader/PageLoader";
import { BiSolidCommentError } from "react-icons/bi";

export default function WorldSkills() {
  let { tumanId, muassasaId, collageId } = useParams();
  const {
    data: worldSkillsArr,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/world-skills`);

  if (error) {
    return (
      <div className="noData">
        <h1>Sahifa topilmadi</h1> <MdOutlineErrorOutline />{" "}
      </div>
    );
  }
  return (
    <>
      {isPending && <PageLoader />}
      {worldSkillsArr?.length ? (
        <div className="malumot_qisqa">
          <div className="qisqa_top">
            <div className="qisqa_title">
              <p>WorldSkills</p> <span>{worldSkillsArr.length}</span>
            </div>
            {/* <div className="talim_search">
              <i className="bi bi-search"></i>
              <input type="search" placeholder="izlash" />
            </div> */}
          </div>
          <div className="world_cards">
            {worldSkillsArr.map((worldSkills) => {
              return (
                <div key={worldSkills.id} className="col-3 world_card">
                  <div className="world_img">
                    <img src={worldSkills.image} alt="rasm" />
                  </div>
                  <div className="world_desc">
                    <div className="world_text">
                      <p>{worldSkills.name}</p>
                      {/* <span>Boshlang‘ich professional ta'lim</span> */}
                    </div>
                    <div className="world-btns">
                      
                        <Link className="world_yuklab"
                          to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/worldSkills/${worldSkills.id}`}
                        >
                          Kirish
                        </Link>
                      
                      <div className="world_card-bottom">
                        <span>Kasb</span> <span>2023/2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="noData">
          <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
        </div>
      )}
    </>
  );
}
