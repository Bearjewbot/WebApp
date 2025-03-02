import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import ProjectListItem from './ProjectListItem'

const ProjectList = () => {

    const {projects, getProjectsValues} = useContext(ProjectContext)

  useEffect(() => {
     getProjectsValues()
  } , [])
  

  return (
    <div className='project-list-wrapper' >
       <div className='list-headlines' >
            <div>PROJEKT NUMMER</div> 
            <div>BESKRIVNING</div> 
            <div>PÅBÖRJAS</div> 
            <div>AVSLUTAS</div> 
            <div>ANSVARIG</div>
       </div> 

    {
        projects.map(project => (
            <ProjectListItem key={project.id} item={project}/>
        ))
    }
    </div>
  )
}

export default ProjectList