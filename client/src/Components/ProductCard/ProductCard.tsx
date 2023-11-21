import React from "react"
import Product from "../../Models/Product"

import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <ul>
                <li>
                    <h3>
                        {product.name}
                    </h3>
                    <p>
                        ${product.price}
                    </p>
                    <img
                        src={'/images/coming-soon.jpg'}
                        alt="Coming Soon"
                    />
                </li>
            </ul>
        </div>
    )
}

export default ProductCard
