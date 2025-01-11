import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import useGetFetch from "../../../hooks/useGetFetch";
import PageLoader from "../../../Loader/PageLoader";
import ReactPlayer from "react-player";

function MaxsusTalimDetail() {
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const [material, setMaterial] = useState("maruza");

  function handleActive(index) {
    setActive(index);
  }

  const { data, isPending, error } = useGetFetch(
    `https://rtr.profedu.uz/api/v1/rtr_base_app/subject-list/${id}/`
  );

  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (data?.themes) {
      setTheme(data.themes[0]);
    }
  }, [data]);


  function SwitchCase(btn) {
    switch (btn) {
      case "maruza":
        return setMaterial("maruza");
      case "media":
        return setMaterial("media");
      case "korgazma":
        return setMaterial("korgazma");
      case "savol":
        return setMaterial("savol");
      default:
        return setMaterial("maruza");
    }
  }

  return (
    <div className="container">
      <h1 className="GTitle">{data?.title}</h1>
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
          <Link
            to="/raqamli-talim-resurslari/orta-maxsus-professional-talim"
            className="bosh"
          >
            O'rta maxsus professional ta'lim
          </Link>
        </div>
        <div className="right">
          {
            data?.author && <Link
            to={data?.author?.file}
            target="blank"
            style={{ borderBottom: "1px solid white" }}
          >
            Muallif guvohnomasi
          </Link>
          }
        </div>
      </div>

      <div className="blockDetail">
        {isPending && <PageLoader />}
        {error && <div className="noData">{error}</div>}
        {data?.themes && (
          <>
            <div className="sidebarDetail">
              <h5 style={{ color: "white", textAlign: "center" }}>Mundarija</h5>
              {data.themes.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleActive(index);
                      setTheme(item);
                    }}
                    className={active == index ? "isActive" : "malumot_card"}
                  >
                    <p>{item.title_number}-mavzu</p>
                    <span>
                      <GrNext />
                    </span>
                  </button>
                );
              })}
            </div>
            {theme && (
              <div className="contentDetail">
                <ul className="detailNav">
                  {theme.content && (
                    <li>
                      <Link onClick={() => SwitchCase("maruza")}>
                        Maruza matn
                      </Link>
                    </li>
                  )}

                  {theme.media && (
                    <li>
                      <Link onClick={() => SwitchCase("media")}>
                        Media materiallar
                      </Link>
                    </li>
                  )}

                  {theme.presentation && (
                    <li>
                      <Link to={theme.presentation} target="_blank">Taqdimotlar</Link>
                    </li>
                  )}

                  {theme.show_material && (
                    <li>
                      <Link onClick={() => SwitchCase("korgazma")}>
                        Ko'rgazma materiallar
                      </Link>
                    </li>
                  )}

                  {theme.practical_assignment && (
                    <li>
                      <Link onClick={() => SwitchCase("savol")}>
                        Nazariy-amaliy topshiriqlar
                      </Link>
                    </li>
                  )}

                  {theme.educational_technologies && (
                    <li>
                      <Link to={theme.educational_technologies} target="_blank">Ta'lim texnologiyalari</Link>
                    </li>
                  )}

                  {theme.methodological_recommendation && (
                    <li>
                      <Link>Glossary</Link>
                    </li>
                  )}
                </ul>
                <h2 className="themeTitle">{theme.title}</h2>
                {material == "maruza" && (
                  <div className="textFon">
                    <p dangerouslySetInnerHTML={{ __html: theme.content }}></p>
                  </div>
                )}
                {material == "media" && (
                  <div className="media">
                    <ReactPlayer
                      controls
                      url={theme.media}
                      className="mediaContent"
                    />
                  </div>
                )}
                {material == "korgazma" && (
                  <div className="korgazma">
                    {
                        theme.show_material.map((item)=>{
                            return(
                                <img key={item.id} src={item.content} alt="" />
                            )
                        })
                    }
                  </div>
                )}
                {material == "savol" && (
                  <div className="textFon savol">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: theme.practical_assignment,
                      }}
                    ></p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MaxsusTalimDetail;
