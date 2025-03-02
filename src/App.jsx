import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'


function App() {


  return (
    <>
      <main>
        <Routes>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/create" element={<CreateProject />}/>
          {/* <Route path="/projects/edit" element={<EditProject />}/> */}

          <Route path="/projects/:id" element={<EditProject />}/>
          <Route path="/" element={<Projects />}/>
        </Routes>
      </main>

    </>
  )
}

export default App
