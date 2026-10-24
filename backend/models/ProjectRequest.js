import mongoose from 'mongoose'

const projectRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: '' },
    projectType: { type: String, required: true, trim: true },
    budget: { type: String, required: true, trim: true },
    deadline: { type: String, trim: true, default: '' },
    details: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

export default mongoose.model('ProjectRequest', projectRequestSchema)