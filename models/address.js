import mongoose from 'mongoose';

const addressSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    stateOrProvince: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: 'India',
    },
    postalCode: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ['Home', 'Work', 'Other'],
      default: 'Home',
    },
  },
  {
    timestamps: true,
  }
);

const Address =
  mongoose.models.Address || mongoose.model('Address', addressSchema);

export default Address;
