import React, { useContext, useRef } from "react";
import exitIcon from "../../../../images/exitIcon.svg";
import { PortfolioContext } from "../contexts/editPortfolioContext";

export function AddMalumotHujjatlar() {
  const { addhujjat, setAddHujjat, setAddObj } = useContext(PortfolioContext);

  let hujjatTuri = useRef();
  let fanNomi = useRef();
  let addFile = useRef();
  let komment = useRef();
  let regTeacherFileForm = useRef()
  let saveBtn = useRef()

  function AddSaveTeacherFile() {
    let newObj = {
        hujjatTuri: hujjatTuri.current.value,
        fanNomi: fanNomi.current.value,
        addFile: addFile.current.value,
        komment: komment.current.value,
    };
    let errorArr = Object.keys(newObj).filter((key) => {
      return !newObj[key];
    });
    errorArr.forEach((item) => {
      document.getElementById(`${item}`).classList.add("errorBorder");
    });
    Array.from(regPortfolioForm.current).forEach((item) => {
      item.addEventListener("change", (e) => {
        if (e.target.value) {
          item.classList.remove("errorBorder");
        } else {
          item.classList.add("errorBorder");
        }
      });
    });
    if (errorArr.length == 0) {
      fetch(
        `https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio.json`,
        {
          method: "POST",
          body: JSON.stringify(newObj),
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("nimadir xato");
          return res.json();
        })
        .then((data) => {
          setAddObj(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          regPortfolioForm.current.reset();
          saveBtn.current.innerHTML = "Saqlash";
          setAddHujjat(false);
        });
      saveBtn.current.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
         </div>`;
    }
  }
  return (
    addhujjat && (
      <div className="addPortfolio">
        <div className="addPortfolioModal">
          <div className="modalTitle">
            <h4>Hujjat qo'shish</h4>
            <img
              src={exitIcon}
              alt=""
              id="exitPortfolioModal"
              onClick={() => setAddHujjat(false)}
            />
          </div>
          <form action="" className="addPortfolioForm" ref={regTeacherFileForm}>
            <div className="leftInput">
              <label htmlFor="ilmiyDaraja">Hujjat turi</label>
              <br />
              <select name="" id="hujjatTuri" ref={hujjatTuri}>
              <option value="" disabled selected>
                  Hujjat turini tanlang
                </option>
                <option value="Raqamli ta‘lim resusrlari">
                  Raqamli ta‘lim resusrlari
                </option>
                <option value="2">2</option>
              </select>
              <br />
              <br />
              <label htmlFor=""></label>
              <div className="textarea">
                <textarea ref={komment} id="komment" placeholder="Komentariya..."></textarea>
              </div>
            </div>
            <div className="centerInput">
              <label htmlFor="musobaqaGolibi">Fan nomi</label>
              <select name="" id="fanNomi" ref={fanNomi}>
                <option selected value="" disabled>
                    Fan nomini tanlang
                </option>
                <option value=" Bulung'ur tumani 2-sonli kasb-hunar maktabi">
                  Psixologiya
                </option>
                <option value=" Bulung'ur tumani 2-sonli kasb-hunar maktabi">
                  hamshiralik ishi
                </option>
              </select>
              <br />
              <br />
              <label htmlFor="myfile" className="custom-file-upload">
                Fayl biriktirish
              </label>
              <input type="file" ref={addFile} id="addFile" style={{padding:0, boxShadow:"none"}}/>
            </div>
          </form>
            <div className="savePortfolioModalBtn">
              <button
                id="savePortfolioBtn"
                ref={saveBtn}
                onClick={AddSaveTeacherFile}
              >
                Yuborish
              </button>
            </div>
        </div>
      </div>
    )
  );
}
