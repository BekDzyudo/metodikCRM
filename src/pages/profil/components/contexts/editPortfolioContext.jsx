import { createContext, useState } from "react";
export const PortfolioContext = createContext();

export function PortfolioProvider({children}){
    const [editObj, setEditObj] = useState({})
    const [AddObj, setAddObj] = useState({})
    const [blok, setBlok] = useState(false);
    const [Addblok, setAddBlok] = useState(false);
    const [render, setRender] = useState(null);
    const [addhujjat, setAddHujjat] = useState(false);
    return (
        <PortfolioContext.Provider value={{editObj, setEditObj, blok, setBlok, render, setRender,Addblok,setAddBlok, AddObj, setAddObj, addhujjat, setAddHujjat}}>
            {children}
        </PortfolioContext.Provider>
    )
}