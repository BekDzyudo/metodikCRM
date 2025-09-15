// rrd
import { Link, useLocation, useParams } from "react-router-dom";
// hook
import useGetFetch from "../../hooks/useGetFetch";
// components
import PageLoader from "../../Loader/PageLoader";
import { Spa } from "@mui/icons-material";

function Muassasalar() {
  let { tumanId, muassasaId } = useParams();
  const {
    data: collages,
    isPending,
    error,
  } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/district-college/${muassasaId}`
  );
  // let {tumanId} = useLocation().state || {}

  return (
    <>
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
      {collages && (
        <div className="container">
          <div className="top">
            <div className="left">
              <Link to="/" className="bosh">
                Bosh sahifa
              </Link>
              <Link to="/viloyatlar" className="bosh">
                Viloyatlar
              </Link>
              <Link to={`/viloyatlar/tumanlar/${tumanId}`} className="bosh">
                Tumanlar
              </Link>
              <Link className="back">Muassasalar</Link>
            </div>
            <div className="right">
              <Link to={`/viloyatlar/tumanlar/${tumanId}`}>
                <i className="bi bi-arrow-left-short"></i> Orqaga
              </Link>
            </div>
          </div>
          <h1 className="shahar_title">Muassasalar</h1>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col-12">
              <div className="hudud_cards row">
                {collages.map((college) => {
                  const str = college.name.split(" ");
                  return (
                    <div className="hudud_card1 col-sm-12 col-xs-6 col-md-4 col-xl-3">
                      <Link
                        className="hudud_card"
                        to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${college.id}`}
                        key={college.id}
                      >
                        <div className="hudud_card-img">
                          <img src={college.image} alt="" />
                        </div>
                        {college.name.length > 50 ? (
                          <h4 className="hudud_card-name">
                            {college.name.slice(0, 45)}...
                          </h4>
                        ) : (
                          <h4 className="hudud_card-name">{college.name}</h4>
                        )}

                        <div className="hudud_card-btn">
                          <Link>Batafsil</Link>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Muassasalar;
