import { Link, useParams } from "react-router-dom";
import useGetFetch from "../../../hooks/useGetFetch";
import PageLoader from "../../../Loader/PageLoader";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BiSolidCommentError } from "react-icons/bi";

export default function PedagogTarkib() {
  const { collageId } = useParams();
  const {
    data: teachers,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/pedagoklar/${collageId}`);

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
      {teachers?.length ? (
        <div className="pedagog_body">
          {teachers.map((item, index) => {
            return (
              <Link key={index} className="pedagog_card">
                <div className="pedagog_img">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h2>Familya:</h2>
                  <h3>{item.last_name}</h3>
                  <h2>Ism:</h2>
                  <h3>{item.first_name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="noData">
          <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
        </div>
      )}
    </>
  );
}
