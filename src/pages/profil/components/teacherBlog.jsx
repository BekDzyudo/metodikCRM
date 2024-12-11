import { useState, useEffect } from "react";
import personImg from "../../../images/personImg.svg";

export function TeacherBlog() {
  getTeacherBlog();
  const [newObj, setNewObj] = useState({});
  let teacherBlogArr = [];

  function getTeacherBlog() {
    useEffect(() => {
      fetch(
        `https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/teacherFIOblog.json`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Nimadir xato");
          return res.json();
        })
        .then((data) => {
          teacherBlogArr = Object.keys(data || {}).map((key) => {
            return {
              ...data[key],
              id: key,
            };
          });
          setNewObj(teacherBlogArr[0]);
        })
        .catch((err) => console.log(err));
    }, []);
  }

  return (
    <div className="teacherBlok">
      <img src={newObj.PersonImage} alt="" />
      <h2>
        {newObj.familya} {newObj.ism}
      </h2>
      <h2>{newObj.otchestvo}</h2>
    </div>
  );
}
