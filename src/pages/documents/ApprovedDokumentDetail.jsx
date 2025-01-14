import React from 'react'
import { Link } from 'react-router-dom'

export default function ApprovedDokumentDetail() {
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
                    <Link to="/Document/ApprovedDocument" className="back">
                        Tasdiqlangan
                    </Link>
                </div>
                <div className="right">
                    <Link to="/Document/ApprovedDocument"><i class="bi bi-arrow-left-short"></i>Orqaga</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="document_box">
                        <div className="col-3">
                            <div className="document_left">
                                <ul className='document_left-top'>
                                    <li >
                                        <Link to="/Document/documents">
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
                                    <li className=''>
                                        <Link to="/Document/ReturnedDocument"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.5837 7.33333L11.0003 2.75L6.41699 7.33333" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 2.75V13.75" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Qaytgan hujjatlar</Link>
                                    </li>
                                    <li className='active'>
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
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='incoming_title'>Tasdiqlangan hujjatlar</span><span className='document_new-addroved'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#02FE0C" />
                                    </svg>tasdiqlandi</span>
                                </div>
                                <div className="incoming_bigbox">
                                    <div className="incoming_area">
                                        <div className="incoming_box">
                                            <p>Jo'natuvchi hudud</p>
                                            <span>Professional ta'limni rivojlantirish instituti</span>
                                        </div>
                                        <div className="incoming_box">
                                            <p>yaratilgan sana</p>
                                            <span>10-avg-2024</span>
                                        </div>
                                        <div className="incoming_file">
                                            <p>biriktirilgan fayllar</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22" fill="none">
                                                <path d="M11.917 1.8335H5.50033C5.0141 1.8335 4.54778 2.02665 4.20396 2.37047C3.86015 2.71428 3.66699 3.1806 3.66699 3.66683V18.3335C3.66699 18.8197 3.86015 19.286 4.20396 19.6299C4.54778 19.9737 5.0141 20.1668 5.50033 20.1668H16.5003C16.9866 20.1668 17.4529 19.9737 17.7967 19.6299C18.1405 19.286 18.3337 18.8197 18.3337 18.3335V8.25016L11.917 1.8335Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.917 1.8335V8.25016H18.3337" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> FileName.pdf (28 kB) <Link>Yuklab olish</Link></span><br />
                                            <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22" fill="none">
                                                <path d="M11.917 1.8335H5.50033C5.0141 1.8335 4.54778 2.02665 4.20396 2.37047C3.86015 2.71428 3.66699 3.1806 3.66699 3.66683V18.3335C3.66699 18.8197 3.86015 19.286 4.20396 19.6299C4.54778 19.9737 5.0141 20.1668 5.50033 20.1668H16.5003C16.9866 20.1668 17.4529 19.9737 17.7967 19.6299C18.1405 19.286 18.3337 18.8197 18.3337 18.3335V8.25016L11.917 1.8335Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.917 1.8335V8.25016H18.3337" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>FileName.pdf (28 kB) <Link>Yuklab olish</Link></span>
                                        </div>
                                    </div>
                                    <div className="incoming_name">
                                        <div className="incoming_box">
                                            <p className='incoming_name'>Jo'natuvchi</p>
                                            <span>Xudayberganov Tohir Farxadovich</span>
                                        </div>
                                        <div className="incoming_box">
                                            <p>Hujjat RAQAMI</p>
                                            <span>№ 65848489894</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
