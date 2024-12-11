// rrd
import { Link, useLocation, useParams } from "react-router-dom";
// hook
import useGetFetch from "../../hooks/useGetFetch";
// components
import PageLoader from "../../Loader/PageLoader";

function Muassasalar() {
  let {tumanId, muassasaId} = useParams()
  const { data: collages, isPending, error } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/district-college/${muassasaId}`)
  // let {tumanId} = useLocation().state || {}
  

  return (
    <>
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
      {
      collages && (
        <div className="container">
          <div className="top">
            <div className="left">
              <Link to="/" className="bosh">
                Bosh sahifa
              </Link>
              <Link
                to="/viloyatlar"
                className="bosh"
              >
                Viloyatlar
              </Link>
              <Link
                to={`/viloyatlar/tumanlar/${tumanId}`}
                className="bosh"
              >
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
              <div className="hudud_cards">
                {collages.map((college) => {
                  const str = college.name.split(" ");
                  return (
                    <div className="" key={college.id}>
                      <div className="hudud_card">
                        <div className="hudud_card-img">
                          <img src= {college.image} alt="" />
                        </div>
                        <h4 className="hudud_card-name">
                          {str.map((item) => {
                            return <p key={item}>{item}</p>;
                          })}
                        </h4>

                        <div className="hudud_card-btn">
                          <Link to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${college.id}`}>
                            Batafsil
                          </Link>
                        </div>
                      </div>
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
