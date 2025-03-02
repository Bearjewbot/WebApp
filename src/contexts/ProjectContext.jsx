import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {

    const apiUri = ''
    const defaultValues = {id: 0, description: '', notes: '', statusType: {}, startDate: '', endDate: '', userEntity: {}, serviceType: {}, customerEntity: {}};
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