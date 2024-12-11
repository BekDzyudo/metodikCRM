import React, { useContext, useEffect, useRef, useState } from 'react'
import exitIcon from "../../../../images/exitIcon.svg"
import { PortfolioContext } from '../contexts/editPortfolioContext'

export function EditPortfolio() {
    const {editObj, blok, setBlok, setRender} = useContext(PortfolioContext);

    const [editilmiyDaraja, setEditilmiyDaraja] = useState();
    const [editmusobaqaGolibi,setEditmusobaqaGolibi] = useState();
    const [editworldSkillsMutaxassis, setEditworldSkillsMutaxassis] = useState();
    const [edityaratganPraktiklari, setEdityaratganPraktiklari] = useState();
    const [editishStaji, setEditishStaji] = useState();
    const [editilmiyUnvoni, setEditilmiyUnvoni] = useState();
    const [editoquvMeyoriyIshlar, setEditoquvMeyoriyIshlar] = useState();
    const editForm = useRef();
    const saveBtn = useRef();

      useEffect(()=>{
        setEditmusobaqaGolibi(editObj.musobaqaGolibi)
        setEditilmiyDaraja(editObj.ilmiyDaraja)
        setEditworldSkillsMutaxassis(editObj.worldSkillsMutaxassis)
        setEdityaratganPraktiklari(editObj.yaratganPraktiklari)
        setEditishStaji(editObj.ishStaji)
        setEditilmiyUnvoni(editObj.ilmiyUnvoni)
        setEditoquvMeyoriyIshlar(editObj.oquvMeyoriyIshlar)
  },[editObj])
    

    function savaEditPortfolio(){

        let newObj = {
            id:editObj.id,
            ilmiyDaraja: editilmiyDaraja,
            musobaqaGolibi: editmusobaqaGolibi,
            worldSkillsMutaxassis: editworldSkillsMutaxassis,
            yaratganPraktiklari: edityaratganPraktiklari,
            ishStaji: editishStaji,
            ilmiyUnvoni: editilmiyUnvoni,
            oquvMeyoriyIshlar: editoquvMeyoriyIshlar,
        }
        
        fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio/${editObj.id}.json`,{
            method: "PUT",
            body: JSON.stringify(newObj),
        })
        .then(res =>{
            if(!res.ok) throw new Error("nimadir xato");
            return res.json();
        })
        .then(data =>{
            setRender(data)
        })
        .catch(err => console.log(err))
        .finally(()=>{
            saveBtn.current.innerHTML = "Edit"
            editForm.current.reset()
            setBlok(false)

        })
        saveBtn.current.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
    }

  return (
    blok &&
    <div className="editPortfolio">
        <div className="editPortfolioModal">
            <div className="modalTitle">
                <h4>Portfolio</h4>
                <img src={exitIcon} alt="" id="editexitPortfolioModal" onClick={()=>setBlok(false)}/>
            </div>
            <form action="" className="editPortfolioForm" ref={editForm}>
                <div className="leftInput">
                    <label htmlFor="editilmiyDaraja">Ilmiy daraja</label><br/>
                    <select name="" id="editilmiyDaraja"  value={editilmiyDaraja} onChange={(e)=>{
                        setEditilmiyDaraja(e.target.value)
                    }}>
                        <option value="dotsent">dotsent</option>
                        <option value="katta O'qituvchi">katta o'qituvch</option>
                    </select><br/><br/>
                    <label htmlFor="editmusobaqaGolibi">Musobaqa g'olibi:</label>
                    <input type="text"  id="editmusobaqaGolibi" value={editmusobaqaGolibi} onChange={(e)=>{
                        setEditmusobaqaGolibi(e.target.value)
                    }} />
                </div>
                <div className="centerInput">
                    <label htmlFor="editworldSkillsMutaxassis">Worldskills mutaxassisi</label>
                    <input type="text" id="editworldSkillsMutaxassis" value={editworldSkillsMutaxassis} onChange={(e)=>{
                        setEditworldSkillsMutaxassis(e.target.value)
                    }}/><br/><br/>
                    <label htmlFor="edityaratganPraktiklari">Yaratgan praktiklar:</label>
                    <input type="text" id="edityaratganPraktiklari"  value={edityaratganPraktiklari} onChange={(e)=>{
                        setEdityaratganPraktiklari(e.target.value)
                    }}/><br/><br/>
                    <label htmlFor="editishStaji">Ta'lim sohasidagi umumiy ish staji:</label>
                    <input type="number" id="editishStaji" value={editishStaji} onChange={(e)=>{
                        setEditishStaji(e.target.value)
                    }}/>
                </div>
                <div className="rightInput">
                    <label htmlFor="editilmiyUnvoni">Ilmiy unvon</label>
                    <input type="text" id="editilmiyUnvoni"  value={editilmiyUnvoni} onChange={(e)=>{
                        setEditilmiyUnvoni(e.target.value)
                    }}/><br/><br/>
                    <label htmlFor="editoquvMeyoriyIshlar">O'quv-me'yoriy ishlashda qatnashganligi:</label>
                    <input type="text" id="editoquvMeyoriyIshlar" value={editoquvMeyoriyIshlar} onChange={(e)=>{
                        setEditoquvMeyoriyIshlar(e.target.value)
                    }}/><br/><br/>
                </div>
            </form>
            <div className="editsavePortfolioModalBtn">
                <button id="editsavePortfolioBtn" ref={saveBtn} onClick={savaEditPortfolio}>Edit</button>
            </div>
        </div>            
    </div> 
  )
}
