import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export const GlobalContext = createContext()


function GlobalContextProvider({ children }) {

    const [list, setList] = useState(localStorage.hasOwnProperty("list") ? JSON.parse(localStorage.getItem("list")) : []);
    const object = { list, setList }

    useEffect(() => {
        console.log(list);
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    
    return (
        <GlobalContext.Provider value={object}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider