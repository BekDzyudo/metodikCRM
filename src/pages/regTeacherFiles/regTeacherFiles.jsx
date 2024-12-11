import React, { useRef, useState } from 'react'
import pulsPortfolio from "../../images/pulsPortfolio.svg"
import newLogo from "../../images/newLogo.svg"
import "./regTeacherFiles.scss"

export function RegTeacherFiles() {
    const davlatMukofoti = useRef();
    const uslubiyQollanma = useRef();
    const chiqarganMaqolasi = useRef();
    const korgazmaMaterial = useRef();
    const multmediaMaterial = useRef();
    const oquvQollanmalari = useRef();
    const addFileBtn = useRef();
    const formFile = useRef();

    let davlatMukofotiSet = new Set();
    let uslubiyQollanmaSet = new Set();
    let chiqarganMaqolasiSet = new Set();
    let korgazmaMaterialSet = new Set();
    let multmediaMaterialSet = new Set();
    let oquvQollanmalariSet = new Set();

    let filesObj;
   
    function davlatMukofotiChange(e){
        for (const file of davlatMukofoti.current.files) {
            davlatMukofotiSet.add(file.name);
        }
        if(davlatMukofotiSet.size !== 0){
            document.getElementById("file1").innerHTML = `${davlatMukofotiSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file1").innerHTML = `select a folder`;
        }
    }
    function uslubiyQollanmaChange(e){
        for (const file of uslubiyQollanma.current.files) {
            uslubiyQollanmaSet.add(file.name);
        }
        if(uslubiyQollanmaSet.size !== 0){
            document.getElementById("file2").innerHTML = `${uslubiyQollanmaSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file2").innerHTML = `select a folder`;
        }
    }
    function chiqarganMaqolasiChange(){
        for (const file of chiqarganMaqolasi.current.files) {
            chiqarganMaqolasiSet.add(file.name);
        }
        if(chiqarganMaqolasiSet.size !== 0){
            document.getElementById("file3").innerHTML = `${chiqarganMaqolasiSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file3").innerHTML = `select a folder`;
        }
    }
    function korgazmaMaterialChange(){
        for (const file of korgazmaMaterial.current.files) {
            korgazmaMaterialSet.add(file.name);
        }
        if(korgazmaMaterialSet.size !== 0){
            document.getElementById("file4").innerHTML = `${korgazmaMaterialSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file4").innerHTML = `select a folder`;
        }
    }
    function oquvQollanmalariChange(){
        for (const file of oquvQollanmalari.current.files) {
            oquvQollanmalariSet.add(file.name);
        }
        if(oquvQollanmalariSet.size !== 0){
            document.getElementById("file6").innerHTML = `${oquvQollanmalariSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file6").innerHTML = `select a folder`;
        }
    }
    function multmediaMaterialChange(){
        for (const file of multmediaMaterial.current.files) {
            multmediaMaterialSet.add(file.name);
        }
        if(multmediaMaterialSet.size !== 0){
            document.getElementById("file5").innerHTML = `${multmediaMaterialSet.size} ta file tanlandi`
        }
        else{
            document.getElementById("file5").innerHTML = `select a folder`;
        }
    }

    function addFiles(){
        filesObj = {
            davlatMukofoti: davlatMukofotiSet.size,
            uslubiyQollanma: uslubiyQollanmaSet.size,
            chiqarganMaqolasi: chiqarganMaqolasiSet.size,
            korgazmaMaterial: korgazmaMaterialSet.size,
            multmediaMaterial: multmediaMaterialSet.size,
            oquvQollanmalari: oquvQollanmalariSet.size,
        }
        fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/teacherFiles.json`,{
            method: "POST",
            body: JSON.stringify(filesObj),
        })
        .then(res =>{
            if(!res.ok) throw new Error("Nimadir xato")
            return res.json();
        })
        .then(data =>{

        })
        .catch(err =>{
            console.log(err);
        })
        .finally(()=>{
            formFile.current.reset();
            addFileBtn.current.innerHTML = "Davom etish";
            for(let i=1; i<=6; i++){
                document.getElementById(`file${i}`).innerHTML = "select a folder"
            }
        })
        addFileBtn.current.innerHTML =  `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
    }

  return (
    <div className="regTeacherFiles">
        <div className="container">
            <div className="regDataPF">
                <div className="logo">
                    <img src={newLogo} alt=""/>
                </div>
                <div className="title">
                    <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>
                        <p>Ro'yxatdan o'tish</p>
                </div>
               
                    <form action="" className="regTeacherFilesForm" ref={formFile}>
                        <div className="leftInput">
                           
                            <label htmlFor="davlatMukofoti"><img src={pulsPortfolio} alt=""/><div>
                                <p>Davlat mukofotlari</p>
                                <h5 id="file1">select a folder</h5>
                            </div>
                            </label>
                            <input type="file" id="davlatMukofoti" ref={davlatMukofoti} multiple onChange={davlatMukofotiChange}/>

                            <label htmlFor="uslubiyQollanma"><img src={pulsPortfolio} alt=""/><div>
                                <p>Uslubiy qo'llanmalar</p>
                                <h5 id="file2">select a folder</h5>
                            </div></label>
                            <input type="file" id="uslubiyQollanma" ref={uslubiyQollanma} multiple onChange={uslubiyQollanmaChange}/>

                            <label htmlFor="chiqarganMaqolasi"><img src={pulsPortfolio} alt=""/><div>
                                <p>Chiqargan maqolalari</p>
                                <h5 id="file3">select a folder</h5>
                            </div></label>
                            <input type="file" id="chiqarganMaqolasi" ref={chiqarganMaqolasi} multiple onChange={chiqarganMaqolasiChange}/>
                        </div>
                        
                        <div className="rightInput">

                            <label htmlFor="korgazmaMaterial"><img src={pulsPortfolio} alt=""/>
                            <div>
                                <p>Ko'rgazma materiallari</p>
                                <h5 id="file4">select a folder</h5>
                            </div>
                            </label>
                            <input type="file" id="korgazmaMaterial" ref={korgazmaMaterial} multiple onChange={korgazmaMaterialChange}/>
                            <label htmlFor="multmediaMaterial"><img src={pulsPortfolio} alt=""/>
                            <div>
                                <p>Multimedia materiallari</p>
                                <h5 id="file5">select a folder</h5>
                            </div>
                            </label>
                            <input type="file" id="multmediaMaterial" ref={multmediaMaterial} multiple onChange={multmediaMaterialChange}/>
                            <label htmlFor="oquvQollanmalari"><img src={pulsPortfolio} alt=""/>
                            <div>
                                <p>Chop ettirgan 
                                    o'quv qo'llanmalari</p>
                                    <h5 id="file6">select a folder</h5>
                            </div>
                            </label>
                            <input type="file" id="oquvQollanmalari" ref={oquvQollanmalari} multiple onChange={oquvQollanmalariChange}/>
                        </div>
                    </form>
                    <div className="savefilesButton">
                        <button id="saveTeacherFiles" ref={addFileBtn} onClick={addFiles}>Davom etish</button>
                    </div>
               
            </div>
        </div>
    </div>
  )

}