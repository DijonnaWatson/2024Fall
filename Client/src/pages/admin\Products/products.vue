<script setup lang="ts">
    import {ref} from 'vue'
    import {getAll, type Product} from '@/models/products'

    const products = ref([ ] as Product[])
    getAll().then((data) => products.value = data.data)
    
</script>

<template>
    <div>

    </div>
</template>

<style scoped>

</style>