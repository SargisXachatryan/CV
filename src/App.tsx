import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CVPage from './pages/CVPage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectPage from './pages/ProjectPage'
import '../src/styles/global.css'

export default function App() {
  const base = "/CV/"
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={base} element={<CVPage />} />
        <Route path={base + "portfolio"} element={<PortfolioPage />} />
        <Route path={base + "portfolio/:id"} element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}