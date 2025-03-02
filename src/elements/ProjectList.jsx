import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import ProjectListItem from './ProjectListItem'

const ProjectList = () => {

    const {projects, getProjectsValues} = useContext(ProjectContext)

  useEffect(() => {
     getProjectsValues()
  } , [])
  

  return (
    <div>ProjectList
    {
        projects.map(project => (
            <ProjectListItem key={project.id} item={project}/>
        ))
    }
    </div>
  )
}

export default ProjectList