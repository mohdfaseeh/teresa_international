import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    message: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    phone: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactMessageSchema);
