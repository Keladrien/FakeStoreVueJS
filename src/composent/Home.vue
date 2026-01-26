<template>
    <div>
        <ul>
            <li v-for="item in category">{{ item[0].toUpperCase() + item.slice(1) }}</li>
        </ul>
        <ProductList />

    </div>
</template>

<script setup>
import useAPI from '@/composable/useAPI';
import ProductList from './ProductList.vue';

const category = useAPI("https://fakestoreapi.com/products/categories").data


</script>

<style scoped></style>