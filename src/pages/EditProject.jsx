import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectContext } from '../contexts/ProjectContext';
import { CustomerContext } from '../contexts/CustomerContext'
import { ServiceTypeContext } from '../contexts/ServiceTypeContext'
import { StatusContext } from '../contexts/StatusContext'
import { UserContext } from '../contexts/UserContext'

const EditProject = () => {
    const { id } = useParams();
    const {project, getProjectValues} = useContext(ProjectContext);

    const {customer, getCustomerValues} = useContext(CustomerContext)
    const {serviceType, getServiceTypeValues} = useContext(ServiceTypeContext)
    const {status, getStatusValues} = useContext(StatusContext)
    const {user, getUserValues} = useContext(UserContext)

    useEffect(() => {
        getProjectValues(id),
        getCustomerValues(),
        getServiceTypeValues(),
        getStatusValues(),
        getUserValues()
    }, [])

    useEffect(() => {
        setFormData({
            Id: project.id,
            Description: project.description,
            StartDate: project.startDate,
            EndDate: project.endDate,
            UserId: project.user.id,
            Price: project.price,
            StatusId: project.status.id,
            ServiceId: project.service.id,
            CustomerId: project.customer.id
        })
    }, [project])

    useEffect(() => {
        console.log('Updated project:', project);
    }, [project]);

    const [formData, setFormData] = useState({
            Id: '',
            Description: '',
            StartDate: '',
            EndDate: '',
            UserId: '',
            Price: '',
            StatusId: '',
            ServiceId: '',
            CustomerId: ''
    }, [])

    const inputChange = async (e) => {
        e.preventDefault()
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log(formData)
        console.log('😂')

        const response = await fetch('https://localhost:7291/api/project', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    } 

    return (
    <>
        <section className="edit-project">
            <div className="container">
            <form className="edit-form" onSubmit={handleSubmit}>
                
                <div>Ändra Projekt</div>

                <label htmlFor="changeDescription">Projekt beskrivning:</label>
                <input type="text" id="changeDescription" name="Description" value={formData.Description} onChange={inputChange}/>

                <label htmlFor="changeStartDate">Startdatum:</label>
                <input type="date" id="changeStartDate" name="StartDate" value={formData.StartDate} onChange={inputChange}/>

                <label htmlFor="changeEndDate">Slutdatum:</label>
                <input type="date" id="changeEndDate" name="EndDate" value={formData.EndDate} onChange={inputChange}/>

                <label htmlFor="changePrice">Pris:</label>
                <input type="number" id="changePrice" name="Price" value={formData.Price} onChange={inputChange}/>

                <label htmlFor="changeManager">Ansvarig:</label>
                <select id="changeManager" name="UserId" value={formData.UserId} onChange={inputChange}>
                {user.map(userKey => (
                    <option key={userKey.id} value={userKey.id}>{userKey.firstName} {userKey.lastName}</option>
                ))}
                </select>

                <label htmlFor="changeStatus">Projektstatus:</label>
                <select id="changeStatus" name="StatusId" value={formData.StatusId} onChange={inputChange}>
                {status.map(statusKey => (
                    <option key={statusKey.id} value={statusKey.id}>{statusKey.type}</option>
                ))}
                </select>

                <label htmlFor="changeService">Projekt tjänst:</label>
                <select id="changeService" name="ServiceId" value={formData.ServiceId} onChange={inputChange}>
                {serviceType.map(serviceKey => (
                    <option key={serviceKey.id} value={serviceKey.id}>{serviceKey.type}</option>
                ))}
                </select>

                <label htmlFor="changeCustomer">Kund:</label>
                <select id="changeCustomer" name="CustomerId" value={formData.CustomerId} onChange={inputChange}>
                {customer.map(customerKey => (
                    <option key={customerKey.id} value={customerKey.id}>{customerKey.name}</option>
                ))}
                </select>

                <input type="submit" value="Submit" />
                <Link to="/projects/">Gå tillbaka till startsidan</Link>
            </form>
            </div>
        </section>
      

    </>
    
  )
}

export default EditProject