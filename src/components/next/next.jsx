import React from 'react'
import { Link } from 'react-router-dom';
import './next.css';

function next() {
    return (
        <div className='container'>
            <div className="top">
                <div className="left">
                    <Link to="/" className="bosh">
                        Bosh sahifa
                    </Link>
                    <Link className="back">Adabiyotlar</Link>
                </div>
                <div className="right">
                    <Link>
                        <i className="bi bi-arrow-left-short"></i> Orqaga
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default next