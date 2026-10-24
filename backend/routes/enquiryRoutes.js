import express from 'express'
import Enquiry from '../models/Enquiry.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Please fill all required fields' })
    }

    const enquiry = await Enquiry.create({ name, email, phone, subject, message })

    res.status(201).json({
      message: 'Enquiry sent successfully',
      id: enquiry._id,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error. Please try again.' })
  }
})

router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 })
    res.json(enquiries)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router