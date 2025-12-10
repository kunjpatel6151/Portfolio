import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Method to compare passwords
adminSchema.methods.comparePassword = async function(plainPassword) {
  return bcryptjs.compare(plainPassword, this.passwordHash);
};

export default mongoose.model('Admin', adminSchema);
