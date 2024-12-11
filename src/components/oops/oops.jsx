import React from 'react';
import "./oops.css";
import oopsimg from "../../images/img/oops.png"

function oops() {
    return (
        <div className='oops'>
            <div className="container">
                <div className="row">
                    <div className="oops_box">
                        <div className="col-12 d-flex">
                            <div className="col-4">
                                <div className="oops_name">
                                    <h1>Oops..</h1>
                                    <p>Something went wrong. Page not found</p>
                                    <button className='btn'>Yangilash</button>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="oops_img">
                                    <img src={oopsimg} alt="rasm" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default oops