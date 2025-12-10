import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  duration: {
    type: String
  },
  description: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('Experience', experienceSchema);
