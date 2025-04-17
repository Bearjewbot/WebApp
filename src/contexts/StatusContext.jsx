import { createContext, useEffect, useState } from "react";

export const StatusContext = createContext()

export const StatusProvider = ({children}) => {

    const apiUri = 'https://localhost:7291/api/status'
    const [status, setStatus] = useState([])

    const getStatusValues = async () => {
        const response = await fetch(`${apiUri}`)
        const data = await response.json()
        setStatus(data)

    }

    useEffect(() => {
        getStatusValues()
    }, [])

    return (
        <StatusContext.Provider value={{status, getStatusValues}}>
            {children}
        </StatusContext.Provider>
    )
}