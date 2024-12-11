import { createContext, useState } from "react";

export const MalumotContext = createContext(); 

export function MalumotProvider({children}){

    const [editObj, setEditObj] = useState({})
    const [blok, setBlok] = useState(false)
    const [render, setRender] = useState(null)
    
    return (
        <MalumotContext.Provider value={{editObj,setEditObj,blok,setBlok,render,setRender}}>
            {children}
        </MalumotContext.Provider>
    )
}