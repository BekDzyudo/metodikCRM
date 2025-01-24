import React from "react";
import useGetFetch from "../../../hooks/useGetFetchProfil";
import { Link, useParams } from "react-router-dom";
import { BiSolidCommentError } from "react-icons/bi";

function TayyorlanadiganKasbDetails() {
  const { kasbId } = useParams();
  const { data } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/kasb/${kasbId}/`
  );
  
  return (
    <>
      <p className="kasbTitle">{data?.name}</p>
      <div className="kasbDetail col-12">
        <div className="commentKasb">
          <div className="talim_detail-img">
            <img src={data?.image} alt="" />
          </div>
          <div className="talim_detail-text">
            <h4>Izohlar</h4>
            <textarea placeholder="Izoh matni..."></textarea>
            <div className="talim_detail-btn">
              <Link>Yuborish</Link>
            </div>
          </div>
        </div>
        <div className="kasb-cards">
          <h4>Ta'lim dasturlari</h4>
          {data?.talim_dasturi ? (
            data.talim_dasturi.map((item) => {
              return (
                <div key={item.id} className="talim_detail-card">
                  <div className="talim_detail-title">
                    <p>{item.name}</p>
                    <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
                  </div>
                  <div className="talim_detail-btn">
                    <Link target="blanck" to={item.file}>Yuklab olish</Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="noData">
              <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
            </div>
          )}
          {/* <div className="talim_detail-card">
          <div className="talim_detail-title">
            <p>O'quv fanlari yoki modullar</p>
            <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
          </div>
          <div className="talim_detail-btn">
            <Link>Yuklab olish</Link>
          </div>
        </div>
        <div className="talim_detail-card">
          <div className="talim_detail-title">
            <p>O'quv dastur</p>
            <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
          </div>
          <div className="talim_detail-btn">
            <Link>Yuklab olish</Link>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default TayyorlanadiganKasbDetails;
