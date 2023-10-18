import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        photoURL: {
            type: String
        }
    },
    { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

export default Product