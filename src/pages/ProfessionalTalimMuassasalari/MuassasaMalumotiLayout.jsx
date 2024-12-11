import { Link, NavLink, Outlet, useParams } from "react-router-dom";

import useGetFetch from "../../hooks/useGetFetch";
import PageLoader from "../../Loader/PageLoader";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function MuassasaMalumotiLayout() {
  let { tumanId, muassasaId, collageId } = useParams();
  const {
    data: collage,
    isPending,
    error,
  } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/college-detail/${collageId}`
  );
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
            <Link
              to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}`}
              className="bosh"
            >
              Muassasalar
            </Link>
            <Link to="" className="back">
              {collage?.name}
            </Link>
          </div>
          <div className="right">
            <Link
              to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}`}
            >
              <i className="bi bi-arrow-left-short"></i> Orqaga
            </Link>
          </div>
        </div>
        <h3 className="malumot_title">{collage?.name}</h3>
        <div className="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
          <div className="col-12">
            <div className="malumot_cards">
              <div className="col-4 sidebar">
                <NavLink
                to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}`}
                end
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Umumiy ma'lumotlari</p>
                </NavLink>
                <NavLink
                  to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/ustav`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Ustavi</p>
                </NavLink>
                <NavLink
                  to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/vasiylik-kengashi`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Vasiylik kengashlari</p>
                </NavLink>
                <NavLink
                to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/tayyorlanadigan-kasblar`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Tayyorlanadigan kasb va mutaxassisliklar</p>
                </NavLink>
                <NavLink
                  to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/pedogoglar-tarkibi`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Pedagoglar tarkibi</p>
                </NavLink>
                <NavLink
                  to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/rivojlanish-strategiyasi`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Rivojlanish strategiyasi</p>
                </NavLink>
                <NavLink
                to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/qisqa-muddatli-kurslar`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>Qisqa muddatli kurslar</p>
                </NavLink>
                <NavLink
                  to={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/worldSkills`}
                  className={({ isActive }) =>
                    isActive ? "isActive" : "malumot_card"
                  }
                >
                  <p>WorldSkills</p>
                </NavLink>
              </div>
              <div className="col-8">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
