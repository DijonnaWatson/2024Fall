import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope'
//fucntion that returns this objects, the items(30) and the total(theoretically number of items total)
export function getAll(): DataListEnvelope<Product> {
  return {
    data: data.items,
    total: data.total
  } //return an object
}

interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  tags: string[]
  brand?: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  images: string[]
  thumbnail: string
}