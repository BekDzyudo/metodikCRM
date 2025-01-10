import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) =>{
    const [boshlangichSidebar, setBoshlangichSidebar] = useState(JSON.parse(localStorage.getItem("boshlangich")) ?? [])
    const [ortaSidebar, setOrtaSidebar] = useState(JSON.parse(localStorage.getItem("orta")) ?? [])
    const [maxsusSidebar, setMaxsusSidebar] = useState(JSON.parse(localStorage.getItem("maxsus")) ?? [])
    
      return (
        <GlobalContext.Provider value={{boshlangichSidebar, setBoshlangichSidebar, ortaSidebar, setOrtaSidebar, maxsusSidebar, setMaxsusSidebar}}>
            {children}
        </GlobalContext.Provider>
      )
}
