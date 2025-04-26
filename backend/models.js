import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    salePrice: Number,
    isOnSale: { type: Boolean, default: false },
    // variants: [
    //   {
    //     color: { type: String, required: true },
    //     stock: { type: Number, required: true },
    //     sizes: [{ men: Number, women: Number }],
    //     images: [String]
    //   }
    // ]
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
export const Prouct = mongoose.model("Prouct", productSchema)
