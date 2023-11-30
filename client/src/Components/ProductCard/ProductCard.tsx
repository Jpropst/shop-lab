import React from "react"
import { Link } from "react-router-dom"
import Product from "../../Models/Product"

import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    return (
        <li className="product-card">
            <Link to={`/products/${product._id}`}>
                {product.name}
            </Link>
            <p>
                ${product.price}
            </p>
            <img
                src={'/images/coming-soon.jpg'}
                alt="Coming Soon"
            />
        </li>
    )
}

export default ProductCard
