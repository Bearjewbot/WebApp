import { createContext, useEffect, useState } from "react";

export const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {

    const apiUri = 'https://localhost:7291/api/customer'
    const [customer, setCustomer] = useState([])

    const getCustomerValues = async () => {
        const response = await fetch(`${apiUri}`)
        const data = await response.json()
        setCustomer(data)
    }

    useEffect(() => {
        getCustomerValues()
    }, [])

    return (
        <CustomerContext.Provider value={{customer, getCustomerValues}}>
            {children}
        </CustomerContext.Provider>
    )
}