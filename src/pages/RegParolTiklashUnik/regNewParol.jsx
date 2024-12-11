import React from 'react'
import newLogo from "../../images/newLogo.svg"
import './regNewParol.css'
import { Link } from 'react-router-dom'
export function RegNewParol() {
    return (
        <div className='regNewParol'>
            <div className="container">
                <div className="newParol">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>Yangi parol</h1>
                        <p>Yangi parolni kriting!</p>
                    </div>
                    <form action="" className='addParolForm'>
                        <div className="topInput">
                            <div className="topInputBox">
                                <label htmlFor="number">Parol</label>
                                <input type="password" name="password" id="number" placeholder='*****' />
                            </div>
                        </div>
                    </form>
                    <div className="saveParolButton">
                        <Link to="/">
                            <button >Tizimga kirish</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

