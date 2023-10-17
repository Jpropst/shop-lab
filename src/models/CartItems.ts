import mongoose, { Mongoose, isValidObjectId } from "mongoose";
import Product from "./Products";
const { ObjectId } = mongoose.Types

export const CartItemsSchema = new mongoose.Schema(
    {   
        userId: {
            type: String,
            required: true
        },
        product: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
)

const CartItem = mongoose.model("cart_items", CartItemsSchema)
export default CartItem