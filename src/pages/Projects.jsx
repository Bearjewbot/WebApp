import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
      
      <div className='list-wrapper'>
      <ul>
        <li>Project Number</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>

      <ul>
        <li>Beskrivning</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      <ul>
        <li></li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      </div>
      

      <div>Projects</div>
      <Link to="/projects/create">Skapa nytt projekt</Link>
      <Link to="/projects/edit">Edit page</Link>
    </>
  )
}

export default Projects