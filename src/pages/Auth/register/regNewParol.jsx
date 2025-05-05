import React, { useRef } from 'react'
import newLogo from "../../../images/newLogo.svg"
import './regNewParol.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function RegNewParol() {

    const email = useRef()
    const password = useRef()
    const parolTiklashForm = useRef()
    const navigate = useNavigate()

    function addData(e){
        e.preventDefault()
        let dataObj = {
            email: email.current.value,
            password: password.current.value,
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
                  fetch(`${import.meta.env.VITE_BASE_URL}/password-reset/`, {
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
                      toast.success("Parol o'zgartirildi 👍")
                      navigate("/login")
                    })
                    .catch((err) => {
                      const errorObj = JSON.parse(err.message)
                      console.log(errorObj);
                        let errNewParolText = errorObj?.error?.join(" ")
                        toast.error(errNewParolText && errNewParolText)
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
        <div className='regNewParol'>
            <div className="container">
                <div className="newParol">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>Yangi parol</h1>
                        <p>Pochtangizni tasdiqlang va yangi parolni kriting!</p>
                    </div>
                    <form action="" className='addParolForm' ref={parolTiklashForm}>
                        <div className="topInput">
                            <div className="topInputBox">
                                <label htmlFor="number">Elektron pochta</label>
                                <input ref={email} type="email" name="email" id="email" placeholder='example@gmail.com' />
                            </div>
                            <div className="topInputBox">
                                <label htmlFor="number">Parol</label>
                                <input ref={password} type="password" name="password" id="password" placeholder='*****' />
                            </div>
                        </div>
                    </form>
                    <div className="saveParolButton" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Link onClick={addData}>
                            <button id="saveMalumot">Parolni o'zgartirish</button>
                        </Link>
                        <Link to="/login" style={{color: "#323548cc", marginBottom:"20px", marginTop:"10px", fontSize:"15px"}}>
                                        Login sahifasiga o'tish
                                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

