import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CustomerContext } from '../contexts/CustomerContext'
import { ServiceTypeContext } from '../contexts/ServiceTypeContext'
import { StatusContext } from '../contexts/StatusContext'
import { UserContext } from '../contexts/UserContext'


const CreateProject = () => {
    
    const {customer, getCustomerValues} = useContext(CustomerContext)
    const {serviceType, getServiceTypeValues} = useContext(ServiceTypeContext)
    const {status, getStatusValues} = useContext(StatusContext)
    const {user, getUserValues} = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {
        getCustomerValues(),
        getServiceTypeValues(),
        getStatusValues(),
        getUserValues()
    }, [])

    const projectRegistration = async (e) => {
        
        e.preventDefault()
        
        const projectData = {
            
            Description: e.target['projectDescription'].value,
            StartDate: e.target['startDate'].value,
            EndDate: e.target['endDate'].value,
            UserId: parseInt(e.target['manager'].value),
            Price: parseInt(e.target['price'].value),
            StatusId: parseInt(e.target['projectStatus'].value),
            ServiceId: parseInt(e.target['projectServiceType'].value),
            CustomerId: parseInt(e.target['customer'].value)
        }

        const response = await fetch('https://localhost:7291/api/project', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        })

        if (response.ok) {
            console.log('Project created!');
            navigate('/projects')
        } else {
            console.error('There was some issue creating the project.');
        }
        
    } 
  
    return (
        <section className="create-project">
          <div className="container">
            <form className="create-form" onSubmit={projectRegistration}>
              <h1>Skapa nytt projekt</h1>
    
              <label htmlFor="projectDescription">Projekt beskrivning:</label>
              <input type="text" id="projectDescription" name="projectDescription" />
    
              <label htmlFor="startDate">Startdatum:</label>
              <input type="date" id="startDate" name="startDate" />
    
              <label htmlFor="endDate">Slutdatum:</label>
              <input type="date" id="endDate" name="endDate" />

              <label htmlFor="price">Pris:</label>
              <input type="number" id="price" name="price" />
    
              <label htmlFor="manager">Ansvarig:</label>
              <select id="manager" name="manager" defaultValue="0">
                <option disabled hidden value="0">Välj en projektansvarig</option>
                {user.map(userKey => (
                  <option key={userKey.id} value={userKey.id}>{userKey.firstName} {userKey.lastName}</option>
                ))}
              </select>
    
              <label htmlFor="projectStatus">Projektstatus:</label>
              <select id="projectStatus" name="projectStatus" defaultValue="0">
                <option disabled hidden value="0">Välj en status</option>
                {status.map(statusKey => (
                  <option key={statusKey.id} value={statusKey.id}>{statusKey.type}</option>
                ))}
              </select>
    
              <label htmlFor="projectServiceType">Projekt tjänst:</label>
              <select id="projectServiceType" name="projectServiceType" defaultValue="0">
                <option disabled hidden value="0">Välj en tjänst</option>
                {serviceType.map(serviceKey => (
                  <option key={serviceKey.id} value={serviceKey.id}>{serviceKey.type}</option>
                ))}
              </select>
    
              <label htmlFor="customer">Kund:</label>
              <select id="customer" name="customer" defaultValue="0">
                <option disabled hidden value="0">Välj en kund</option>
                {customer.map(customerKey => (
                  <option key={customerKey.id} value={customerKey.id}>{customerKey.name}</option>
                ))}
              </select>
                
              <input type="submit" value="Submit"/>
              <Link to="/projects/">Gå tillbaka till startsidan</Link>
            </form>
          </div>
        </section>
      )
    }

export default CreateProject