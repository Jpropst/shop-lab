import CartItem from "../models/CartItem"
import { reqRes } from "../utils/interfaces"

// CREATE

export const postCart: reqRes = async (req, res) => {
    try {
        const userId = req.params.userId
        const { quantity, productId } = req.body
        const existingCartItem = await CartItem.findOne({ userId, productId })
        if (existingCartItem) {
            existingCartItem.quantity += quantity
            await existingCartItem.save()
            res.status(200).send(existingCartItem)
        } else {
            const cart = new CartItem({ userId, productId, quantity })
            await cart.save();
            res.status(201).send(cart)
        }
    } catch (err) {
        res.status(400).send("Bad Request")
        console.log(err);
    }
}

// READ ALL

export const getCartItems: reqRes = async (req, res) => {
	try {
        const userId = req.params.userId
		const cart = await CartItem.find({userId})
		res.status(200).send(cart)
	} catch (err) {
		res.status(500).send("Bad Request")
	}
}

// PATCH

export const patchCart: reqRes = async (req, res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId
        const { quantity } = req.body
        const existingCartItem = await CartItem.findOne({ userId, productId })
        if (existingCartItem) {
            existingCartItem.quantity = quantity
            existingCartItem.save()
        }
        res.status(200).send("OK")
    }   catch (err) {
        res.status(404).send("Not Found")
    }
}

// DESTROY

export const deleteCartItem: reqRes = async (req, res) => {
	try {
		await CartItem.findByIdAndDelete(req.params.productId)
		res.status(204).send()
	} catch (err) {
        let status = { code: 404, message: "Not Found" }
		res.status(status.code).send(status.message)
	}
}