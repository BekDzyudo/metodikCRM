// rrd
import { Link, useParams } from "react-router-dom";
// hook
import useGetFetch from "../../hooks/useGetFetch";
// component
import PageLoader from "../../Loader/PageLoader";

export default function Tumanlar() {
  const {tumanId} = useParams()
  
  const { data, isPending, error } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/district/${tumanId}`)
  

  return (
    <>
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
      {data?.districts && (
        <div className="container">
          <div className="top">
            <div className="left">
              <Link to="/" className="bosh">
                Bosh sahifa
              </Link>
              <Link to="/viloyatlar" className="bosh">
              Viloyatlar
              </Link>
              <Link className="back">Tumanlar</Link>
            </div>
            <div className="right">
              <Link to="/viloyatlar">
                <i className="bi bi-arrow-left-short"></i> Orqaga
              </Link>
            </div>
          </div>
          <h1 className="shahar_title">{data.name}</h1>
              <div className="muassasa_cards">
                {
                  data.districts.length > 0 ?
                data.districts.map((district) => {
                  return (
                    <Link to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${district.id}`} key={district.id}>
                      <div className="muassasa_card">
                        <div className="muassasa_doira-top"></div>
                        <div>
                          <p>{district.name}</p>
                        </div>
                        <div className="muassasa_doira-bottom"></div>
                      </div>
                    </Link>
                  );
                })
                : <div style={{width:"100%"}}><div className="noData">Tumanlar kiritilmagan</div></div>
              }
              </div>
        </div>
      )}
    </>
  );
}
