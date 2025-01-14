import React, { useCallback, useContext, useEffect, useState } from "react";
import editIcon from "../../../images/editIcon.svg";
import ilmiyDaraja from "../../../images/ilmiyDaraja.svg";
import ilmiyUnvon from "../../../images/ilmiyUnvon.svg";
import yaratganPraktiklar from "../../../images/yaratganPraktiklar.svg";
import worldSkills from "../../../images/worldSkills.svg";
import staj from "../../../images/staj.svg";
import oquvMeyoriyQatnashish from "../../../images/oquvMeyoriyQatnashish.svg";
import musobaqaGolibi from "../../../images/musobaqaGolibi.svg";
import pulsPortfolio from "../../../images/pulsPortfolio.svg";
import { PortfolioContext } from "./contexts/editPortfolioContext";
import telba from "../../../images/img/telba.jpg"
import { Link } from "react-router-dom";
import { Pagination } from '@mui/material';

export function Portfolio() {
  getPortfolio();
  const [newArr, setNewArr] = useState([]);
  const { setEditObj, setBlok, render, setAddBlok, AddObj } =
    useContext(PortfolioContext);
  let portfolioArr = [];

  function getPortfolio() {
    fetch(
      `https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio.json`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Nimadir xato");
        return res.json();
      })
      .then((data) => {
        portfolioArr = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
          };
        });
        setNewArr(portfolioArr);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPortfolio();
  }, [render]);

  useEffect(() => {
    getPortfolio();
  }, [AddObj]);

  function editFind(id) {
    setBlok(true);
    let findElement = newArr.find((item, index) => {
      return index == id;
    });
    setEditObj(findElement);
  }



  const [isActivesohasi, setIsActivesohasi] = useState(false);
  const [selectedsohasi, setIsSelectedsohasi] = useState("Qaytarilgan");



  return (
    <div className="portfolio">
      <div className="portfolioList">

        {newArr.map((item, index) => (
          <div key={item.id} className="portfolioItem">

            <div className="portfolioTitle">
              <h4>
                REYTING: 26
              </h4>
              <img
                src={editIcon}
                id="editIconPortfolioBtn"
                alt=""
                onClick={() => editFind(index)}
              />
            </div>

            <div className="portfolioDesc">

              <div className="teacherBlok">
                <div className="teacherImg">
                  <img src={telba} alt="img" />
                </div>
                <div>
                  <div className="teachername">
                    <h4>Xakimov Sardor <br />
                      G‘ayrat o‘g‘li</h4>
                    <p>Qora-Qol 2-so’nli texnikumi</p>
                  </div>
                </div>
              </div>
              <div className="portfolioLeft">
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={ilmiyDaraja} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Ilmiy daraja:</h4>
                    <p>{item.ilmiyDaraja}</p>
                  </div>
                </div>
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={ilmiyUnvon} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Ilmiy unvon:</h4>
                    <p>{item.ilmiyUnvoni}</p>
                  </div>
                </div>
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={yaratganPraktiklar} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Yaratgan praktiklar:</h4>
                    <p>{item.yaratganPraktiklari}</p>
                  </div>
                </div>
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={worldSkills} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Worldskills mutaxassis:</h4>
                    <p>{item.worldSkillsMutaxassis}</p>
                  </div>
                </div>
              </div>
              <div className="portfolioRight">
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={staj} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Ta'lim sohasidagi umumiy ish staji:</h4>
                    <p>{item.ishStaji}</p>
                  </div>
                </div>
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={oquvMeyoriyQatnashish} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>O'quv-me'yoriy ishlashda qatnashganligi:</h4>
                    <p>{item.oquvMeyoriyIshlar}</p>
                  </div>
                </div>
                <div className="portfolioChild">
                  <div className="portfolioIcon">
                    <img src={musobaqaGolibi} alt="" />
                  </div>
                  <div className="portfolioItemDesc">
                    <h4>Musobaqa g'olibi:</h4>
                    <p>{item.musobaqaGolibi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="document_new">
        <div className="jadval_top">
          <div className="jadval_name">
            <h4>Materiallarni qoshish</h4>
          </div>
          <div className="hujjat_turi" style={{ display: 'flex', alignItems: "center" }}>
            <p> Hujjat turi:</p>
            <div className="select_field" >

              <div className="dropdown">
                <div
                  onClick={(e) => {
                    setIsActivesohasi(!isActivesohasi);
                  }}
                  className="select_dropdown-btn"
                >
                  {selectedsohasi}
                  <span
                    className={
                      isActivesohasi ? "fas fa-caret-up" : "fas fa-caret-down"
                    }
                  />
                </div>
                <div
                  className="dropdown-content"
                  style={{ display: isActivesohasi ? "block" : "none" }}
                >
                  <div
                    onClick={(e) => {
                      setIsSelectedsohasi(e.target.textContent);
                      setIsActivesohasi(!isActivesohasi);
                    }}
                    className="item"
                  >
                    Yangi
                  </div>
                  <div
                    className="item"
                    onClick={(e) => {
                      setIsSelectedsohasi(e.target.textContent);
                      setIsActivesohasi(!isActivesohasi);
                    }}
                  >
                    Tasdiqlangan
                  </div>
                  <div
                    className="item"
                    onClick={(e) => {
                      setIsSelectedsohasi(e.target.textContent);
                      setIsActivesohasi(!isActivesohasi);
                    }}
                  >
                    Rad erilgan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => setAddBlok(true)} className="addPortfolioBtn">
            + Hujjat kushish
          </button>
        </div>
        <hr />
        <div className="document_table">
          <table className='table'>
            <thead className='table-header'>
              <tr>
                <th>№</th>
                <th>Jo'natuvchi hudud</th>
                <th>Jo'natuvchi</th>
                <th>Hujjatning  yaratilgan sanasi</th>
                <th>Hujjat raqami</th>
                <th></th>

              </tr>
            </thead>
            <tr>
              <td>1</td>
              <td>Samarqand shaxar,  Bulung'ur tumani kasb-hunar maktabi</td>
              <td>Alimuxamedova Dilnoza Muxameddova</td>
              <td className='new'><b>02.08.2020</b>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="white" />
                </svg> Yangi</p></td>
              <td><b>№65848489894</b></td>
              <td><Link to="/Document/IncomingDocumentDetail">Ko'rish</Link> </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Samarqand shaxar,  Bulung'ur tumani kasb-hunar maktabi</td>
              <td>Alimuxamedova Dilnoza Muxameddova</td>
              <td className='new'><b>02.08.2020</b>
                <p className="rad"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="white" />
                </svg> Rad etildi</p></td>
              <td><b>№65848489894</b></td>
              <td><Link to="/Document/ReturnedDocumentDetail">Ko'rish</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Samarqand shaxar,  Bulung'ur tumani kasb-hunar maktabi</td>
              <td>Alimuxamedova Dilnoza Muxameddova</td>
              <td className='new'><b>02.08.2020</b>
                <p className="tasdiq"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="white" />
                </svg> Tasdiqlangan</p></td>
              <td><b>№65848489894</b></td>
              <td><Link to="/Document/ApprovedDocumentDetail">Ko'rish</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Samarqand shaxar,  Bulung'ur tumani kasb-hunar maktabi</td>
              <td>Alimuxamedova Dilnoza Muxameddova</td>
              <td className='new'><b>02.08.2020</b>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="white" />
                </svg> Yangi</p></td>
              <td><b>№65848489894</b></td>
              <td><Link>Ko'rish</Link></td>
            </tr>
          </table>
          <Pagination count={10} color='primary'></Pagination>
        </div>
      </div>


    </div >
  );
}
