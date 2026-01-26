<template>
    <div v-for="item in allItm">
        <ItemCard :title="item.title" :img="item.image" :desc="item.description" :price="item.price"
            :rank="item.rating.rate"></ItemCard>
    </div>
</template>

<script>
import useAPI from '@/composable/useAPI';
import ItemCard from './ItemCard.vue';

const allItm = useAPI("https://fakestoreapi.com/products/").data
</script>

<style scoped></style>