import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService' 
import Product from '../../Models/Product'

import './ProductDetails.css'

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then(data => {
                    setProduct(data)
                })
                .catch(err => {
                    console.error("Error fetching product:", err)
                })
        }
    }, [id])

    return (
        <div className='product-details'>
            <p>
                Product: {product?.name}
            </p>
            <p>
                Price: ${product?.price}
            </p>
            <img
                src={'/images/coming-soon.jpg'}
                alt="Coming Soon"
            />

        </div>
    )
}

export default ProductDetails
