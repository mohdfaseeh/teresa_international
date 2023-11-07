import mongoose, { models } from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // This is the email the user will use to login
    email: {
      type: String,
      required: true,
      // This will ensure that the email is unique
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // This will be the user's profile picture
    image: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin', 'superadmin', 'support'],
    },
    access: {
      type: String,
      default: 'granted',
      enum: ['granted', 'pending', 'denied'],
    },
  },
  {
    // This will ensure that the date is created and updated
    timestamps: true,
  }
);

const User = models.User || mongoose.model('User', userSchema);

export default User;
