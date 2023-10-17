import express from "express";
import { getCartItems, postCart } from "../controllers/cartItems";
const routes = express.Router()

routes.get("/:userId", getCartItems)
routes.post("/", postCart)

export default routes