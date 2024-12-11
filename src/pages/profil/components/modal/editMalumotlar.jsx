import React, { useContext, useEffect, useRef, useState } from 'react'
import exitIcon from "../../../../images/exitIcon.svg"
import { MalumotContext } from '../contexts/editMalumotlarContext'

export function EditMalumotlar() {
    const {blok, setBlok, editObj, setRender} = useContext(MalumotContext)

    const [edithudud, setHudud] = useState()
    const [editChetTillarniBilishDaraja, setChetTillarniBilishDaraja] = useState()
    const [editToifa, setToifa] = useState()
    const [editTamomlaganOliyTalimMuassasalari, setTamomlaganOliyTalimMuassasalari] = useState()
    const [edittuman, setTuman] = useState()
    const [editTalimBeradiganTili, setTalimBeradiganTili] = useState()
    const [editmehnatFaoliyatiniBoshlaganYili, setMehnatFaoliyatiniBoshlaganYili] = useState()
    const saveBtn = useRef();
    const malumotForm = useRef();

    useEffect(()=>{
        setHudud(editObj.hudud)
        setChetTillarniBilishDaraja(editObj.ChetTillarniBilishDaraja)
        setToifa(editObj.Toifa)
        setTamomlaganOliyTalimMuassasalari(editObj.TamomlaganOliyTalimMuassasalari)
        setTuman(editObj.tuman)
        setTalimBeradiganTili(editObj.TalimBeradiganTili)
        setMehnatFaoliyatiniBoshlaganYili(editObj.mehnatFaoliyatiniBoshlaganYili)
    },[editObj])


    function saveMalumotFunk(){
        let newObj = {
            id:editObj.id,
            hudud:edithudud,
            ChetTillarniBilishDaraja:editChetTillarniBilishDaraja,
            Toifa: editToifa,
            TamomlaganOliyTalimMuassasalari: editTamomlaganOliyTalimMuassasalari,
            tuman: edittuman,
            TalimBeradiganTili: editTalimBeradiganTili,
            mehnatFaoliyatiniBoshlaganYili:editmehnatFaoliyatiniBoshlaganYili,
        }

        fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/TeacherInfo/${editObj.id}.json`,{
            method: "PUT",
            body: JSON.stringify(newObj)
        })
        .then(res =>{
            if(!res.ok) throw new Error("nimadir xato");
            return res.json();
        })
        .then(data =>{
            setRender(data)
        })
        .catch(err =>{
            console.log(err);
        })
        .finally(()=>{
            saveBtn.current.innerHTML = "Edit"
            malumotForm.current.reset();
            setBlok(false)
        })
        saveBtn.current.innerHTML =  `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
    }


  return (
    blok && <div className="editMalumotlar">
                <div className="editMalumotlarModal">
                        <div className="modalTitle">
                            <h4>Malumotlar</h4>
                            <img src={exitIcon} id="exitInfoModal" alt="" onClick={()=>setBlok(false)}/>
                        </div>
                        <form action="" className="editMalumotlarForm" ref={malumotForm}>
                            <div className="leftInput">
                                <label htmlFor="hudud">Hudud:</label><br/>
                                <select name="" id="hudud" value={edithudud} onChange={(e)=>{
                                    setHudud(e.target.value)
                                }}>
                                    <option value="Surxondaryo">Surxondaryo</option>
                                    <option value="Qashqadaryo">Qashqadaryo</option>
                                </select><br/><br/>
                                <label htmlFor="ChetTillarniBilishDaraja">Chet tillarni bilish daraja:</label><br/>
                            
                                <select name="" id="ChetTillarniBilishDaraja" value={editChetTillarniBilishDaraja} onChange={(e)=>{
                                    setChetTillarniBilishDaraja(e.target.value)
                                }}>
                                    <option value="yaxwi">yaxwi</option>
                                    <option value="yomon">yomon</option>
                                    <option value="orta">o'rta</option>
                                </select>
                            </div>
                            <div className="centerInput">
                                <label htmlFor="Toifa">Toifa:</label>
                                <input type="text" id="Toifa" value={editToifa} onChange={(e)=>{
                                    setToifa(e.target.value)
                                }}/><br/><br/>
                                <label htmlFor="TamomlaganOliyTalimMuassasalari">Tamomlagan oliy ta'lim muassasalari:</label>
                                <input type="text" id="TamomlaganOliyTalimMuassasalari" value={editTamomlaganOliyTalimMuassasalari} onChange={(e)=>{
                                    setTamomlaganOliyTalimMuassasalari(e.target.value)
                                }}/><br/><br/>
                                <label htmlFor="tuman">Tuman:</label>
                                <input type="text" id="tuman" value={edittuman} onChange={(e)=>{
                                    setTuman(e.target.value)
                                }}/>
                            </div>
                            <div className="rightInput">
                                <label htmlFor="TalimBeradiganTili">Talim beradigan tili:</label><br/>
                                <select name="" id="TalimBeradiganTili" value={editTalimBeradiganTili} onChange={(e)=>{
                                    setTalimBeradiganTili(e.target.value)
                                }}>
                                    <option value="ozbek">o'zbek</option>
                                    <option value="rus">rus</option>
                                    <option value="ingliz">ingliz</option>
                                </select><br/><br/>
                                <label htmlFor="mehnatFaoliyatiniBoshlaganYili">Mehnat faoliyatini boshlagan yili:</label>
                                <input type="text" id="mehnatFaoliyatiniBoshlaganYili" value={editmehnatFaoliyatiniBoshlaganYili} onChange={(e)=>{
                                    setMehnatFaoliyatiniBoshlaganYili(e.target.value)
                                }}/><br/><br/>
                            </div>
                        </form>
                        <div className="saveMalumotlarBtn">
                            <button id="editSavebtn" ref={saveBtn} onClick={saveMalumotFunk}>Edit</button>
                        </div>
                </div>
            </div>
  )
}
