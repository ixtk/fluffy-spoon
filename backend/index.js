import express from "express"
import mongoose from "mongoose"
import { productRouter } from "./routers/productRouter.js"
import { userRouter } from "./routers/userRouter.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const { MONGODB_URL, ALLOWED_ORIGIN, PORT } = process.env

export const app = express()

app.use(express.json())
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true
  })
)

app.use("/products", productRouter)
app.use("/users", userRouter)

try {
  await mongoose.connect(MONGODB_URL)
  console.log("Connected to the database: fluffy-umbrella")
} catch (error) {
  console.log(error)
}

app.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`)
})
