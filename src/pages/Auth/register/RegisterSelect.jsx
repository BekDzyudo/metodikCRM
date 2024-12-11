import React from 'react'
import { Link } from 'react-router-dom'
import newLogo from "../../../images/newLogo.svg"
import "./regTeacherTitle.scss"

export function RegisterSelect() {
    return (
        <div className='regTeacherTitle'>
            <div className="container">
                <div className="regTeacher">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>

                    </div>
                    <div className="tanlov">
                        <div className="tanlov_box">
                            <div className="tanlov_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                                    <path d="M6.875 10.3125V13.75H44.6875V41.25H20.625V44.6875H51.5625V41.25H48.125V10.3125H6.875ZM13.7534 15.4688C11.9317 15.4751 10.1863 16.2013 8.89786 17.4892C7.60937 18.777 6.88225 20.522 6.875 22.3438C6.875 26.1233 9.97562 29.2188 13.7534 29.2188C15.5743 29.2115 17.3184 28.4847 18.6056 27.1969C19.8928 25.9091 20.6187 24.1646 20.625 22.3438C20.625 18.5677 17.5278 15.4688 13.7534 15.4688ZM24.0625 17.1875V20.625H32.6562V17.1875H24.0625ZM36.0938 17.1875V20.625H41.25V17.1875H36.0938ZM13.7534 18.9062C15.6681 18.9062 17.1875 20.4239 17.1875 22.3438C17.1875 24.2688 15.6698 25.7812 13.7534 25.7812C11.8284 25.7812 10.3125 24.2688 10.3125 22.3438C10.3125 20.4239 11.8302 18.9062 13.7534 18.9062ZM24.0625 24.0625V27.5H41.25V24.0625H24.0625ZM6.875 30.9375V44.6875H10.3125V34.375H15.4688V44.6875H18.9062V35.5059L22.4538 37.3828C23.4592 37.9156 24.6675 37.9139 25.6712 37.3828V37.3863L31.7384 34.1773L30.1348 31.1352L24.0659 34.3441L18.7447 31.5356C18.002 31.1433 17.1749 30.938 16.335 30.9375H6.875Z" fill="#107DDB" />
                                </svg>
                            </div>
                            <div className="tanlov_btn">
                                <Link to="/register-teacher">O‘qtuvchi</Link>
                            </div>
                        </div>
                        <div className="tanlov_box">
                            <div className="tanlov_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                                    <g clip-path="url(#clip0_1997_3381)">
                                        <path d="M17.875 37.8125C17.6696 37.8125 17.4642 37.8501 17.2683 37.9296C16.1545 38.3818 14.9832 38.6719 13.75 38.6719C12.5168 38.6719 11.3455 38.3818 10.2309 37.9296C10.0349 37.8501 9.83041 37.8125 9.62502 37.8125C4.29174 37.8125 -0.0283426 43.2352 1.67599e-05 49.9104C0.012048 52.7313 1.86744 55 4.12502 55H23.375C25.6326 55 27.488 52.7313 27.5 49.9104C27.5284 43.2352 23.2083 37.8125 17.875 37.8125ZM13.75 34.375C18.3064 34.375 22 29.758 22 24.0625C22 18.367 18.3064 13.75 13.75 13.75C9.19361 13.75 5.50002 18.367 5.50002 24.0625C5.50002 29.758 9.19361 34.375 13.75 34.375ZM50.875 0H17.875C15.6003 0 13.75 2.39014 13.75 5.32705V10.3125C15.7627 10.3125 17.6258 11.0408 19.25 12.2246V6.875H49.5V37.8125H44V30.9375H33V37.8125H26.4481C28.0895 39.6054 29.2944 41.9729 29.859 44.6875H50.875C53.1498 44.6875 55 42.2974 55 39.3605V5.32705C55 2.39014 53.1498 0 50.875 0Z" fill="#107DDB" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1997_3381">
                                            <rect width="55" height="55" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="tanlov_btn">
                                <Link to="/register-student">O‘quvchi</Link>
                            </div>
                        </div>
                    </div>
                    <div className='tizim'>
                        <Link to="/login">Tizimga kirish</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

