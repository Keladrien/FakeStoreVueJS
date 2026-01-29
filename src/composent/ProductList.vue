<template>
    <div class="displayCard">
        <div v-for="item in allItm">
            <ItemCard :id="item.id" :title="item.title" :img="item.image" :price="item.price" :rank="item.rating.rate"
                :category="item.category"></ItemCard>
        </div>
    </div>

</template>

<script setup>
import useAPI from '@/composable/useAPI';
import ItemCard from './ItemCard.vue';


const allItm = useAPI("https://fakestoreapi.com/products/").data
</script>

<style scoped>
.displayCard {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
}

.displayCard div {
    min-width: 30%;
    display: flex;
    justify-content: center;
}
</style>