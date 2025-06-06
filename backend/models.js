import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  providerUserId: {
    required: true,
    type: String,
    unique: true
  }
})

const ReviewSchema = new mongoose.Schema(
  {
    starRating: { required: true, type: Number },
    title: { required: true, type: String },
    description: String,
    authorId: { type: String, required: false }
  },
  { timestamps: true }
)

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    regularPrice: {
      type: Number,
      required: true
    },
    salePrice: Number,
    isOnSale: Boolean,
    description: String,
    imageUrl: String,
    reviews: [ReviewSchema],
    category: String
  },
  { timestamps: true }
)

export const User = mongoose.model("User", UserSchema)
export const Product = mongoose.model("Product", ProductSchema)
