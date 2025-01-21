import React, { useEffect, useState } from "react";
import korgazmaMateriallari from "../../../images/korgazmaMateriallari.svg";
import chopEttirganQollanmasi from "../../../images/chopEttirganQollanmasi.svg";
import chiqarganMaqolalari from "../../../images/chiqarganMaqolalari.svg";
import uslubiyQollanmalari from "../../../images/uslubiyQollanmalari.svg";
import davlatMukofotlari from "../../../images/davlatMukofotlari.svg";
import multimediaMateriallari from "../../../images/multimediaMateriallari.svg";

export function TeacherFiles() {
  getTeacherFiles();
  const [newObj, setNewObj] = useState(null);
  let teacherFilesArr = [];
  function getTeacherFiles() {
    useEffect(() => {
      fetch(
        `https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio.json`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Nimadir xato");
          return res.json();
        })
        .then((data) => {
          teacherFilesArr = Object.keys(data).map((key) => {
            return {
              ...data[key],
              id: key,
            };
          });
          setNewObj(teacherFilesArr[0]);
        })
        .catch((err) => console.log(err));
    }, []);
  }

  return (
    <>
      {newObj && (
        <div className="achievements">
          <div className="achievementsItemOne">
            <img src={korgazmaMateriallari} alt="" />
            <p>Ko'rgazma materiallari:</p>
            <span>{newObj.korgazma}</span>
          </div>
          <div className="achievementsItem">
            <div className="imgCircle">
              <img src={chopEttirganQollanmasi} alt="" />
            </div>
            <p>Chop ettirgan o'quv qo'llanmalari:</p>
            <span>{newObj.chopEtilgan}</span>
          </div>
          <div className="achievementsItem">
            <div className="imgCircle">
              <img src={chiqarganMaqolalari} alt="" />
            </div>
            <p>Chiqargan maqolalari:</p>
            <span>{newObj.chiqarganMaqola}</span>
          </div>
          <div className="achievementsItem">
            <div className="imgCircle">
              <img src={uslubiyQollanmalari} alt="" />
            </div>
            <p>Uslubiy qo'llanmalar:</p>
            <span>{newObj.uslubiyQollanma}</span>
          </div>
          <div className="achievementsItem">
            <div className="imgCircle">
              <img src={davlatMukofotlari} alt="" />
            </div>
            <p>Davlat mukofotlari:</p>
            <span>{newObj.davlatMukofot}</span>
          </div>
          <div className="achievementsItem">
            <div className="imgCircle">
              <img src={multimediaMateriallari} alt="" />
            </div>
            <p>Multimedia materiallari:</p>
            <span>{newObj.multimediaMateriallar}</span>
          </div>
        </div>
      )}
    </>
  );
}
