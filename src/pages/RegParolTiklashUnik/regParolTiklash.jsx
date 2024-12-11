import React from 'react'
import "./regParolTiklash.css"
import newLogo from "../../images/newLogo.svg"
import { Link } from 'react-router-dom'

export function RegParolTiklash() {
    return (
        <div className='regParolTiklash'>
            <div className="container">
                <div className="regParol">
                    <div className="logo">
                        <img src={newLogo} alt="" />
                    </div>
                    <div className="title">
                        <h1>Parolni unutdingizmi ?</h1>
                        <p>Biz sizga yordam beramiz xavotir olmang, quyidagi
                            shaklni to'ldiring</p>
                    </div>
                    <form action="" className='addParolForm'>
                        <div className="topInput">
                            <div className="topInputBox">
                                <label htmlFor="email">Sizning pochtangiz</label>
                                <input type="email" name="email" id="email" placeholder='example@gmail.com' />
                            </div>
                        </div>
                    </form>
                    <div className="saveParolButton">
                        <Link to="/regKod"  >
                            <button >Parolni Tiklash</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
