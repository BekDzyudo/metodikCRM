import React, { useEffect, useRef, useState } from "react";
import "./regMalumotlar.scss";
import newLogo from "../../../images/newLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function RegisterTeacher() {
  const regTeacherForm = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const region = useRef();
  const district = useRef();
  const talimMuassasasiNomi = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [colleges, setColleges] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/region/`)
      .then((res) => res.json())
      .then((data) => setRegions(data))
      .catch((err) => console.error(err));
  }, []);

  const handleRegionChange = (e) => {
    const regionId = e.target.value;
    fetch(`${import.meta.env.VITE_BASE_URL}/district/${regionId}`)
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts))
      .catch((err) => console.error(err));
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    fetch(`${import.meta.env.VITE_BASE_URL}/district-college/${districtId}`)
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error(err));
  };

  function addData() {
    let dataObj = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      region: region.current.value,
      district: district.current.value,
      college: talimMuassasasiNomi.current.value,
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
    Array.from(regTeacherForm.current).forEach((item) => {
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
        toast.error("Parolni qayta tekshiring")
      }
       else {
        fetch(`${import.meta.env.VITE_BASE_URL}/register/teacher/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...dataObj, user_roles: "teacher" }),
        })
          .then(async(res) => {
            const errorObj = await res.json()
            if (!res.ok) throw new Error(JSON.stringify(errorObj));
            return res;
          })
          .then((data) => {
            regTeacherForm.current.reset();
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
            
            saveMalumot.innerHTML = "Saqlash";
          });

        saveMalumot.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
             </div>`;
      }
    }
  }

  return (
    <div className="regMalumotlar">
      <div className="container">
        <div className="regData">
          <div className="logo">
            <img src={newLogo} alt="" />
          </div>
          <div className="title">
            <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>
            <p>Ro'yxatdan o'tish</p>
          </div>

          <form action="" className="addMalumotlarForm" ref={regTeacherForm}>
            <div className="centerInput">
              <label htmlFor="firstName">Ism*</label>
              <input
                ref={firstName}
                type="text"
                id="firstName"
                style={{ marginBottom: "10px" }}
              />
              <label htmlFor="lastName">Familya*</label>
              <input ref={lastName} type="text" id="lastName" />
            </div>
            <div className="leftInput">
              <label htmlFor="region">Viloyat*</label>
              <select
                id="region"
                ref={region}
                style={{ marginBottom: "10px" }}
                onChange={handleRegionChange}
              >
                <option value="">Viloyatni tanlang...</option>
                {regions?.map((region) => {
                  return (
                    <option
                      key={region.id}
                      data-id={region.id}
                      value={region.id}
                    >
                      {region.name}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="district">Tuman*</label>
              <select
                type="text"
                id="district"
                ref={district}
                onChange={handleDistrictChange}
              >
                <option value="">Tumanni tanlang...</option>
                {districts?.map((district) => {
                  return (
                    <option
                      key={district.id}
                      data-id={district.id}
                      value={district.id}
                    >
                      {district.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="select">
              <label htmlFor="college">
                Ta'lim muassasasi nomi*
              </label>
              <select
                name=""
                id="college"
                ref={talimMuassasasiNomi}
              >
                <option value="">Ta'lim muassasasini tanlang...</option>
                {colleges?.map((collage) => {
                  return (
                    <option
                      value={collage.id}
                      key={collage.id}
                      data-id={collage.id}
                    >
                      {collage.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="e_pochta">
              <div className="centerInput">
                <label htmlFor="email">Elektron pochta*</label>
                <input type="email" name="email" id="email" ref={email} />
              </div>
            </div>
            <div className="centerInput">
              <label htmlFor="password">Parol*</label>
              <input
                type="password"
                name="password"
                placeholder="*****"
                id="password"
                ref={password}
              />
            </div>
            <div className="rightInput">
              <label htmlFor="password2">Parolni takrorlang*</label>
              <input
                type="password"
                placeholder="*****"
                id="password2"
                ref={confirmPassword}
              />
            </div>
          </form>
          <div className="saveMalumotlarButton">
            <Link>
              <button onClick={addData} id="saveMalumot">
                Saqlash
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
