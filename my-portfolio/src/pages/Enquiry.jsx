// src/pages/Enquiry.jsx
import { useState } from 'react'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import './Enquiry.css'
const API_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/enquiry`

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function Enquiry() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  // update the form when user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // check all fields
  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email'
    }

    if (form.phone && !/^[0-9+\-\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }

    if (!form.subject.trim()) newErrors.subject = 'Subject is required'

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  // when user clicks Send
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
    <section className="enquiry">
      <div className="container">
        <h2 className="section-title">Send an <span>Enquiry</span></h2>
        <p className="enquiry-subtitle">
          Fill the form below and I will get back to you as soon as possible.
        </p>

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
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject ? 'input-error' : ''}
              />
              {errors.subject && <small>{errors.subject}</small>}
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button type="submit" className="btn submit-btn" disabled={loading}>
            {loading ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
          </button>

          {status === 'success' && (
            <div className="alert alert-success">
              <FaCheckCircle /> Thank you! Your message has been sent.
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

export default Enquiry