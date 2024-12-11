import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import newLogo from "../../../images/newLogo.svg";
import "./regTeacherTitle.scss";
import { toast } from "react-toastify";


export function RegisterStudent() {
  const regStudentForm = useRef();
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate()

  function addData() {
    let dataObj = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      password2: confirmPassword.current.value,
    };
    
    
    
    let errorArr = Object.keys(dataObj).filter((key) => {
      return !dataObj[key];
    });

      errorArr.forEach((item) => {
        document.getElementById(`${item}`).classList.add("errorBorder");
      });
      Array.from(regStudentForm.current).forEach((item) => {
        item.addEventListener("change", (e) => {
          if (e.target.value) {
            item.classList.remove("errorBorder");
          } else {
            item.classList.add("errorBorder");
          }
        });
      });


   

      if (errorArr.length == 0) {
        if (dataObj.password !== dataObj.password2) {
          toast.error("Parol bir xil emas")
        }
         else {
          fetch(`${import.meta.env.VITE_BASE_URL}/register/ordinary/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...dataObj, user_roles: "ordinary_user" }),
          })
            .then(async(res) => {
              const errorObj = await res.json()
              if (!res.ok) throw new Error(JSON.stringify(errorObj));
              return res;
            })
            .then((data) => {
              console.log(data); 
              toast.success("Muvaffaqiyatli")
              navigate("/login")
            })
            .catch((err) => {
              const errorObj = JSON.parse(err.message)
              console.log(errorObj);
              let errPasswText = errorObj?.password?.join(" ")
              let errEmailText = errorObj?.email?.join(" ")
              
              console.log(errPasswText, errEmailText);
              
              toast.error(errEmailText && errEmailText)
              toast.error( errPasswText && errPasswText)
            })
            .finally(() => {
              regStudentForm.current.reset();
              saveMalumot.innerHTML = "Saqlash";
            });
  
          saveMalumot.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
               </div>`;
        }
      }
  }


  return (
    <div className="regTeacherTitle">
      <div className="container">
        <div className="regTeacher">
          <div className="logo">
            <img src={newLogo} alt="" />
          </div>
          <div className="title">
            <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>
            <p>Ro'yxatdan o'tish</p>
          </div>
          <div className="student">
            <form className="addstudentForm" ref={regStudentForm}>
              <div className="regStudentRow">
                <div className="studentInput">
                  <label htmlFor="first_name">Ism*</label>
                  <br />
                  <input type="text" id="first_name" ref={firstName}/>
                </div>
                <div className="studentInput">
                  <label htmlFor="last_name">Familya*</label>
                  <br />
                  <input type="text" id="last_name"  ref={lastName}/>
                </div>
              </div>
              <div className="regStudentRow">
              <div className="studentInput">
                <label htmlFor="email">Elektron pochta*</label>
                <br />
                <input type="email" id="email" ref={email}/>
              </div>
              </div>
              <div className="regStudentRow">
                <div className="studentInput">
                  <label htmlFor="password">Parol*</label>
                  <br />
                  <input
                    // className="student_parol"
                    type="password"
                    id="password"
                    placeholder="****"
                    ref={password}
                  />
                </div>
                <div className="studentInput">
                  <label htmlFor="password2">Parolni takrorlang*</label>
                  <br />
                  <input
                    type="password"
                    id="password2"
                    placeholder="****"
                    ref={confirmPassword}
                  />
                </div>
              </div>
              <div className="student_tizim">
                <Link to="/register-student" >
                <button style={{background: "none", color:"white"}} id="saveMalumot" onClick={addData}>Saqlash</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
