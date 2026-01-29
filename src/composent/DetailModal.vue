<template>
    <div class="overlay" @click.self="emit('close')">
        <div class="modal">
            <div v-if="!item" class="loading">
                Chargement…
            </div>

            <template v-else>
                <img :src="item.image" class="modal-img" />

                <div class="modal-content">
                    <h1>{{ item.title }}</h1>
                    <p class="category">{{ item.category }}</p>

                    <p class="description">{{ item.description }}</p>

                    <div class="footer">
                        <span class="price">{{ item.price }} $</span>
                        <span class="rank">⭐ {{ item.rating.rate }}</span>
                    </div>

                    <button class="close" @click="emit('close')">Fermer</button>
                </div>
            </template>
        </div>
    </div>
</template>


<script setup>
import useAPI from '@/composable/useAPI'

const emit = defineEmits(["close"])
const props = defineProps(["id"])

const item = useAPI(`https://fakestoreapi.com/products/${props.id}`).data
</script>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: white;
    border-radius: 20px;
    max-width: 800px;
    width: 90%;
    display: flex;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: pop 0.25s ease;
}

@keyframes pop {
    from {
        transform: scale(0.95);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.modal-img {
    width: 45%;
    object-fit: contain;
    background: #f5f5f5;
    padding: 2rem;
}

.modal-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h1 {
    font-size: 1.4rem;
    font-weight: 600;
}

.category {
    font-size: 0.9rem;
    color: #666;
}

.description {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
}

.footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2a7fff;
}

.rank {
    font-size: 0.9rem;
}

.close {
    margin-top: 1rem;
    padding: 0.6rem;
    border: none;
    border-radius: 8px;
    background: #2a7fff;
    color: white;
    cursor: pointer;
}
</style>
