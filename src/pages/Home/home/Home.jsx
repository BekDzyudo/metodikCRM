import React, { useRef } from "react";
import "./Home.css";
import { Header } from "../../../components";
import Fon from "../../../images/img/Fon.png";
import home_video from "../../../../public/video/home_video.mp4";

function Home() {
  const myVideo = useRef();
  // myVideo.current?.playbackRate = 0.75

  return (
    <div className="homeBag">
      <video
        className="home_video"
        ref={myVideo}
        loop
        muted
        autoPlay
        src={home_video}
      ></video>
      <Header />
      <div className="container">
        <div className="row home_box">
            <div className="col-md-6">
              <div className="name">
                <h1>Yagona metodik ta’minlash platformasi</h1>
              </div>
              <div className="home_btn">
              </div>
            </div>
            <div className="col-md-6">
              <div className="home_img">
                <img src={Fon} alt="rasm" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
