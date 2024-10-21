<script setup lang="ts">
import type { Product } from '@/models/products';

const props = defineProps<{
    product: Product
}>()
//we never change the prodcuts
const {product} = props
</script>

<template>
    <div class="box">
        <div class="box-image">
            <img :src="product.thumbnail" alt="product.name" />
        </div>
        <div class="box-content">
            <h3>{{ product.title }}</h3>
             <i>{{ product.brand }}</i>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price }}</p>
            <button class="button is-success">Add to cart</button>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-weight: bold;
}
i{
    color:#888;
}
.price{
    font-weight: bold;
    font-size: 2.5em;
    float: right;
    color:chocolate;
}
</style>