import React, { useContext, useEffect, useRef, useState } from 'react'
import exitIcon from "../../../../images/exitIcon.svg"
import { PortfolioContext } from '../contexts/editPortfolioContext'
import { AuthContext } from '../../../../contexts/AuthContext';

export function EditPortfolio() {
    const {editObj, blok, setBlok, setRender} = useContext(PortfolioContext);
    console.log(editObj);
    const {auth} = useContext(AuthContext)

    const [editilmiyDaraja, setEditilmiyDaraja] = useState();
    const [editmusobaqaGolibi,setEditmusobaqaGolibi] = useState();
    const [editworldSkillsMutaxassis, setEditworldSkillsMutaxassis] = useState();
    const [edityaratganPraktiklari, setEdityaratganPraktiklari] = useState();
    const [editishStaji, setEditishStaji] = useState();
    const [editilmiyUnvoni, setEditilmiyUnvoni] = useState();
    const [editoquvMeyoriyIshlar, setEditoquvMeyoriyIshlar] = useState();
    const [editkorgazma, setKorgazma] = useState();
    const [editchopEtilgan, setChopetilgan] = useState();
    const [editchiqarganMaqola, setchiqarganMaqola] = useState();
    const [edituslubiyQollanma, setUslubiyQollanma] = useState();
    const [editdavlatMukofot, setDavlatMukofot] = useState();
    const [editmultimediaMateriallar, setMultimediaMateriallar] = useState();
    const editForm = useRef();
    const saveBtn = useRef();

      useEffect(()=>{
        setEditmusobaqaGolibi(editObj.musobaqalar)
        setEditilmiyDaraja(editObj.ilmiy_daraja)
        setEditworldSkillsMutaxassis(editObj.world_skills_mutaxasis)
        setEdityaratganPraktiklari(editObj.yaratgan_praktik)
        setEditishStaji(editObj.ish_staji)
        setEditilmiyUnvoni(editObj.ilmiy_unvon)
        setEditoquvMeyoriyIshlar(editObj.uquv_meyoriy_ishlarda_qatnashganligi)
        setKorgazma(editObj.korgazma_materiallari)
        setChopetilgan(editObj.uquv_qollanmalar)
        setchiqarganMaqola(editObj.maqolalar)
        setUslubiyQollanma(editObj.uslubiy_qollanmalar)
        setDavlatMukofot(editObj.davlat_mukofotlari)
        setMultimediaMateriallar(editObj.multimedialar)
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
            korgazma:editkorgazma,
            chopEtilgan: editchopEtilgan,
            chiqarganMaqola: editchiqarganMaqola,
            uslubiyQollanma: edituslubiyQollanma,
            davlatMukofot: editdavlatMukofot,
            multimediaMateriallar: editmultimediaMateriallar
        }
        
        fetch(`${import.meta.env.VITE_BASE_URL}/profil/${editObj.id}`,{
            method: "PUT",
            body: JSON.stringify(newObj),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.accessToken,
              },
        })
        .then(res =>{
            if(!res.ok) throw new Error("nimadir xato");
            return res.json();
        })
        .then(data =>{
            // setRender(data)
            console.log(data);
            
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
                    <br/><br/>
                    <label htmlFor="korgazmaMaterial">Ko'rgazma materiallari:</label>
                    <input type="number" id="korgazmaMaterial" value={editkorgazma} onChange={(e)=>{
                        setKorgazma(e.target.value)
                    }}/>
                    <br/><br/>
                    <label htmlFor="chopQilinganQollanma">Chop etilgan o'quv qo'llanmalar:</label>
                    <input type="number" id="chopQilinganQollanma" value={editchopEtilgan} onChange={(e)=>{
                        setChopetilgan(e.target.value)
                    }}/>
                </div>
                <div className="centerInput">
                    <label htmlFor="editworldSkillsMutaxassis">Worldskills mutaxassisi</label>
                    <input type="text" id="editworldSkillsMutaxassis" value={editworldSkillsMutaxassis == null ? "" : editworldSkillsMutaxassis} onChange={(e)=>{
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
                    <br/><br/>
                    <label htmlFor="chiqarganMaqola">Chiqargan maqolalar:</label>
                    <input type="number" id="chiqarganMaqola" value={editchiqarganMaqola} onChange={(e)=>{
                        setchiqarganMaqola(e.target.value)
                    }}/>
                    <br/><br/>
                    <label htmlFor="uslubiyQollanmalar">Uslubiy qo'llanmalar:</label>
                    <input type="number" id="uslubiyQollanmalar" value={edituslubiyQollanma} onChange={(e)=>{
                        setUslubiyQollanma(e.target.value)
                    }}/>
                </div>
                <div className="rightInput">
                    <label htmlFor="editilmiyUnvoni">Ilmiy unvon</label>
                    <input type="text" id="editilmiyUnvoni"  value={editilmiyUnvoni} onChange={(e)=>{
                        setEditilmiyUnvoni(e.target.value)
                    }}/><br/><br/>
                    <label htmlFor="editoquvMeyoriyIshlar">O'quv-me'yoriy ishlashda qatnashganligi:</label>
                    <input type="checkbox" checked={editoquvMeyoriyIshlar} id="editoquvMeyoriyIshlar" value={editoquvMeyoriyIshlar} onChange={(e)=>{
                        setEditoquvMeyoriyIshlar(e.target.value)
                    }}/><br/><br/>
                    <label htmlFor="davlatMukofot">Davlat mukofotlari:</label>
                    <input type="number" id="davlatMukofot" value={editdavlatMukofot} onChange={(e)=>{
                        setDavlatMukofot(e.target.value)
                    }}/>
                    <br/><br/>
                    <label htmlFor="multmedia">Multimedia materiallari:</label>
                    <input type="number" id="multmedia" value={editmultimediaMateriallar} onChange={(e)=>{
                        setMultimediaMateriallar(e.target.value)
                    }}/>
                </div>
            </form>
            <div className="editsavePortfolioModalBtn">
                <button id="editsavePortfolioBtn" ref={saveBtn} onClick={savaEditPortfolio}>Edit</button>
            </div>
        </div>            
    </div> 
  )
}
