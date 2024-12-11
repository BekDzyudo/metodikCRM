import React, { useContext, useRef } from 'react'
import exitIcon from "../../../../images/exitIcon.svg"
import { PortfolioContext } from '../contexts/editPortfolioContext'

export function AddPortfolio() {
    const {Addblok, setAddBlok,setAddObj} = useContext(PortfolioContext)

    let ilmiyDaraja = useRef();
    let musobaqaGolibi = useRef();
    let worldSkillsMutaxassis = useRef();
    let yaratganPraktiklari = useRef();
    let ishStaji = useRef();
    let ilmiyUnvoni = useRef();
    let oquvMeyoriyIshlar = useRef();
    let regPortfolioForm = useRef();
    let saveBtn = useRef();

    function AddSavaPortfolio(){

      let newObj = {
        ilmiyDaraja: ilmiyDaraja.current.value,
        musobaqaGolibi: musobaqaGolibi.current.value,
        worldSkillsMutaxassis: worldSkillsMutaxassis.current.value,
        yaratganPraktiklari: yaratganPraktiklari.current.value,
        ishStaji: ishStaji.current.value,
        ilmiyUnvoni: ilmiyUnvoni.current.value,
        oquvMeyoriyIshlar: oquvMeyoriyIshlar.current.value,
      }
      let errorArr = Object.keys(newObj).filter(key =>{
        return !newObj[key];
    })
    errorArr.forEach(item =>{
        document.getElementById(`${item}`).classList.add("errorBorder") 
    })
    Array.from(regPortfolioForm.current).forEach(item=>{
        item.addEventListener("change",(e)=>{
            if(e.target.value){
                item.classList.remove("errorBorder")
            }
            else{
                item.classList.add("errorBorder")
            }
        })
    })
    if(errorArr.length == 0){
        fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio.json`,{
            method: "POST",
            body: JSON.stringify(newObj),
        })
        .then(res =>{
            if(!res.ok) throw new Error("nimadir xato");
            return res.json();
        })
        .then(data =>{
           setAddObj(data)
        })
        .catch(err =>{
            console.log(err);
        })
        .finally(()=>{
            regPortfolioForm.current.reset();
            saveBtn.current.innerHTML = "Saqlash"
            setAddBlok(false)
        })
        saveBtn.current.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
         </div>`;
    }
    }
  return (
    Addblok && <div className="addPortfolio">
        <div className="addPortfolioModal">
               <div className="modalTitle">
                 <h4>Portfolio</h4>
                 <img src={exitIcon} alt="" id="exitPortfolioModal" onClick={()=>setAddBlok(false)}/>
             </div>
            <form action="" className="addPortfolioForm" ref={regPortfolioForm}>
                  <div className="leftInput">
                        <label htmlFor="ilmiyDaraja">Ilmiy daraja</label><br/>
                    <select name="" id="ilmiyDaraja" ref={ilmiyDaraja}>
                           <option value="dotsent">dotsent</option>
                          <option value="katta O'qituvchi">katta o'qituvch</option>
                       </select><br/><br/>
                       <label htmlFor="musobaqaGolibi">Musobaqa g'olibi:</label>
                       <input type="text" id="musobaqaGolibi" ref={musobaqaGolibi}/>
                 </div>
                <div className="centerInput">
                     <label htmlFor="worldSkillsMutaxassis">Worldskills mutaxassisi</label>
                     <input type="text" id="worldSkillsMutaxassis" ref={worldSkillsMutaxassis}/><br/><br/>
                    <label htmlFor="yaratganPraktiklari">Yaratgan praktiklar:</label>
                    <input type="text" id="yaratganPraktiklari" ref={yaratganPraktiklari}/><br/><br/>
                    <label htmlFor="ishStaji">Ta'lim sohasidagi umumiy ish staji:</label>
                    <input type="number" id="ishStaji" ref={ishStaji}/>
                 </div>
                 <div className="rightInput">
                    <label htmlFor="ilmiyUnvoni">Ilmiy unvon</label>
                    <input type="text" id="ilmiyUnvoni" ref={ilmiyUnvoni}/><br/><br/>
                    <label htmlFor="oquvMeyoriyIshlar">O'quv-me'yoriy ishlashda qatnashganligi:</label>
                    <input type="text" id="oquvMeyoriyIshlar" ref={oquvMeyoriyIshlar}/><br/><br/>
                 </div>
            </form>
             <div className="savePortfolioModalBtn">
                <button id="savePortfolioBtn" ref={saveBtn} onClick={AddSavaPortfolio}>Saqlash</button>
            </div>
        </div>
    </div>
  )
}
