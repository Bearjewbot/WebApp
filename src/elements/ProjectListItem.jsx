import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({project}) => {


  return (
    <Link className='list-items-wrapper' to={`/projects/${project.id}`} >
       <div className='project' >{project.id}</div> 
       <div className='description' >{project.description}</div> 
       <div className='start'>{project.startDate}</div> 
       <div className='end'>{project.endDate}</div> 
       <div className='manager'>{project.user.fullName}</div> 
    </Link>

  )
}

export default ProjectListItem