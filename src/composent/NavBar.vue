<template>
    <div>
        <h1>
            <RouterLink to="/">FakeStore</RouterLink>
        </h1>

        <div v-if="!connectedUser.isConnected">
            <ul>
                <li>Connexion</li>
                <li>
                    <RouterLink to="/newUser">Créer un compte</RouterLink>
                </li>
            </ul>
        </div>

        <div v-else>
            <ul>
                <button @click="connectedUser.disconnect()">Deconnexion</button>
            </ul>
        </div>

        <button @click="toggleConnection">
            tests
        </button>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/connected'

const connectedUser = useUserStore()

const toggleConnection = () => {
    connectedUser.isConnected = !connectedUser.isConnected
}
</script>

<style scoped></style>
