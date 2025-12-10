import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  technologies: [{
    type: String
  }],
  projectLink: {
    type: String
  },
  githubLink: {
    type: String
  },
  imageUrl: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
