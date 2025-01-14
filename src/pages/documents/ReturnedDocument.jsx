import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from '@mui/material';


export default function ReturnedDocument() {
    const [isActivesohasi, setIsActivesohasi] = useState(false);
    const [selectedsohasi, setIsSelectedsohasi] = useState("Kiruvchi hudud");
    return (
        <div className='container'>
            <div className="top">
                <div className="left">
                    <Link to="/" className="bosh">
                        Bosh sahifa
                    </Link>
                    <Link to="/Document/documents" className="bosh">
                        Hujjatlar
                    </Link>
                    <Link to="/Document/ReturnedDocument" className="back">
                        Qaytgan hujjatlar
                    </Link>
                </div>
                <div className="right">
                    <Link to="/Document/documents"><i class="bi bi-arrow-left-short"></i>  Orqaga</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="document_box">
                        <div className="col-3">
                            <div className="document_left">
                                <ul className='document_left-top'>
                                    <li className=''>
                                        <Link to='/Document/documents'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d="M2.75 8.25016L11 1.8335L19.25 8.25016V18.3335C19.25 18.8197 19.0568 19.286 18.713 19.6299C18.3692 19.9737 17.9029 20.1668 17.4167 20.1668H4.58333C4.0971 20.1668 3.63079 19.9737 3.28697 19.6299C2.94315 19.286 2.75 18.8197 2.75 18.3335V8.25016Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8.25 20.1667V11H13.75V20.1667" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Asosiy</Link>
                                    </li>
                                    <li className=''>
                                        <Link to="/Document/IncomingDocuments"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.41699 9.1665L11.0003 13.7498L15.5837 9.1665" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 13.75V2.75" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Kiruvchi hujjatlar</Link>
                                    </li>
                                    <li className='active'>
                                        <Link><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.5837 7.33333L11.0003 2.75L6.41699 7.33333" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 2.75V13.75" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Qaytgan hujjatlar</Link>
                                    </li>
                                    <li>
                                        <Link to="/Document/ApprovedDocument"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M8.25 10.0832L11 12.8332L20.1667 3.6665" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.25 11V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H14.6667" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Tasdiqlangan</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-9 bordertop">

                            <div className="document_new">
                                <div className="document_incoming-top">
                                    <div>
                                        <h4>Qaytgan hujjatlar</h4>
                                        <span className='document_incoming'>Qaytgan hujjatlar</span><span className='document_new-nomer'>27</span>
                                    </div>
                                    <div className="select_field">
                                        <div className="dropdown">
                                            <div
                                                onClick={(e) => {
                                                    setIsActivesohasi(!isActivesohasi);
                                                }}
                                                className="select_dropdown-btn"
                                            >
                                                {selectedsohasi}
                                                <span
                                                    className={
                                                        isActivesohasi ? "fas fa-caret-up" : "fas fa-caret-down"
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="dropdown-content"
                                                style={{ display: isActivesohasi ? "block" : "none" }}
                                            >
                                                <div
                                                    onClick={(e) => {
                                                        setIsSelectedsohasi(e.target.textContent);
                                                        setIsActivesohasi(!isActivesohasi);
                                                    }}
                                                    className="item"
                                                >
                                                    Toshkent shahar
                                                </div>
                                                <div
                                                    className="item"
                                                    onClick={(e) => {
                                                        setIsSelectedsohasi(e.target.textContent);
                                                        setIsActivesohasi(!isActivesohasi);
                                                    }}
                                                >
                                                    Samarqand shahar
                                                </div>
                                                <div
                                                    className="item"
                                                    onClick={(e) => {
                                                        setIsSelectedsohasi(e.target.textContent);
                                                        setIsActivesohasi(!isActivesohasi);
                                                    }}
                                                >
                                                    Andijon shahar
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="document_date">
                                        <input type="date" />
                                    </div>
                                    <div className="document_search">
                                        <input type="search" placeholder="izlash" />
                                    </div>
                                </div>
                                <hr />
                                <div className="document_table">
                                    <table className='table'>
                                        <thead className='table-header'>
                                            <tr>
                                                <th>№</th>
                                                <th>Jo'natuvchi hudud</th>
                                                <th>Jo'natuvchi</th>
                                                <th>Hujjatning qaytarilgan sanasi</th>
                                                <th>Hujjat raqami</th>
                                                <th></th>

                                            </tr>
                                        </thead>
                                        <tr>
                                            <td>1</td>
                                            <td>Professional ta'limni rivojlantirish instituti</td>
                                            <td>Xudayberganov Tohir Farxadovich</td>
                                            <td className='new'><b>02.08.2020</b>
                                                <p className="rad"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                    <circle cx="3" cy="3" r="3" fill="white" />
                                                </svg> Rad etildi</p></td>
                                            <td><b>№65848489894</b></td>
                                            <td><Link to="/Document/ReturnedDocumentDetail">Ko'rish</Link> </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Professional ta'limni rivojlantirish instituti</td>
                                            <td>Xudayberganov Tohir Farxadovich</td>
                                            <td className='new'><b>02.08.2020</b>
                                                <p className="rad"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                    <circle cx="3" cy="3" r="3" fill="white" />
                                                </svg> Rad etildi</p></td>
                                            <td><b>№65848489894</b></td>
                                            <td><Link>Ko'rish</Link></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Professional ta'limni rivojlantirish instituti</td>
                                            <td>Xudayberganov Tohir Farxadovich</td>
                                            <td className='new'><b>02.08.2020</b>
                                                <p className="rad"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                    <circle cx="3" cy="3" r="3" fill="white" />
                                                </svg> Rad etildi</p></td>
                                            <td><b>№65848489894</b></td>
                                            <td><Link>Ko'rish</Link></td>
                                        </tr>
                                    </table>
                                    <Pagination count={10} color='primary'></Pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
