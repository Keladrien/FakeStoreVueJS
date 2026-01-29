<template>
    <div class="displayCard">
        <ItemCard v-for="item in filteredItems" :key="item.id" :id="item.id" :title="item.title" :img="item.image"
            :price="item.price" :rank="item.rating.rate" :category="item.category" @open="openDetail" />
    </div>

    <DetailModal v-if="selectedId" :id="selectedId" @close="selectedId = null" />
</template>



<script setup>
import { ref, computed } from 'vue'
import useAPI from '@/composable/useAPI'
import ItemCard from './ItemCard.vue'
import DetailModal from './DetailModal.vue'

const { data: allItm } = useAPI("https://fakestoreapi.com/products/")
const selectedId = ref(null)

const props = defineProps({
    category: String
})

const filteredItems = computed(() => {
    if (!allItm.value) return []
    return props.category
        ? allItm.value.filter(i => i.category === props.category)
        : allItm.value
})

const openDetail = (id) => {
    selectedId.value = id
}
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