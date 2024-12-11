import React, { useContext, useEffect, useState } from 'react'
import editIcon from "../../../images/editIcon.svg"
import toifa from "../../../images/toifa.svg"
import hudud from "../../../images/hudud.svg"
import talimTili from "../../../images/talimTili.svg"
import chettiliDarajasi from "../../../images/chettiliDarajasi.svg"
import tamomlaganOTM from "../../../images/tamomlaganOTM.svg"
import faoliyatniBoshlaganYili from "../../../images/faoliyatniBoshlaganYili.svg"
import Epochta from "../../../images/Epochta.svg"
import { MalumotContext } from './contexts/editMalumotlarContext'


export function TeacherDesc() {
    getMalumot();
    const [newObj, setNewObj] = useState({});
    const {setBlok, setEditObj, render} = useContext(MalumotContext)
    let malumotArr = [];

    function getMalumot(){
            fetch("https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/TeacherInfo.json")
            .then(res =>{
                if(!res.ok) throw new Error("Nimadir xato");
                return res.json();
            })
            .then(data =>{
                malumotArr = Object.keys(data).map(key =>{
                    return {
                        ...data[key],
                        id:key,
                    }
                })
                setNewObj(malumotArr[0]);
            })
            .catch(err =>{console.log(err);})
    }
    function editFunck(){
        setBlok(true)
        setEditObj(newObj)
    }


  return (
    <div className="teacherDesc">
        <div className="infoTitle">
            <h1>Malumotlar</h1>
            <img src={editIcon} alt="" onClick={editFunck}/>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={toifa} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Toifa:</h4>
                <p>{newObj.Toifa}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={hudud} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Hudud:</h4>
                <p>{newObj.hudud}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={talimTili} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Talim beradigan tili:</h4>
                <p>{newObj.TalimBeradiganTili}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={chettiliDarajasi} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Chet tillarni bilish daraja:</h4>
                <p>{newObj.ChetTillarniBilishDaraja}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={tamomlaganOTM} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Tamomlagan oliy ta'lim muassasalari:</h4>
                <p>{newObj.TamomlaganOliyTalimMuassasalari}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={faoliyatniBoshlaganYili} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Mehnat faoliyatini boshlagan yili:</h4>
                <p>{newObj.mehnatFaoliyatiniBoshlaganYili}</p>
            </div>
        </div>
        <div className="infoItem">
            <div className="infoIcon">
                <img src={Epochta} alt=""/>
            </div>
            <div className="itemDesc">
                <h4>Tuman:</h4>
                <p>{newObj.tuman}</p>
            </div>
        </div>
</div>
  )
}
