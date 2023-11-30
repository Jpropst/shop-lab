// import mongoose, { Mongoose, isValidObjectId } from "mongoose"
// const { ObjectId } = mongoose.Types
import mongoose, { Schema } from "mongoose"

export const CartItemSchema = new mongoose.Schema(
    {   
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        productId: {
            type: Schema.Types.ObjectId,
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