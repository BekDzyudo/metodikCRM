import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import useGetFetch from "../../../hooks/useGetFetch";

function BoshlangichTalimDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(-1);
  function handleActive(index) {
    setActive(index);
  }

  const { data } = useGetFetch(
    `https://rtr.profedu.uz/api/v1/rtr_base_app/subject-list/${id}/`
  );
  console.log(data);

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
          <Link
            to="/raqamli-talim-resurslari/boshlangich-professional-talim"
            className="bosh"
          >
            Boshlang'ich professional ta'lim
          </Link>
        </div>
      </div>
      <h1 className="GTitle">{data?.title}</h1>
      <div className="blockDetail">
        {data?.themes && (
          <>
            <div className="sidebarDetail">
              <h5 style={{ color: "white", textAlign: "center" }}>Mundarija</h5>
              <button
                onClick={() => {
                  setCategory("");
                  handleActive(-1);
                }}
                className={active == -1 ? "isActive" : "malumot_card"}
              >
                <p>1-mavzu</p>
                <span>
                  <GrNext />
                </span>
              </button>
            </div>
            <div className="contentDetail">
              <ul className="detailNav">
                <li>
                  <Link>Maruza matn</Link>
                </li>
                <li>
                  <Link>Media materiallar</Link>
                </li>
                <li>
                  <Link>Taqdimotlar</Link>
                </li>
                <li>
                  <Link>Ko'rgazma materiallar</Link>
                </li>
              </ul>
              <h2 className="themeTitle">
                SHAXSIY KOMPYUTERNING TEXNIK VOSITALARI
              </h2>
              <div className="textFon">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  facere unde eaque magnam voluptatum facilis quis porro
                  consequuntur, perspiciatis ex sapiente eum ipsa aliquid quo.
                  Aut eius ea rerum rem esse autem labore voluptatem distinctio,
                  quibusdam, dolores eos corporis nam dolore iure tempora
                  fugiat. Dolorum, consectetur eum ratione facere laudantium
                  aperiam id a sint. Architecto sapiente error iure doloremque,
                  nihil nesciunt eum praesentium nisi blanditiis dolorem ex
                  minus dolores quo soluta commodi atque mollitia quis minima,
                  fugit debitis dolor aliquam cum totam exercitationem. Quisquam
                  delectus odio dolores autem saepe nihil quidem quia, veritatis
                  similique placeat repellat animi consectetur impedit nostrum
                  consequuntur expedita atque voluptas, quaerat eum explicabo
                  debitis. Sequi corporis voluptate quam dolore assumenda ad
                  unde exercitationem, eum explicabo et excepturi voluptatum
                  praesentium possimus sit rerum ut doloremque eos maiores
                  repellendus? Voluptates dolorum dolor, velit omnis sint harum,
                  molestias, aliquid veritatis labore in doloribus ipsum
                  voluptatibus vitae nisi repellat minima natus. Veniam quo
                  aperiam eligendi dolor necessitatibus rerum perferendis, eum
                  asperiores dignissimos culpa molestiae cum at accusantium
                  mollitia fuga ipsum deleniti excepturi similique voluptatem
                  harum quasi magnam! Recusandae, voluptatem a ipsum vero natus
                  eligendi? Ab odio consequuntur molestias nisi, id accusantium
                  nihil dolore repudiandae possimus, illo maiores eius iste,
                  odit autem laboriosam inventore eos quod dolorum perspiciatis
                  tempora optio harum suscipit? Labore, non reiciendis. Itaque
                  atque expedita, consequatur soluta illo fugit ea beatae, a
                  reiciendis obcaecati in, blanditiis veritatis neque. Hic
                  eveniet voluptas animi molestiae, odit optio quis nisi est eos
                  voluptates dignissimos neque incidunt! Quod iusto voluptatem
                  eos a cupiditate quaerat impedit veniam corrupti enim maiores
                  rerum, amet minima hic odio aliquam aut voluptates explicabo
                  ullam iure corporis atque distinctio odit quidem? Porro quasi
                  omnis sunt amet dicta fugiat aliquid labore reprehenderit,
                  quibusdam officia repellat est minima odio, alias eaque
                  numquam fugit itaque. Minima, saepe repellendus incidunt,
                  tenetur delectus molestias labore dicta cum aperiam accusamus
                  fuga quaerat iusto necessitatibus impedit veritatis soluta
                  illum, doloremque omnis id odit recusandae. Facere nemo
                  excepturi tempore sunt rem hic similique explicabo libero
                  ullam saepe reprehenderit quibusdam earum cumque culpa
                  tempora, unde minus veritatis laboriosam maiores. Culpa,
                  commodi iusto itaque repellat quibusdam maxime incidunt
                  doloremque voluptas id nostrum corporis rerum suscipit
                  consequatur error cumque, inventore porro magnam saepe ratione
                  consectetur ducimus enim fuga laboriosam sit. Et aperiam
                  deleniti quisquam, illo, nulla minus labore voluptatibus
                  numquam necessitatibus est cumque. Cupiditate, ipsam ducimus
                  molestias aliquid laudantium eum inventore amet tenetur,
                  nulla, at maiores similique voluptatum molestiae quis earum
                  dolorum odit. Dolor ad itaque laborum incidunt quia porro cum
                  dignissimos delectus dolore! Sed adipisci doloremque itaque
                  cumque? Dolorum incidunt illo, et id iure temporibus pariatur
                  quo ab assumenda magni minus voluptate similique sequi,
                  delectus reiciendis minima eius! Porro et architecto autem
                  quibusdam facilis dicta, natus consectetur, sequi sunt cum
                  labore, aliquid nemo. Impedit omnis odio minima reprehenderit
                  voluptatem autem voluptatum architecto blanditiis earum magni,
                  quis, pariatur laudantium debitis. Perspiciatis neque
                  veritatis exercitationem maxime magnam nulla vitae
                  repellendus, provident fugit possimus dolorem mollitia cumque?
                  Praesentium, eius porro delectus ad accusamus voluptate,
                  dignissimos repellat necessitatibus harum excepturi aliquam
                  molestias!
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BoshlangichTalimDetail;
