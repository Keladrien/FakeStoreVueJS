<template>
    <div>
        <h2>{{ title }}</h2>
        <img :src="img" alt="">
        <p>{{ desc }}</p>
        <p>{{ price }}</p>
        <p>{{ rank }}</p>

    </div>
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

<style scoped></style>