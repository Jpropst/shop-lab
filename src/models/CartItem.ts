import mongoose, { Mongoose, isValidObjectId } from "mongoose"
import Product from "./Product"
const { ObjectId } = mongoose.Types

export const CartItemSchema = new mongoose.Schema(
    {   
        userId: {
            type: ObjectId,
            required: true
        },
        productId: {
            type: ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
)

const CartItem = mongoose.model("CartItem", CartItemSchema)
export default CartItem