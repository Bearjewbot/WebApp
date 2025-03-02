import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({project}) => {


  return (
    <Link to={`/projects/${project.id}`} >
       <div>{project.id}</div> 
       <div>{project.description}</div> 
       <div>{project.startDate}</div> 
       <div>{project.endDate}</div> 
       <div>{project.userEntityId.fullName}</div> 
    </Link>

  )
}

export default ProjectListItem