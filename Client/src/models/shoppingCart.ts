import { computed, ref } from 'vue'
import type { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

const shoppingCart = ref<CartItem[]>([]) //local variable holding a reactive array of cart items, and initializing it to an empty array

export const refCart = () => shoppingCart //exporting a function that returns the reactive array
export const count = computed(() => shoppingCart.value.length) //exporting a computed property that returns the number of items in the cart
export const total = computed(() =>
  shoppingCart.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
) //exporting a computed property that returns the total price of all items in the cart

export function addToCart(product: Product) {
  const item = shoppingCart.value.find((i) => i.product.id === product.id)
  if (item) {
    item.quantity++
  } else {
    shoppingCart.value.push({ product, quantity: 1 })
  }
}

export function removeFromCart(product: Product) {
  const index = shoppingCart.value.findIndex((i) => i.product.id === product.id)//find index of the product
  if (index != -1) {
    shoppingCart.value.splice(index, 1)//remove the product from the cart
  }
}