import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const apiUri = 'https://localhost:7291/api/user'
    const [user, setUser] = useState([])

    const getUserValues = async () => {
        const response = await fetch(`${apiUri}`)
        const data = await response.json()
        setUser(data)
    }

    useEffect(() => {
        getUserValues()
    }, [])

    return (
        <UserContext.Provider value={{user, getUserValues}}>
            {children}
        </UserContext.Provider>
    )
}