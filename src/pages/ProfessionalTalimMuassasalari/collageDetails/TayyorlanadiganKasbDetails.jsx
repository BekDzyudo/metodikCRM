import React from "react";
import useGetFetch from "../../../hooks/useGetFetch";
import { Link, useParams } from "react-router-dom";
import { BiSolidCommentError } from "react-icons/bi";

function TayyorlanadiganKasbDetails() {
  const { kasbId } = useParams();
  const { data } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/kasb/${kasbId}/`
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
  
  return (
    <>
      <p className="kasbTitle">{data?.name}</p>
      <div className="kasbDetail col-12">
        <div className="commentKasb d-none d-md-block">
          <div className="talim_detail-img">
            <img src={data?.image} alt="" />
          </div>
          {/* <div className="talim_detail-text">
            <h4>Izohlar</h4>
            <textarea placeholder="Izoh matni..."></textarea>
            <div className="talim_detail-btn">
              <Link>Yuborish</Link>
            </div>
          </div> */}
        </div>
        <div className="kasb-cards">
          <h4>Ta'lim dasturlari</h4>
          {data?.talim_dasturi ? (
            data.talim_dasturi.map((item) => {
              return (
                <div key={item.id} className="talim_detail-card">
                  <div className="talim_detail-title">
                    <p>{item.name}</p>
                    <span>
                    So'ngi o'zgartirilgan sana: {" "}
                    {new Date(item.created_at).getDate() < 10
                        ? "0" + new Date(item.created_at).getDate()
                        : new Date(item.created_at).getDate()}
                      -
                     {month[new Date(item.created_at).getMonth()]}
                      , {" "}
                      {new Date(item.created_at).getFullYear()}-yil
                      
                    </span>
                  </div>
                  <div className="talim_detail-btn">
                    <Link target="blanck" to={item.file}>Yuklash</Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="noData">
              <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TayyorlanadiganKasbDetails;
