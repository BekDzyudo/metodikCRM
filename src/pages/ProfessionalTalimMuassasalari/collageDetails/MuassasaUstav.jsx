import { useParams } from "react-router-dom";
import useGetFetch from "../../../hooks/useGetFetch";
import PageLoader from "../../../Loader/PageLoader";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BiSolidCommentError } from "react-icons/bi";

export default function MuassasaUstav() {
  const { collageId } = useParams();
  const {
    data: collage,
    isPending,
    error,
  } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/college-detail/${collageId}`
  );

  const newPlugin = defaultLayoutPlugin();
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
      {collage?.ustav ? (
        <div className="malumot_body">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={collage.ustav} plugins={[newPlugin]} />
          </Worker>
        </div>
      ) : (
        <div className="noData">
          <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
        </div>
      )}
    </>
  );
}
