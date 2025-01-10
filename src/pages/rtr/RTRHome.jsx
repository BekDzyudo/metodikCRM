import React, { useContext } from "react";
import { Link } from "react-router-dom";
import hudud from "../../images/img/hudud.jpg";
import useGetFetch from "../../hooks/useGetFetch";
import PageLoader from "../../Loader/PageLoader";
import { GlobalContext } from "../../contexts/GlobalContext";

function RTRHome() {
  const {data, isPending, error} = useGetFetch("https://rtr.profedu.uz/api/v1/rtr_base_app/category-level-list/")
  console.log(data);

  const {setBoshlangichSidebar, setOrtaSidebar, setMaxsusSidebar} = useContext(GlobalContext)

if(data){
  localStorage.setItem("boshlangich", JSON.stringify(data[0].general_subjects))
  localStorage.setItem("orta", JSON.stringify(data[1].general_subjects))
  localStorage.setItem("maxsus", JSON.stringify(data[2].general_subjects))
}
  
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
        </div>
      </div>
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
     {
      data && (
        <div className="rtrHomeRow">
        <Link to="boshlangich-professional-talim" className="card" onClick={()=>setBoshlangichSidebar(data[0].general_subjects)}>
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>{data[0].title}</h2>
        </Link>
        <Link to="orta-professional-talim" className="card" onClick={()=>setOrtaSidebar(data[1].general_subjects)}>
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>{data[1].title}</h2>
        </Link>
        <Link to="orta-maxsus-professional-talim" className="card" onClick={()=>setMaxsusSidebar(data[2].general_subjects)}>
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>{data[2].title}</h2>
        </Link>
      </div>
      )
     }
    </div>
  );
}

export default RTRHome;
