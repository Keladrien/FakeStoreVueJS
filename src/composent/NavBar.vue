<template>
    <div>
        <h1>
            <RouterLink to="/">FakeStore</RouterLink>
        </h1>

        <div v-if="!connectedUser.isConnected">
            <ul>
                <li>
                    <RouterLink to="/signIn">Connexion</RouterLink>
                </li>
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


    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/connected'

const connectedUser = useUserStore()


</script>

<style scoped></style>
