import React, { useState, useEffect} from "react"
import Product from "../../Models/Product"
import { getProducts } from "../services/productService"
import ProductCard from "../ProductCard/ProductCard"
import { useSearchParams } from 'react-router-dom'

import "./ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())
    const maxPrice = params['max-price'] ? Number(params['max-price']) : undefined
    const limit = params['limit'] ? Number(params['limit']) : undefined
    const includes = params['includes'] || undefined
    
    getProducts(maxPrice, includes, limit).then(fetchedProducts => {
      setProducts(fetchedProducts)
    }).catch(error => {
      console.error("Failed to fetch products:", error)
    })
  }, [searchParams])
  
  return (
    <>
      <div className="product-card-container">
        <ul>
          {products.map(product => (
            <ProductCard
                product={product}
                key={product._id}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductList
