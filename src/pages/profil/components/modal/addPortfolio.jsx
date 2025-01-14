import React, { useContext, useRef } from 'react'
import exitIcon from "../../../../images/exitIcon.svg"
import { PortfolioContext } from '../contexts/editPortfolioContext'

export function AddPortfolio() {
    const { Addblok, setAddBlok, setAddObj } = useContext(PortfolioContext)

    let ilmiyDaraja = useRef();
    let musobaqaGolibi = useRef();
    let worldSkillsMutaxassis = useRef();
    let yaratganPraktiklari = useRef();
    let ishStaji = useRef();
    let ilmiyUnvoni = useRef();
    let oquvMeyoriyIshlar = useRef();
    let regPortfolioForm = useRef();
    let saveBtn = useRef();

    function AddSavaPortfolio() {

        let newObj = {
            ilmiyDaraja: ilmiyDaraja.current.value,
            musobaqaGolibi: musobaqaGolibi.current.value,
            worldSkillsMutaxassis: worldSkillsMutaxassis.current.value,
            yaratganPraktiklari: yaratganPraktiklari.current.value,
            ishStaji: ishStaji.current.value,
            ilmiyUnvoni: ilmiyUnvoni.current.value,
            oquvMeyoriyIshlar: oquvMeyoriyIshlar.current.value,
        }
        let errorArr = Object.keys(newObj).filter(key => {
            return !newObj[key];
        })
        errorArr.forEach(item => {
            document.getElementById(`${item}`).classList.add("errorBorder")
        })
        Array.from(regPortfolioForm.current).forEach(item => {
            item.addEventListener("change", (e) => {
                if (e.target.value) {
                    item.classList.remove("errorBorder")
                }
                else {
                    item.classList.add("errorBorder")
                }
            })
        })
        if (errorArr.length == 0) {
            fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/portfolio.json`, {
                method: "POST",
                body: JSON.stringify(newObj),
            })
                .then(res => {
                    if (!res.ok) throw new Error("nimadir xato");
                    return res.json();
                })
                .then(data => {
                    setAddObj(data)
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
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
                    <h4>
                        Ma'lumotlarni kiritish
                    </h4>
                    <img src={exitIcon} alt="" id="exitPortfolioModal" onClick={() => setAddBlok(false)} />
                </div>
                <form action="" className="addPortfolioForm" ref={regPortfolioForm}>
                    <div className="leftInput">
                        <label htmlFor="ilmiyDaraja">Hujjat turi</label><br />
                        <select name="" id="ilmiyDaraja" ref={ilmiyDaraja}>
                            <option value="Raqamli ta‘lim resusrlari">Raqamli ta‘lim resusrlari</option>
                            <option value="2">2</option>
                        </select><br /><br />
                        <label htmlFor="musobaqaGolibi">Talim muassasasi</label>
                        <select name="" id="musobaqaGolibi" ref={musobaqaGolibi} >
                            <option value=" Bulung'ur tumani 2-sonli kasb-hunar maktabi"> Bulung'ur tumani 2-sonli kasb-hunar maktabi</option>
                        </select>
                        <br /><br />
                        <div className='sana'>
                            <label htmlFor="sana">Yaratilgan sanasi</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="centerInput">
                        <label htmlFor="worldSkillsMutaxassis">Adabiyotlar turi</label>
                        <select name="" id="worldSkillsMutaxassis" ref={worldSkillsMutaxassis} >
                            <option value="O‘quv qullanma">O‘quv qullanma</option>
                            <option value="1">1</option>
                        </select>
                        <br /><br />
                        <label htmlFor="yaratganPraktiklari">Jo'natuvchi</label>
                        <input type="text" id="yaratganPraktiklari" ref={yaratganPraktiklari} /><br /><br />
                        <label htmlFor="ishStaji">Jo'natuvchi hudud</label>
                        <select name="" id="ishStaji" ref={ishStaji}>
                            <option value="Toshkent">Toshkent shahar</option>
                            <option value="Samarqand">Samarqand shahar</option>
                        </select>

                    </div>

                </form>
                <div className='textarea'>
                    <textarea name="" id="" placeholder="VPN ko' rsatmalariga amal qilgan Hermes Uztelecom bilan shartnoma tuzish bo'yicha muzokaralarni davom ettirmoqda"></textarea>
                </div>
                <div className='addPortfolioBottom'>
                    <div>
                        <div className="addFayl">
                            <label htmlFor="myfile" className='custom-file-upload'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831" stroke="#2E94F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> Fayl biriktirish</label>
                            <input type="file" id="myfile" />
                        </div>
                        <div className="addFayl">
                            <label htmlFor="myfile" className='custom-file-upload'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831" stroke="#2E94F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> Adabiyot biriktirish</label>
                            <input type="file" id="myfile" />
                        </div>
                    </div>
                    <div className="savePortfolioModalBtn">
                        <button id="savePortfolioBtn" ref={saveBtn} onClick={AddSavaPortfolio}>Yuborish</button>
                        <button className='radetish'>Rad etish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
