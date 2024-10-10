<script setup lang="js">
import { ref } from 'vue'
import { getAll , type Product} from '@/models/products';

const products = ref<Product[]>([])
products.value = getAll().data //ref of products
</script>

<temoplate>
    <div class="shelf">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</temoplate>

<style scoped>
    .shelf {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        GAP: 1rem;
    }
</style>