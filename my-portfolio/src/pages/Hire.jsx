// src/pages/Hire.jsx
import { useState } from 'react'
import {
  FaLaptopCode,
  FaServer,
  FaShoppingCart,
  FaPaintBrush,
  FaMobileAlt,
  FaTools,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'
import './Hire.css'
import { tiltMove, tiltLeave } from '../utils/tilt'

const API_URL =
  (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000') +
  '/api/project-request'

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Website Development',
    desc: 'Fast, modern and responsive websites for business, portfolio or startup.',
  },
  {
    icon: <FaServer />,
    title: 'Full Stack (MERN) Apps',
    desc: 'Complete web apps with login, dashboard, database and APIs.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce Websites',
    desc: 'Online stores with products, cart, orders and payment integration.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI / UX Design',
    desc: 'Clean, attractive designs that are easy for your users to use.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    desc: 'Websites that look perfect on mobile, tablet and desktop.',
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Fixes',
    desc: 'Bug fixing, speed improvement and updates for your existing site.',
  },
]

const steps = [
  { no: '01', title: 'Share Your Idea', desc: 'Fill the form below and tell me what you need.' },
  { no: '02', title: 'Discussion', desc: 'We talk about features, timeline and cost.' },
  { no: '03', title: 'Design & Build', desc: 'I design and develop, and you see progress regularly.' },
  { no: '04', title: 'Delivery', desc: 'Testing, launch and support after delivery.' },
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  deadline: '',
  details: '',
}

function Hire() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Name is required'

    if (!form.email.trim()) err.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email'

    if (form.phone && !/^[0-9+\-\s]{10,15}$/.test(form.phone))
      err.phone = 'Enter a valid phone number'

    if (!form.projectType) err.projectType = 'Select a project type'
    if (!form.budget) err.budget = 'Select a budget range'

    if (!form.details.trim()) err.details = 'Please describe your project'
    else if (form.details.trim().length < 20)
      err.details = 'Please write at least 20 characters'

    return err
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm(emptyForm)
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="hire">
      <div className="container">
        <h2 className="section-title">Hire <span>Me</span></h2>
        <p className="hire-subtitle">
          Have an idea or need a website? Let's build it together.
        </p>

        {/* Services */}
        <h3 className="sub-title">What I <span>Offer</span></h3>
        <div className="service-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title} onMouseMove={tiltMove} onMouseLeave={tiltLeave}>
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <h3 className="sub-title">How I <span>Work</span></h3>
        <div className="step-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.no}>
              <span className="step-no">{s.no}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Request form */}
        <h3 className="sub-title">Start Your <span>Project</span></h3>
        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone (optional)</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <small>{errors.phone}</small>}
            </div>

            <div className="form-group">
              <label>Project Type *</label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className={errors.projectType ? 'input-error' : ''}
              >
                <option value="">Select type</option>
                <option>Website</option>
                <option>Full Stack (MERN) App</option>
                <option>E-Commerce</option>
                <option>UI / UX Design</option>
                <option>Fix / Maintenance</option>
                <option>Other</option>
              </select>
              {errors.projectType && <small>{errors.projectType}</small>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Budget *</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={errors.budget ? 'input-error' : ''}
              >
                <option value="">Select budget</option>
                <option>Under ₹10,000</option>
                <option>₹10,000 - ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>
                <option>₹50,000+</option>
                <option>Not sure yet</option>
              </select>
              {errors.budget && <small>{errors.budget}</small>}
            </div>

            <div className="form-group">
              <label>Deadline (optional)</label>
              <select name="deadline" value={form.deadline} onChange={handleChange}>
                <option value="">Select deadline</option>
                <option>Within 1 week</option>
                <option>Within 1 month</option>
                <option>1 - 3 months</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Project Details *</label>
            <textarea
              name="details"
              rows="6"
              placeholder="Describe your idea, features you need, and any websites you like..."
              value={form.details}
              onChange={handleChange}
              className={errors.details ? 'input-error' : ''}
            ></textarea>
            {errors.details && <small>{errors.details}</small>}
          </div>

          <button type="submit" className="btn submit-btn" disabled={loading}>
            {loading ? 'Sending...' : <><FaPaperPlane /> Send Project Request</>}
          </button>

          {status === 'success' && (
            <div className="alert alert-success">
              <FaCheckCircle /> Thank you! I received your request and will contact you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              <FaExclamationCircle /> Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Hire