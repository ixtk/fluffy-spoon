import express from "express"
import { validateSchema } from "./middleware.js"
import { productSchema } from "./schema.js"
import { Product } from "./models.js"

export const productRouter = express.Router()

productRouter.post("/", validateSchema(productSchema), async (req, res) => {
  const newProductValues = req.body

  const newProduct = await Product.create(newProductValues)

  res.status(201).json(newProduct)
})

productRouter.post("/:id/review", async (req, res) => {
  const product = await Product.findById(req.params.id)

  product.reviews.push(req.body)

  await product.save()

  res.json(product)
})

productRouter.delete("/:productId/review/:reviewId", async (req, res) => {
  const { productId, reviewId } = req.params

  const product = await Product.findById(productId)

  await product.reviews.id(reviewId).deleteOne()

  await product.save()

  res.json(product)
})

productRouter.get("/:id", async (req, res) => {
  // product/abc
  // { id: "abc" }
  const { id } = req.params

  const product = await Product.findById(id).populate("reviews.userId", "username")

  res.json(product)
})
