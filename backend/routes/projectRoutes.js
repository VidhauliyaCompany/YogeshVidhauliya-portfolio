import express from 'express'
import ProjectRequest from '../models/ProjectRequest.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, projectType, budget, deadline, details } = req.body

    if (!name || !email || !projectType || !budget || !details) {
      return res.status(400).json({ message: 'Please fill all required fields' })
    }

    const request = await ProjectRequest.create({
      name, email, phone, projectType, budget, deadline, details,
    })

    res.status(201).json({ message: 'Request sent successfully', id: request._id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error. Please try again.' })
  }
})

export default router