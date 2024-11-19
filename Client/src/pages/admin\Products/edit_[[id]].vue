<script setup lang="ts">
import { ref } from 'vue'
import { type Product, getByID } from '@/models/products';

const product = ref({} as Product)

const route = useRoute()

route.params.id && getByID(route.params.id).then((data) => product.value = data.data)
//use route 

</script>

<template>
    <div>
        <!-- if there is id eddit else add /> -->
        <h1>{} Product</h1>
    </div>
</template>

<style scoped>

</style>