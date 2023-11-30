import express from 'express'
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import products from "./routes/productsRouter"
import users from "./routes/usersRouter"
import cartItems from "./routes/cartItemsRouter"
import dotenv from "dotenv"

// CONFIGURATIONS

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// ROUTES

app.use("/products", products)
app.use("/users", users)
app.use("/users", cartItems)

const port = 4001

// MONGOOSE SETUP

const PORT = process.env.PORT || 4001
const MONGO_URL = process.env.MONGO_URL || ""
mongoose.set("strictQuery", false)
mongoose
 .connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 } as ConnectOptions)
 .then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
 })
 .catch((err) => console.log(`${err} did not connect`))