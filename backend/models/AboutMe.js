import mongoose from 'mongoose';

const aboutMeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  summary: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  socialLinks: {
    type: Map,
    of: String,
    default: new Map()
  }
}, { timestamps: true });

export default mongoose.model('AboutMe', aboutMeSchema);
