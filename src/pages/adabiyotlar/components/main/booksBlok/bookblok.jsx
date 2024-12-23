import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLoader from "../../../../../Loader/PageLoader";
import img from "../../../../../images/book.png";
import useGetFetch from "../../../../../hooks/useGetFetch";


export function Bookblok() {
  const [newArr, setNewArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(18);
  const [isPending, setIsPending] = useState(true);
  let bookArr = [];

  useEffect(() => {
    fetch(
      "https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/AllAdabiyotlar.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("nimadir xato");
        return res.json();
      })
      .then((data) => {
        bookArr = Object.keys(data).map((key) => {
          return {
            ...data[key],
            id: key,
          };
        });
        setNewArr(bookArr);
        setIsPending(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const { data, isPendingg, error } = useGetFetch( "http://192.168.101.175:8000/api/region/")
  console.log(data);
  console.log(error);

  function choppedBookItem(books) {
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;

    return books.slice(firstIndex, lastIndex);
  }

  let pages = [];
  for (let i = 1; i <= Math.ceil(newArr.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="booksContent">
      {isPending ? (
        <PageLoader />
      ) : (
        <>
          <div className="booksBlok">
            {newArr.length == 0 ? (
              <h1 className="NoBooks">No Books</h1>
            ) : (
              choppedBookItem(newArr).map((item) => (
                <div key={item.id} className="cardss">
                  <div className="bookTitle">
                    <div className="title">
                      <p className="bookName">{item.bookName}</p>
                      <p className="bookAutor">{item.author}</p>
                    </div>
                    <Link to="/Adabiyotlar/book" className="batafsil">
                      Batafsil
                    </Link>
                  </div>
                  <div className="bookImg">
                    <img src={img} alt="rasm" />
                  </div>
                </div>
              ))
            )}
          </div>
          <ul className="pagenation">
            {pages.map((page, index) => {
              return (
                <li key={index} className="page_item">
                  <button
                    className={
                      page == currentPage ? "pageBtn active" : "pageBtn"
                    }
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
