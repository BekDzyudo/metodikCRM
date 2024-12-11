import React from 'react'
import newLogo from "../../images/newLogo.svg"
import "./regKod.css"
import { Link } from 'react-router-dom'

export function RegKod() {
    return (
        <div className='regKod'>
            <div className="container">
                <div className="newKod">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>Kod kiriting</h1>
                        <p>Sizning pochtangizga kod yuborildi</p>
                    </div>
                    <form action="" className='addParolForm'>
                        <div className="topInput">
                            <div className="topInputBox">
                                <label htmlFor="number">Kod</label>
                                <input type="text" name="number" id="number" placeholder='-----' />
                            </div>
                        </div>
                    </form>
                    <div className="saveParolButton">
                        <Link to="/regNewParol">
                            <button >Parolni Tiklash</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

