import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

import useGetFetch from "../../hooks/useGetFetch";
import PageLoader from "../../Loader/PageLoader";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function MuassasaMalumotiLayout() {
  const navigate = useNavigate();
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
        <select
          class="form-select d-md-none mb-3"
          aria-label="Default select example"
          onChange={(e) => {
            if (e.target.value) {
              navigate(e.target.value);
            }
          }}
        >
          <option value="" selected disabled>
            Tanlang
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}`}
          >
            Umumiy ma'lumotlari
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/ustav`}
          >
            Ustavi
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/vasiylik-kengashi`}
          >
            Vasiylik kengashlari
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/tayyorlanadigan-kasblar`}
          >
            Tayyorlanadigan kasb va mutaxassisliklar
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/pedogoglar-tarkibi`}
          >
            Pedagoglar tarkibi
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/rivojlanish-strategiyasi`}
          >
            Rivojlanish strategiyasi
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/qisqa-muddatli-kurslar`}
          >
            Qisqa muddatli kurslar
          </option>
          <option
            value={`/viloyatlar/tumanlar/${tumanId}/muassasalar/${muassasaId}/collages/${collageId}/worldSkills`}
          >
            WorldSkills
          </option>
        </select>
        <div className="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
          <div className="col-12">
            <div className="malumot_cards">
              <div className="col-4 sidebar d-none d-md-flex">
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
              <div className="col-sm-12 col-md-8 fileBlok">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
