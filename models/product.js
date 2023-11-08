import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // This will reference the User model
      ref: 'User',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // This will reference the User model
      ref: 'User',
    },
  },
  {
    // This will ensure that the date is created and updated
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
