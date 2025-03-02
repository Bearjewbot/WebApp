import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {

    const apiUri = 'https://localhost:7291/api/project'
    const defaultValues = {id: 0, description: '', notes: '', price: 0, startDate: '', endDate: '', status: {}, user: { fullName: ''}, service: {}, customer: {}};
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({defaultValues})

    const getProjectsValues = async () => {
        const response = await fetch(`${apiUri}`)
        const data = await response.json()
        setProjects(data)
    }

    const getProjectValues = async (id) => {
        const response = await fetch(`${apiUri}/${id}`)
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        getProjectsValues()
    }, [])

    return (
        <ProjectContext.Provider value={{project, projects, getProjectValues, getProjectsValues}}>
            {children}
        </ProjectContext.Provider>
    )
}