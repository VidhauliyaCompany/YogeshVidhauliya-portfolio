// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <h1 className="notfound-code">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or was moved.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound