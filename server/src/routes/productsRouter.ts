import express from "express"
import {
    postProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductsParams
} from "../controllers/products"

const routes = express.Router()

routes.post("/", postProduct)
routes.get("/", getProductsParams)
routes.get("/", getProducts)
routes.get("/:id", getProduct)
routes.put("/:id", updateProduct)
routes.delete("/:id", deleteProduct)

export default routes