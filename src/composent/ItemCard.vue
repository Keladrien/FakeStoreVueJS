<template>
    <article class="card">
        <img :src="img" :alt="title" class="card-img" />

        <div class="card-content">
            <h2 class="card-title">{{ title }}</h2>

            <p class="card-desc">{{ desc }}</p>

            <div class="card-footer">
                <span class="card-price">{{ price }} $</span>
                <span class="card-rank">⭐ {{ rank }}</span>
            </div>
        </div>
    </article>
</template>


<script setup>

defineProps([
    "title",
    "img",
    "desc",
    "price",
    "rank",

])

</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    max-width: 320px;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}


.card-img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background: #f5f5f5;
    padding: 1rem;
}


.card-content {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;
    line-height: 1.3;


    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}


.card-desc {
    font-size: 0.9rem;
    color: #666;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}


.card-footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.card-price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #2a7fff;
}


.card-rank {
    font-size: 0.9rem;
    color: #444;
}
</style>