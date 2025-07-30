import { createContext, useState,useEffect } from "react";
import { person } from "./Data";
export const DataContext = createContext();

export function DataProvider({ children }) {

    const [state, setState] = useState()

    const handleClick = () => {
        setState({ ...state, state: "tamilnadu" })
    }
        useEffect(() => {
        setState(person)
    }, [])
  console.log(state)
    return (
        <DataContext.Provider value={{ handleClick, state }}>
            {children}
        </DataContext.Provider>
    )
}