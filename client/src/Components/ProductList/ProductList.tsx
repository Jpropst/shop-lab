import React, { useState, useEffect} from "react"
import Product from "../../Models/Product"
import { getProducts } from "../services/productService"
import ProductCard from "../ProductCard/ProductCard"

import "./ProductList.css"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      getProducts().then(fetchedProducts => setProducts(fetchedProducts));
    }, [])
  
    return (
      <>
        <div className="product-card-container">
          {products.map(product => (
            <ProductCard
                product={product}
                key={product._id}
            />
          ))}
        </div>
      </>
    )
  }

export default ProductList