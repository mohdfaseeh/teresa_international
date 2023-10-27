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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // This will reference the Product model
        ref: 'Product',
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
      required: true,
    },
    // This will be the payment result
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    // This will be the tax price
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This will be the shipping price
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This will be the total price
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This will be the order status
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    // This will be the paid at date
    paidAt: {
      type: Date,
    },
    // This will be the order status
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    // This will be the delivered at date
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
