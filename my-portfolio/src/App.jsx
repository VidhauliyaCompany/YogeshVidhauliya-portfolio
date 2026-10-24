// src/App.jsx
import { Routes, Route,useLocation  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'
import Hire from './pages/Hire'
import NotFound from './pages/NotFound'
import Certificates from './pages/Certificates'
import ProjectDetails from './pages/ProjectDetails'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'
import AutoReveal from './components/AutoReveal'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'

function App() {
  const location = useLocation()

  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <AutoReveal />
      <ScrollToTop />
      <Navbar />
            <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/resume" element={<Resume />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="*" element={<NotFound />} />
            </Routes>
      </div>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App