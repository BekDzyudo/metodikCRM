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
        <div className="row">
          <div className="col-12 home_box">
            <div className="col-6">
              <div className="name">
                <h1>Yagona metodik ta’minlash platformasi</h1>
                {/* <h1 class="animated-title">
                  <span>Y</span>
                  <span>A</span>
                  <span>G</span>
                  <span>O</span>
                  <span>N</span>
                  <span>A</span>
                  <span></span>
                  <span>M</span>
                  <span>E</span>
                  <span>T</span>
                  <span>O</span>
                  <span>D</span>
                  <span>I</span>
                  <span>K</span>
                  <span> </span>
                  <span>T</span>
                  <span>A</span>
                  <span>’</span>
                  <span>M</span>
                  <span>I</span>
                  <span>N</span>
                  <span>L</span>
                  <span>A</span>
                  <span>S</span>
                  <span>H</span>
                  <span> </span>
                  <span>P</span>
                  <span>L</span>
                  <span>A</span>
                  <span>T</span>
                  <span>F</span>
                  <span>O</span>
                  <span>R</span>
                  <span>M</span>
                  <span>A</span>
                  <span>S</span>
                  <span>I</span>
                </h1> */}
              </div>
              {/* <div className="text">
                <p>
                  Professional talimni rivojlantirish instituti
                </p>
              </div> */}
              <div className="home_btn">
                {/* <button className="BTN">Batafsil</button> */}
              </div>
            </div>
            <div className="col-6">
              <div className="home_img">
                <img src={Fon} alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
