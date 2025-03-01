import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const EditProject = () => {
  
    const defailtValues = {Title: 'Hej', Description: ''}
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