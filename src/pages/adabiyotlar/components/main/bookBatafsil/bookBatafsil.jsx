import React, { useEffect, useState } from "react";
import "./bookBatafsil.scss";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "../../../../../Loader/PageLoader";
import img from "../../../../../images/book.png";

export function BookBatafsil() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [isPending, setIsPending] = useState(true);
  console.log(book);

  useEffect(() => {
    fetch(
      `https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/AllAdabiyotlar/${id}.json`
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setIsPending(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bookBatafsil">

      {isPending ? (
        <PageLoader />
      ) : (
        <>

          <div className="bookTitle">
            <p>{book?.bookName ? book.bookName : <p>Tо‘qimachilik ishlab chiqarish (soha bо‘yicha: yigiruv, tо‘quv,
              bо‘yoq, tikuvtrikotaj va x.k.)</p>}</p>
          </div>
          <div className="bookContent">
            <div className="bookImg">
              <img src={book?.file ? book.file : img} alt="" />
            </div>
            <div className="bookDesc">
              <p className="title" style={{ marginBottom: "15px" }}>
                Badiiy adabiyot haqida
              </p>
              <p className="titleName">Tibbiy-ommabop nashr</p>
              <div className="yuklash">
                <div className="yuklashDesc">
                  <p>Badiiy adabiyot</p>
                  <p>So’ngi o’zgartirilgan sana: 16-May, 2022-yil</p>
                </div>
                <button className="yuklashBtn">Yuklab olish</button>
              </div>
              <hr className="hr" />
              <div className="izohlar">
                <p className="izohTitle">Izohlar</p>
                <form action="" className="izohForm">
                  <textarea
                    name=""
                    id="matn"
                    cols="30"
                    rows="10"
                    placeholder="Izoh matni..."
                  ></textarea>
                </form>
                <div className="saveBlok">
                  <button className="saveBtn">Yuborish</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
