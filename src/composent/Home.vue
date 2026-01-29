<template>
    <div class="category-wrapper">
        <ul class="category-list">
            <li :class="{ active: selectedCategory === null }" @click="selectedCategory = null">
                Tous
            </li>

            <li v-for="item in category" :key="item" :class="{ active: selectedCategory === item }"
                @click="selectedCategory = item">
                {{ item[0].toUpperCase() + item.slice(1) }}
            </li>
        </ul>

        <ProductList :category="selectedCategory" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useAPI from '@/composable/useAPI'
import ProductList from './ProductList.vue'

const category = useAPI("https://fakestoreapi.com/products/categories").data
const selectedCategory = ref(null)
</script>


<style scoped>
.category-list {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.category-list li {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: #f5f5f5;
    cursor: pointer;
    transition: all 0.25s ease;
}

.category-list li:hover {
    background: #eaeaea;
}

.category-list li.active {
    background: #2a7fff;
    color: white;
}
</style>
