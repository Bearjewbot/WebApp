import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CreateProject = () => {
    const [newProjectNumber, setNewProjectNumber] = useState()

    useEffect(() => {
        setNewProjectNumber(100)
    }, [])

  return (
    <>
        <section className='section-title'>
            <div className='container'>
                <h1>Projekt {newProjectNumber} - Skapa nytt</h1>
                
                <Link to="/projects/">Gå till projekt</Link>
            </div>
        </section>
    
    </>
  )
}

export default CreateProject