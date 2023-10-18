import express from "express"
import {
    deleteCartItem,
    getCartItems,
    patchCart,
    postCart
} from "../controllers/cartItems"

const routes = express.Router()

routes.get("/:userId/cart", getCartItems)
routes.post("/:userId/cart", postCart)
routes.patch("/:userId/cart/:productId", patchCart)
routes.delete("/:userId/cart/:productId", deleteCartItem)

export default routes