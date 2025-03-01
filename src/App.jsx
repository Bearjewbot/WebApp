import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'

function App() {


  return (
    <>
     <BrowserRouter>
      <header>

      </header>
      <main>
      <Routes>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/create" element={<CreateProject />}/>
        <Route path="/projects/edit" element={<EditProject />}/>

        <Route path="/" element={<Projects />}/>
      </Routes>
      </main>
      <footer>Footer</footer>
     </BrowserRouter>
    </>
  )
}

export default App
