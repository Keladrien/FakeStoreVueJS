<template>

    <div class="flexEmpty" v-if="!activeUser.getCart(activeUser.user.user.uid)[0]">
        <img src="https://img.freepik.com/premium-vector/modern-design-concept-no-product-found-cart-design_637684-219.jpg?semt=ais_hybrid&w=740&q=80"
            alt="">
    </div>

    <div v-else class="cart-grid">
        <article v-for="item in items" :key="item.product.id" class="cart-card">
            <button class="delete-btn" @click="onDelete(item.product.id)">
                ✕
            </button>

            <img :src="item.product.image" :alt="item.product.title" class="cart-img" />

            <div class="cart-content">
                <h2 class="cart-title">{{ item.product.title }}</h2>

                <div class="cart-footer">
                    <span class="cart-price">{{ item.product.price }} $</span>
                    <span class="cart-qty">Qté: {{ item.qty }}</span>
                </div>
            </div>
        </article>
    </div>
    <div class="cart-total">
        <div>
            <span>Total du panier</span>
            <strong>{{ totalPrice }} $</strong>
        </div>
        <div><span>Taxes</span>
            <Strong>{{ taxes }} $</Strong>
        </div>
        <div>
            <span>Total avec taxes</span>
            <Strong>{{ priceAndTaxes }} $</Strong>
        </div>


    </div>

</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import useAPI from '@/composable/useAPI'
import { useUserStore } from '@/stores/connected'

const activeUser = useUserStore()
const items = ref([])

const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
        return total + item.product.price * item.qty
    }, 0).toFixed(2)
})

const taxes = computed(() => {
    return items.value.reduce((total, item) => {
        return (total + item.product.price * item.qty) * 0.15
    }, 0).toFixed(2)
})

const priceAndTaxes = computed(() => {
    return items.value.reduce((total, item) => {
        return (total + item.product.price * item.qty) * 1.15
    }, 0).toFixed(2)
})

onMounted(async () => {
    if (activeUser) {
        const cart = activeUser.getCart(activeUser.user.user.uid) || []
        for (const item of cart) {
            const product = await useAPI(
                `https://fakestoreapi.com/products/${item.id}`
            ).data

            items.value.push({
                product,
                qty: item.qty
            })
        }
    }
})

const onDelete = (itemId) => {
    activeUser.rmvCart(activeUser.user.user.uid, itemId)
    items.value = items.value.filter(item => item.product.id !== itemId)
}

</script>

<style scoped>
.flexEmpty {
    display: flex;
    justify-content: center;
}

.cart-total {
    margin-top: 2rem;
    padding: 1.2rem 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

    font-size: 1.1rem;
}

.cart-total div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    ;
}

.cart-total strong {
    font-size: 1.4rem;
    font-weight: 800;
    color: #2a7fff;
}


.cart-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}


.cart-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    max-width: 320px;
}

.cart-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}


.cart-img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background: #f5f5f5;
    padding: 1rem;
}


.cart-content {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.cart-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: #222;
    line-height: 1.3;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}


.cart-footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #2a7fff;
}

.cart-qty {
    font-size: 0.9rem;
    color: #444;
}

.delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;

    background: #ff4d4f;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s ease, transform 0.2s ease;
}

.delete-btn:hover {
    background: #d9363e;
    transform: scale(1.1);
}
</style>