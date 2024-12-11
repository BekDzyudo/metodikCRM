import React from 'react'
import { Link } from 'react-router-dom'
import umum from "../../../images/img/umumkasbiy.png";


export default function MaxsusFanlar() {
    return (
        <div className='container'>
            <div className="top">
                <div className="left">
                    <Link to="/" className="bosh">
                        Bosh sahifa
                    </Link>
                    <Link to="/Professional-Talim-Muassasalari/shahar" className="bosh">Muassasalar soni</Link>
                    <Link className="back">
                        Bulung'ur tumani kasb-hunar maktabi
                    </Link>
                </div>
                <div className="right">
                    <Link to="/Professional-Talim-Muassasalari/kasb">
                        <i class="bi bi-arrow-left-short"></i> Orqaga
                    </Link>
                </div>
            </div>
            <h3 className="malumot_title">Bulung'ur tumani kasb-hunar maktabi ma'lumotlari</h3>
            <div className="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
                <div className="col-12">
                    <div className="malumot_name">
                        <p>Avtomobil chilangari</p>
                    </div>
                    <div className="malumot_cards">
                        <div className="col-3">
                            <Link className="malumot_card active" to="/Professional-Talim-Muassasalari/kasb">
                                <p>Tayyorlanadigan kasb va mutaxassisliklar</p>
                            </Link>
                            <Link className="malumot_card">
                                <p>Pedagoglar tarkibi</p>
                            </Link>
                            <Link className="malumot_card">
                                <p>Rivojlanish strategiyasi</p>
                            </Link>
                            <Link className="malumot_card">
                                <p>Qisqa muddatli kurslar</p>
                            </Link>
                            <Link className="malumot_card">
                                <p>WorldSkills</p>
                            </Link>
                        </div>
                        <div className="col-9">
                            <div className="malumot_body">
                                <div className="malumot_body-btn">
                                    <div className="col-2 malumot_top">
                                        <Link className="malumot_btn" to="/Professional-Talim-Muassasalari/umumkasbiy">
                                            <p>Umumkasbiy fanlar</p>
                                        </Link>
                                    </div>
                                    <div className="col-2 malumot_top">
                                        <Link className="malumot_btn active" to="/Professional-Talim-Muassasalari/maxsusfan">
                                            <p>Maxsus fanlar</p>
                                        </Link>
                                    </div>
                                    <div className="col-2 malumot_top">
                                        <Link className="malumot_btn" to="/Professional-Talim-Muassasalari/amaliyot">
                                            <p>O'quv amaliyoti</p>
                                        </Link>
                                    </div>
                                    <div className="col-3 search">
                                        <form action="#">
                                            <input type="search" placeholder='Izlash...' />
                                        </form>
                                    </div>
                                </div>
                                <div className="umumkasbiy_cards malumot_body">
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Mehnat muxofazasi va xavfsizlik texnikasi</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Texnikaviy chizmachilik</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Konstruktsion materiallar</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Elektrotexnika va elektronika asoslari</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Texnikaviy chizmachilik</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link className="umumkasbiy_card">
                                            <div className="umumkasbiy_img">
                                                <img src={umum} alt="" />
                                            </div>
                                            <div className="umumkasbiy_title">
                                                <p>Texnikaviy chizmachilik</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
