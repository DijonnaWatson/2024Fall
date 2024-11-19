
import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { rest } from './myFetch'

//fucntion that returns this objects, the items(30) and the total(theoretically number of items total)
//returns a dataList envelope of 
export async function getAll() {
  return rest<DataListEnvelope<Product>>('http://localhost:3000/api/v1/products')
}

//should be gicing us the data 
export async function getById(id: number) { 
  return api<DataEnvelope>(`${id}`)
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