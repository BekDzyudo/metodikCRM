// css
import "./hududlar.css";
// rrd
import { Link } from "react-router-dom";
// components
import PageLoader from "../../Loader/PageLoader";
// hook
import useGetFetch from "../../hooks/useGetFetch";

function Viloyatlar() {
  const { data: regions, isPending, error } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/region/`)

  return (
    <>
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
      {regions && (
        <div className="container">
          <div className="top">
            <div className="left">
              <Link to="/" className="bosh">
                Bosh sahifa
              </Link>
              <Link to="/viloyatlar" className="back">
              Viloyatlar
              </Link>
            </div>
          </div>
          <div className="hudud_body">
            <h1>Hududlar</h1>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col-12">
                <div className="hudud_cards">
                  {regions.map((region) => {
                    const str = region.name.split(" ");
                    return (
                      <div className="" key={region.id}>
                        <div className="hudud_card">
                          <div className="hudud_card-img">
                            <img src={region.image} alt="" />
                          </div>
                          <h4 className="hudud_card-name">
                            {str.map((item) => {
                              return <p key={item}>{item}</p>;
                            })}
                          </h4>

                          <div className="hudud_card-btn">
                            <Link to={`/viloyatlar/tumanlar/${region.id}`}>
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
        </div>
      )}
    </>
  );
}

export default Viloyatlar;
