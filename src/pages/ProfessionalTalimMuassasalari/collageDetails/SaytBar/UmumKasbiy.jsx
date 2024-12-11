import React from 'react'
import { Link } from 'react-router-dom'
import umum from "../../../images/img/umumkasbiy.png";

export default function UmumKasbiy() {
    return (
        <div className='container'>
            <div className="row row-cols-3 row-cols-lg-4 g-2 g-lg-3">
                <div className="col-12">
                    <div className="malumot_name">
                        <p>Avtomobil chilangari</p>
                    </div>
                    <div className="malumot_cards">
                        
                        <div className="col-9">
                            <div className="malumot_body">
                                
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
