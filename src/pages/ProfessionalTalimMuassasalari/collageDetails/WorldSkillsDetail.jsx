import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetFetch from "../../../hooks/useGetFetch";
import { MdOutlineErrorOutline } from "react-icons/md";
import PageLoader from "../../../Loader/PageLoader";
import { BiSolidCommentError } from "react-icons/bi";

function WorldSkillsDetail() {
  let { worldSkillId } = useParams();
  const {
    data: worldSkillsDetailObj,
    isPending,
    error,
  } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/world-skills/${worldSkillId}`
  );
const month = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

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
      {worldSkillsDetailObj ? (
        <div className="detail">
          <div className="image-content">
            <div className="talim_detail-img">
              <img src={worldSkillsDetailObj.image} alt="" />
            </div>
            <div className="talim_detail-text">
              <h4>Izohlar</h4>
              <textarea placeholder="Izoh matni..."></textarea>
              <div className="talim_detail-btn">
                <Link>Yuborish</Link>
              </div>
            </div>
          </div>
          <div className="talim_detail-cards">
            <h4>{worldSkillsDetailObj.name}</h4>
            {worldSkillsDetailObj.files?.map((item) => {
              return (
                <div key={item.id} className="talim_detail-card">
                  <div className="talim_detail-title">
                    <p>{item.name}</p>
                    <span>So’ngi o’zgartirilgan sana:  
                      {" "}{new Date(item.created_at).getDate() < 10
                        ? "0" + new Date(item.created_at).getDate()
                        : new Date(item.created_at).getDate()}{" "}
                      {month[new Date(item.created_at).getMonth()]}{" "}
                      {new Date(item.created_at).getFullYear() + "-yil"}
                      </span>
                  </div>
                  <div className="talim_detail-btn">
                    <Link to={item.file} target="blank">Yuklab olish</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="noData">
          <h1>Hozircha ma'lumot yuklanmagan</h1> <BiSolidCommentError />
        </div>
      )}
    </>
  );
}

export default WorldSkillsDetail;
