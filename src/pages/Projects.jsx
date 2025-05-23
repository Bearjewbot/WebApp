import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../elements/ProjectList'

const Projects = () => {

  return (
    <>
      <div className='project-list'>
        <ProjectList/>
      </div>

      <Link className='projects-buttons'to="/projects/create">Skapa nytt projekt</Link>
    </>
  )
}

export default Projects