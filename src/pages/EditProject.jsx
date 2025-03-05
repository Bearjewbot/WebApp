import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../contexts/ProjectContext';

const EditProject = () => {
    const { id } = useParams();
    const {project, getProjectValues} = useContext(ProjectContext);

    const [formData, setFormData] = useState({
        projectNumber: '',
        projectDescription: '',
        startDate: '',
        endDate: '',
        manager: '',
        projectStatus: ''
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

     useEffect(() => {
         getProjectValues(id)
         
        } , [])

    useEffect(() => {
        if (project) {
            setFormData({
                projectNumber: project.id,
                projectDescription: project.description,
                startDate: project.startDate,
                endDate: project.endDate,
                manager: project.user.fullname,
                projectStatus: project.projectStatus
            });
        }
    }, [project])

    return (
    <>
        
        <div>EditProject</div>
        <Link to="/">Gå tillbaka till projekt</Link>

        <form className='edit-form'>
            <label>Projekt Number:</label>
            <input type="number" id="projectNumber" value={formData.projectNumber} name="projectNumber" readOnly></input>
            
            <label>Projekt beskrivning:</label>
            <input type="text" id="projectDescription" value={formData.projectDescription} name="projectDescription"></input>
            
            <label>Startdatum:</label>
            <input type="date" id="startDate" value={formData.startDate} name="startDate"></input>

            <label>Slutdatum:</label>
            <input type="date" id="endDate" value={formData.endDate} name="endDate"></input>

            <label>Ansvarig:</label>
            <input type="text" id="manager" value={formData.manager} name="manager"></input>

            <label>Projektstatus:</label>
            <select id="projectStatus" value={formData.projectStatus}>

            </select>
            <input type="submit" value="Submit"></input>

        </form>
        <div>{formData.projectNumber}</div>
        <div>{formData.projectDescription}</div>
        <div>{formData.endDate}</div>
        <div>{formData.startDate}</div>
        <div>{formData.manager}</div>
        <div>{formData.projectStatus}</div>

    </>
    
  )
}

export default EditProject