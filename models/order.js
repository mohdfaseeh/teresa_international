import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // This will reference the User model
      ref: 'User',
    },
    orderItems: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          // This will reference the Product model
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // This will reference the Address model
      ref: 'Address',
    },
    paymentMethod: {
      type: String,
      enum: ['Stripe', 'Cash'],
      required: true,
    },
    paymentId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
