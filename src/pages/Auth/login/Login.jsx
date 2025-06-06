import React, { useContext, useRef} from 'react'
import "./regTeacherTitle.scss"
import newLogo from "../../../images/newLogo.svg"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthContext';
import { login } from '../../../components/authentication/auth';
import { Button } from 'bootstrap';

export function Login() {
    const email = useRef();
    const password = useRef();
    const regLoginForm = useRef()
    const navigate = useNavigate()
    const {login: handleLogin} = useContext(AuthContext)


    const addData = async(e) => {
      e.preventDefault();
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
            Array.from(regLoginForm.current).forEach((item) => {
              item.addEventListener("change", (e) => {
                if (e.target.value) {
                  item.classList.remove("errorBorder");
                } else {
                  item.classList.add("errorBorder");
                }
              });
            });
      
            if (errorArr.length == 0) {
              const response = await login(dataObj);
              if(response){
                handleLogin(response)
                toast.success("Xush kelibsiz")
                navigate("/")
              }
              else{
                toast.error("Email yoki Parol noto'g'ri")
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

                    <form action="" className="addTeacherForm" ref={regLoginForm}>
                        <div className="topInput">
                            <div>
                                <label htmlFor="email">Elektron pochta *</label>
                                <input type="email" name='email' id="email" ref={email} />
                            </div>
                        </div>

                        <div className="bottomInput">
                            <div className="otch">
                                <label htmlFor="password">Parol* </label>
                                <input type="password" placeholder='******' id="password" ref={password} />
                            </div>
                            <div className='parol'>
                                <Link to="/regParolTiklash">
                                    <p>Parolni unutdingizmi?</p>
                                </Link>
                            </div>
                        </div>
                        <div className="saveTeacherButton">
                        {/* <Link > */}
                            <button type='submit' onClick={addData} id="saveMalumot" >Tizimga kirish</button>
                        {/* </Link> */}
                    </div>
                    </form>
                    
                    <Link to="/register-student" className='saveTeacherRoyxat'>
                        <p>Ro'yxatdan o'tish</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
