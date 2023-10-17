import CartItem from "../models/CartItems";
import { reqRes } from "../utils/interfaces";
import { CartItemNotFoundError } from "../utils/errors";
import { getUser } from "./users";

// CREATE

export const postCart: reqRes = async (req, res) => {
    try {
        const cart = new CartItem(req.body)
        await cart.save()
        res.status(201).send(cart)
    } catch (err) {
        res.status(400).send("Bad Request")
        console.log(err)
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

// export const updateUser: reqRes = async (req, res) => {
// 	try {
// 		const user = await Users.findById(req.params.id)
// 		if (!user) throw new UserNotFoundError()
// 		if (req.body.displayName) user.displayName = req.body.displayName
//         if (req.body.photoURL) user.photoURL = req.body.photoURL
// 		if (req.body.darkTheme) user.darkTheme = req.body.darkTheme
// 		user.save()
// 		res.status(200).send(user)
// 	} catch (err) {
// 		let status = { code: 500, message: "User Not Found" }
// 		if (err instanceof UserNotFoundError) {
// 			status = { code: 404, message: err.message }
// 		}
// 		res.status(status.code).send(status.message)
// 	}
// }

// DESTROY

export const deleteCartItem: reqRes = async (req, res) => {
	try {
		await CartItem.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (err) {
		let status = { code: 500, message: "Cart Item Not Found" }
		res.status(status.code).send(status.message)
	}
}