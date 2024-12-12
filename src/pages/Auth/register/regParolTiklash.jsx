import React, { useRef } from 'react'
import "./regParolTiklash.css"
import newLogo from "../../../images/newLogo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function RegParolTiklash() {
    const email = useRef()
    const parolTiklashForm = useRef()
    const navigate = useNavigate()

    function addData(e){
        e.preventDefault()
        let dataObj = {
            email: email.current.value,
          };
          
          let errorArr = Object.keys(dataObj).filter((key) => {
            return !dataObj[key];
          });
      
            errorArr.forEach((item) => {
              document.getElementById(`${item}`).classList.add("errorBorder");
            });
            Array.from(parolTiklashForm.current).forEach((item) => {
              item.addEventListener("change", (e) => {
                if (e.target.value) {
                  item.classList.remove("errorBorder");
                } else {
                  item.classList.add("errorBorder");
                }
              });
            });

            if (errorArr.length == 0) {
                  fetch(`${import.meta.env.VITE_BASE_URL}/email-verify/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataObj),
                  })
                    .then(async(res) => {
                      const errorObj = await res.json()
                      if (!res.ok) throw new Error(JSON.stringify(errorObj));
                      return res;
                    })
                    .then((data) => {
                      parolTiklashForm.current.reset();
                    //   toast.success("Muvaffaqiyatli")
                      navigate("/regNewParol")
                    })
                    .catch((err) => {
                      const errorObj = JSON.parse(err.message)
                      toast.error( errorObj && errorObj?.message)
                    })
                    .finally(() => {
                      saveMalumot.innerHTML = "Parolni Tiklash";
                    });
          
                  saveMalumot.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                       </div>`;
              }
    }

    return (
        <div className='regParolTiklash'>
            <div className="container">
                <div className="regParol">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>Parolni unutdingizmi?</h1>
                        <p>Quyidagi shaklni to'ldiring</p>
                    </div>
                    <form action="" className='addParolForm' ref={parolTiklashForm}>
                        <div className="topInput">
                            <div className="topInputBox">
                                <label htmlFor="email">Elektron pochta</label>
                                <input type="email" name="email" id="email" ref={email} placeholder='example@gmail.com' />
                            </div>
                        </div>
                    </form>
                    <div className="saveParolButton">
                        <Link onClick={addData}>
                            <button id="saveMalumot">Parolni Tiklash</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
