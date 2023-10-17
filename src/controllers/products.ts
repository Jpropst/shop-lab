import Products from "../models/Products";
import { reqRes, reqResNext } from "../utils/interfaces";
import { ProductNotFoundError } from "../utils/errors";

// CREATE

export const postProduct: reqRes = async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send("Server Error")
    }
}

// READ ALL W/ PARAMS

export const getProductsParams: reqResNext = async (req, res, next) => {
	try {
	  if (Object.keys(req.query).length <= 0) next();
	  else {
		let products = await Products.find();
  
		// Check for "max-price" query parameter
		if (req.query && req.query['max-price']) {
		  const maxPrice = +req.query['max-price'];
		  products = products.filter((product) => product.price <= maxPrice);
		}
  
		// Check for "includes" query parameter
		// if (req.query && req.query.includes) {
		//   const searchString = req.query.includes;
		//   products = products.filter((product) =>
		// 	product.name.toLowerCase().includes(searchString.toLowerCase())
		//   );
		// }
  
		// Check for "limit" query parameter
		if (req.query && req.query.limit) {
		  const limit = +req.query.limit;
		  products = products.slice(0, limit);
		}
  
		res.status(200).send(products);
	  }
	} catch (err) {
	  res.status(500).send('Server Error');
	}
  };

// READ ALL

export const getProducts: reqRes = async (req, res) => {
	try {
		const products = await Products.find()
		res.status(200).send(products)
	} catch (err) {
		res.status(500).send("Server Error")
	}
}

// READ ONE

export const getProduct: reqRes = async (req, res) => {
	try {
		const product = await Products.findById(req.params.id)
		if (!product) throw new ProductNotFoundError()
		res.status(200).send(product)
	} catch (err) {
		let status = { code: 500, message: "Product" }
		if (err instanceof ProductNotFoundError) {
			status = { code: 404, message: err.message }
		}
		res.status(status.code).send(status.message)
	}
}

// UPDATE

export const updateProduct: reqRes = async (req, res) => {
	try {
		const product = await Products.findById(req.params.id)
		if (!product) throw new ProductNotFoundError()
		if (req.body.name) product.name = req.body.name
		if (req.body.price) product.price = req.body.price
        if (req.body.photoURL) product.photoURL = req.body.photoURL
		product.save()
		res.status(200).send(product)
	} catch (err) {
		let status = { code: 500, message: "Product Not Found" }
		if (err instanceof ProductNotFoundError) {
			status = { code: 404, message: err.message }
		}
		res.status(status.code).send(status.message)
	}
}

// DESTROY

export const deleteProduct: reqRes = async (req, res) => {
	try {
		await Products.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (err) {
		let status = { code: 500, message: "Product Not Found" }
		res.status(status.code).send(status.message)
	}
}