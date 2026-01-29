<template>
    <div>
        <h1>{{ item.title }}</h1>
        <h2>{{ item.price }} $</h2>
        <img :src="item.image" alt="">
        <p>{{ item.description }}</p>
        <p>{{ item.category }}</p>
        <p>⭐ {{ item.rating.rate }}</p>
        <p>{{ item.rating.count }}</p>
    </div>
</template>

<script setup>
import useAPI from '@/composable/useAPI';
import { useRoute } from 'vue-router'

const route = useRoute()
const item = useAPI(`https://fakestoreapi.com/products/${route.params.id}`).data



</script>

<style scoped></style>