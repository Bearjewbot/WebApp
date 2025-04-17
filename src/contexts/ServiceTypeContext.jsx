import { createContext, useEffect, useState } from "react";

export const ServiceTypeContext = createContext()

export const ServiceTypeProvider = ({children}) => {

    const apiUri = 'https://localhost:7291/api/ServiceType'
    const [serviceType, setServiceType] = useState([])

    const getServiceTypeValues = async () => {
        const response = await fetch(`${apiUri}`)
        const data = await response.json()
        setServiceType(data)
    }

    useEffect(() => {
        getServiceTypeValues()
    }, [])

    return (
        <ServiceTypeContext.Provider value={{serviceType, getServiceTypeValues}}>
            {children}
        </ServiceTypeContext.Provider>
    )
}