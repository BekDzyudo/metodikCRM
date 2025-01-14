import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ImExit } from "react-icons/im";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthContext';

function DropDawnProfile() {
    const {logout} = useContext(AuthContext)
    return (
        <div className='flex flex-col dropdawnProfile'>
            <ul className='flex flex-col gap-4'>
                <li>
                    <Link to="/profil">
                        <FaUser/>
                        Portfolio
                    </Link>
                </li>
                <li>
                <Link to="/Document/documents">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                        </svg>
                        Hujjatlar</Link>
                </li>

                <li>
                    <Link>
                       <CiSettings className='w-25px h-25px'/>
                        Sozlamalar
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/login" onClick={logout}>
                        <ImExit className='w-25 h-25'/>
                        Chiqish
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DropDawnProfile