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

  return (
    <div className="portfolio">
      <div className="reyting">
        <p>Reyting</p>
        <h1>26</h1>
      </div>
      <div className="portfolioList">
        {newArr.map((item, index) => (
          <div key={item.id} className="portfolioItem">
            <div className="portfolioTitle">
              <h4>Portfolio</h4>
              <img
                src={editIcon}
                id="editIconPortfolioBtn"
                alt=""
                onClick={() => editFind(index)}
              />
            </div>
            <div className="portfolioDesc">
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
      <button onClick={() => setAddBlok(true)} className="addPortfolioBtn">
        <div className="btnImg">
          <img src={pulsPortfolio} alt="" />
          <p> Qo'shish</p>
        </div>
        <p>Ta'lim standartlari va fanlar</p>
      </button>
    </div>
  );
}
