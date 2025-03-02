import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../elements/ProjectList'

const Projects = () => {


  return (
    <>
      
      <div className='list-wrapper'>
      
      </div>
      <ProjectList></ProjectList>

      <div>Projects</div>
      <Link to="/projects/create">Skapa nytt projekt</Link>
      <Link to="/projects/edit">Edit page</Link>
    </>
  )
}

export default Projects