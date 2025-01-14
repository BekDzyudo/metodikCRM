import React from 'react'
import { Link } from 'react-router-dom'

export default function IncomingDocumentDetail() {
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
                    <Link to="/Document/IncomingDocuments" className="back">
                        Kiruvchi Hujjatlar
                    </Link>
                </div>
                <div className="right">
                    <Link><i class="bi bi-arrow-left-short"></i>Orqaga</Link>
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
                                    <li className='active'>
                                        <Link to="/Document/IncomingDocuments"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.41699 9.1665L11.0003 13.7498L15.5837 9.1665" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 13.75V2.75" stroke="#333333" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Kiruvchi hujjatlar</Link>
                                    </li>
                                    <li>
                                        <Link to="/Document/ReturnedDocument"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
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
                                <span className='incoming_title'>Kiruvchi hujjat</span><span className='document_new-nomer'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#D30000" />
                                </svg> Yangi</span>
                                <div className="incoming_bigbox">
                                    <div className="incoming_area">
                                        <div className="incoming_box">
                                            <p>Jo'natuvchi hudud</p>
                                            <span>Toshkent shaxar,  Bulung'ur tumani kasb-hunar maktabi</span>
                                        </div>
                                        <div className="incoming_box">
                                            <p>yaratilgan sana</p>
                                            <span>02-avg-2024</span>
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
                                            <span>Alimuxamedova Dilnoza Muxameddova</span>
                                        </div>
                                        <div className="incoming_box">
                                            <p>Hujjat RAQAMI</p>
                                            <span>№ 65848489894</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='incoming_textarea'>
                                    <form action='#'>
                                        <p><label htmlFor="qisqa">Qisqa mazmuni</label></p>
                                        <textarea id="qisqa"  ></textarea>
                                    </form>
                                    <div className="incoming_buttons">
                                        <label htmlFor="myfile" className='custom-file-upload'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831" stroke="#2E94F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg> Fayl biriktirish</label>
                                        <input type="file" id="myfile" />
                                        <div className='rejection'>
                                            <Link className='acceptance'>qabul qilish</Link>
                                            <button className='btn'>rad etish</button>

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
