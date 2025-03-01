import { createContext, useEffect } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {

    const apiUri = ''
    const defaultValues = {id: '', description: '', notes: '', statusTypeId: '', startDate: '', endDate: '', userEntityId:'', serviceTypeId: '', customerEntityId: ''};
    const [projects, setProjects] = useState([])
    cont [project, setProject] = useState({defaultValues})

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