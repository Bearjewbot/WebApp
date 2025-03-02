import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../contexts/ProjectContext';

const EditProject = () => {

    const { id } = useParams();
    const {project, getProjectValues} = useContext(ProjectContext);

     useEffect(() => {
         getProjectValues(id)
         if (id !== 0) {
         document.getElementById('projectNumber').value = project.id;
         document.getElementById('projectDescription').value = project.description;
         }
     } , [id])

    return (
    <>
        
        <div>EditProject</div>
        <Link to="/projects/">Gå till projekt</Link>

        <form>
            <label for="projectNumber">Project Number:</label>
            <input type="text" id="projectNumber" name="projectNumber" ></input>
            <br></br>
            <label for="projectDescription">Project Description:</label>
            <input type="text" id="projectDescription" name="projectDescription"></input>
            <br></br>
            <input type="submit" value="Submit"></input>

        </form>
    </>
    
  )
}

export default EditProject