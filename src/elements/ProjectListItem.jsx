import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({project}) => {

    
  const deleteProject = async () => {
      await fetch(`https://localhost:7291/api/project/${project.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
  })
    
    window.location.reload();   
  }

  return (
    <>
      <div className="list-items">
        <button className='btn btn-secondary' id='delete-project' onClick={deleteProject}>Delete</button>
        <Link className='list-items-wrapper' to={`/projects/${project.id}`} >
        <div className='project' >{project.id}</div> 
        <div className='description' >{project.description}</div> 
        <div className='start'>{project.startDate}</div> 
        <div className='end'>{project.endDate}</div> 
        <div className='manager'>{project.user.fullName}</div> 
        </Link>
      </div>

    </>
  )
}

export default ProjectListItem