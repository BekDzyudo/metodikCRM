import React, { useContext, useEffect } from "react";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import "./materialDetail.scss";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { GrFormPreviousLink } from "react-icons/gr";
import useGetFetchProfil from "../../hooks/useGetFetchProfil"
import { AuthContext } from "../../contexts/AuthContext";

function MaterialDetail() {
    // const navigate = useNavigate()
    const {id} = useParams()
  const {userData , auth} = useContext(AuthContext)  

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const {data} = useGetFetchProfil(`${import.meta.env.VITE_BASE_URL}/birlashma/material-detail/${id}/`)

  const handleDownload = async () => {

    await fetch(`${import.meta.env.VITE_BASE_URL}/birlashma/dowloand-material/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: userData.userId, material: id })
    }).then((res) => {
        if (!res.ok) {
          return res.json().then(err => {
            // console.log(err);
        });
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
      })

    window.open(data?.file, "_blank");
  };

  return (
    <div className="materialDetail">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="pdfBtnShow">
            <Link to="/materiallar"> <GrFormPreviousLink style={{fontSize:"20px"}}/> orqaga</Link>
          </div>
        </div>
        <div className="pdfContainer">
         {
            data?.file && (
                <div className="content">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <div style={{ borderBottom: "1px solid #ccc", padding: "4px", display:"flex", justifyContent:"space-around", background:"white" }}>
                    <Toolbar>
                      {(props) => {
                        const { Zoom, ZoomIn, ZoomOut, Rotate, CurrentPageLabel, NumberOfPages} =
                          props;
                        return (
                          <>
                          <span style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <span ><CurrentPageLabel /> / <NumberOfPages /></span>
                          </span>
                            {/* <Rotate /> */}
                            <ZoomOut />
                            <Zoom />
                            <ZoomIn />
                            {
                              auth.refreshToken ? <button style={{background:"none"}} onClick={handleDownload}><BsDownload/></button> : <Link to="/login" style={{background:"none", color:"black"}} ><BsDownload/></Link>
                            }
                            
                          </>
                        );
                      }}
                    </Toolbar>
                  </div>
                  <div style={{ height: "120vh" }}>
                    <Viewer
                      fileUrl={data?.file}
                      plugins={[toolbarPluginInstance]}
                    />
                  </div>
                </Worker>
          </div>
            )
         }
        </div>
      </div>
      <FooterWhite />
    </div>
  );
}

export default MaterialDetail;
