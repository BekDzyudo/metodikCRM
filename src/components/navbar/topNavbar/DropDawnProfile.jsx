import React from 'react'
import { Link } from 'react-router-dom'
import { ImExit } from "react-icons/im";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

function DropDawnProfile() {
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
                    <Link>
                       <CiSettings className='w-25px h-25px'/>
                        Sozlama
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/">
                        <ImExit className='w-25 h-25'/>
                        Chiqish
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DropDawnProfile