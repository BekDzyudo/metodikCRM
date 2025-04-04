import React, { useContext, useEffect, useRef } from "react";
import exitIcon from "../../../../images/exitIcon.svg";
import { PortfolioContext } from "../contexts/editPortfolioContext";
import useGetFetchProfil from "../../../../hooks/useGetFetchProfil";
import { AuthContext } from "../../../../contexts/AuthContext";

export function AddMalumotHujjatlar() {
  const { addhujjat, setAddHujjat, setAddObj } = useContext(PortfolioContext);
  const {auth, userData} = useContext(AuthContext)
  

  let hujjatTuri = useRef();
  let fanNomi = useRef();
  let addFile = useRef();
  let komment = useRef();
  let regTeacherFileForm = useRef();
  let saveBtn = useRef();

  function AddSaveTeacherFile() {
    let newObj = {
      hujjatTuri: hujjatTuri.current.value,
      fanNomi: fanNomi.current.value,
      addFile: addFile.current.files[0],
      komment: komment.current.value,
    };
    
    let errorArr = Object.keys(newObj).filter((key) => {
      if(key !== "komment") return !newObj[key];
    });
    errorArr.forEach((item) => {
      document.getElementById(`${item}`).classList.add("errorBorder");
    });
    Array.from(regTeacherFileForm.current).forEach((item) => {
      item.addEventListener("change", (e) => {
        if (e.target.value) {
          item.classList.remove("errorBorder");
        } else {
          item.classList.add("errorBorder");
        }
      });
    });
    const formData = new FormData();
    
    if (errorArr.length == 0) {

      formData.append("teacher_id", userData?.userId);
      formData.append("kategoriya_material_id", newObj.hujjatTuri);
      formData.append("fan_id", newObj.fanNomi);
      formData.append("file", newObj.addFile, newObj.addFile.name);
      formData.append("comment", newObj.komment);

      fetch(
        `${import.meta.env.VITE_BASE_URL}/birlashma/material-create/`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + auth.accessToken,
          },
        }
      )
        .then((res) => {
          if (!res.ok)
            {
            return res.json().then(err => {
              console.log(err);
          });
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          regTeacherFileForm.current.reset();
          saveBtn.current.innerHTML = "Saqlash";
          setAddHujjat(false);
          // window.location.reload()
        });
      saveBtn.current.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
         </div>`;
    }
  }



  const { data: hujjatlar } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/kategoriya-material/`
  );

  const { data: fanlar } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/shared_app/fanlar/${userData?.userId}`
  );

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
          <form encType="multipart/form-data" action="" className="addPortfolioForm" ref={regTeacherFileForm}>
            <div className="leftInput">
              <label htmlFor="ilmiyDaraja">Hujjat turi</label>
              <br />
              <select name="" id="hujjatTuri" ref={hujjatTuri} defaultValue="">
                <option value="" disabled>
                  Hujjat turini tanlang
                </option>
                {hujjatlar &&
                  hujjatlar.map((hujjat) => {
                    return (
                      <option key={hujjat.id} value={hujjat.id}>
                        {hujjat.name}
                      </option>
                    );
                  })}
              </select>
              <br />
              <br />
              <label htmlFor=""></label>
              <div className="textarea">
                <textarea
                  ref={komment}
                  id="komment"
                  placeholder="Komentariya..."
                ></textarea>
              </div>
            </div>
            <div className="centerInput">
              <label htmlFor="musobaqaGolibi">Fan nomi</label>
              <select name="" id="fanNomi" ref={fanNomi} defaultValue="">
                <option value="" disabled>
                  Fan nomini tanlang
                </option>
                {fanlar &&
                  fanlar.map((fan) => {
                    return (
                      <option key={fan.id} value={fan.id}>
                        {fan.name}
                      </option>
                    );
                  })}
              </select>
              <br />
              <br />
              <label htmlFor="myfile" className="custom-file-upload">
                Fayl biriktirish
              </label>
              <input type="file" ref={addFile} id="addFile" accept="application/pdf"/>
            </div>
          </form>
          <div className="savePortfolioModalBtn">
            <button
              id="savePortfolioBtn"
              ref={saveBtn}
              onClick={AddSaveTeacherFile}
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    )
  );
}
