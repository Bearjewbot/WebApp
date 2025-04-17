import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProjectProvider } from './contexts/ProjectContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CustomerProvider } from './contexts/CustomerContext.jsx'
import { ServiceTypeProvider } from './contexts/ServiceTypeContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { StatusProvider } from './contexts/StatusContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StatusProvider>
      <UserProvider>
      <ServiceTypeProvider>
      <CustomerProvider>
      <ProjectProvider>
        <App/>
      </ProjectProvider>
      </CustomerProvider>
      </ServiceTypeProvider>
      </UserProvider>
      </StatusProvider>
    </BrowserRouter>
  </StrictMode>,
)
