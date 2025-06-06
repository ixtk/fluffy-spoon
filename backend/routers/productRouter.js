import express from "express"
import {
  addReview,
  createProduct,
  getProductById,
  deleteReview,
  getProductList
} from "../controllers/productControllers.js"
import {verifyAuth} from "../middleware.js"

export const productRouter = new express.Router()

productRouter.post("/", verifyAuth, createProduct)
productRouter.post("/:id/review", verifyAuth, addReview)
productRouter.delete("/:productId/review/:reviewId", verifyAuth, deleteReview)
productRouter.get("/:id", getProductById)
productRouter.get("/", getProductList)
