import axios from 'axios'
import Product from '../../Models/Product'

interface ProductGetter {
    (maxPrice?: number, includes?: string, limit?: number): Promise<Product[]>
}

const baseURL = 'http://localhost:4001'

export const getProducts: ProductGetter = async (maxPrice, includes, limit) => {
    const params = new URLSearchParams({
      ...(maxPrice ? { 'max-price': maxPrice.toString() } : {}),
      ...(includes ? { includes } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
    });
  
    const response = await axios.get(`${baseURL}/products`, { params })
    return response.data
}

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${baseURL}/products/${id}`)

  return response.data
}
