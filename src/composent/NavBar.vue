<template>
    <nav class="navbar">
        <h1 class="logo">
            <RouterLink to="/">FakeStore</RouterLink>
        </h1>

        <ul class="nav-actions" v-if="!connectedUser.isConnected">
            <li>
                <RouterLink class="nav-link" to="/signIn">Connexion</RouterLink>
            </li>
            <li>
                <RouterLink class="nav-link primary" to="/newUser">
                    Créer un compte
                </RouterLink>
            </li>
        </ul>

        <ul class="nav-actions" v-else>
            <li class="userGreet">Bonjour {{ connectedUser.user.user.displayName }}</li>
            <li>
                <RouterLink to="/cart" class="nav-link basket">🛒 Panier</RouterLink>

            </li>
            <li>
                <button class="nav-link danger" @click="onDisconnect()">
                    Déconnexion
                </button>
            </li>
        </ul>
    </nav>
</template>


<script setup>


import router from '@/router';
import { useUserStore } from '@/stores/connected'

const connectedUser = useUserStore()

const onDisconnect = () => {
    connectedUser.disconnect(),
        router.push("/")
} </script>

<style scoped>
.userGreet {
    color: #236ddb;
    font-weight: bold;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 500;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
    background: white;

    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.logo a {
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: none;
    color: #2a7fff;
}

.nav-actions {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center
}

.nav-link {
    padding: 0.55rem 1.1rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    background: #f5f5f5;
    color: #333;
    border: none;

    transition: all 0.25s ease;
}


.primary {
    background: #2a7fff;
    color: white;
}

.primary:hover {
    background: #1f66d1;
}

.danger {
    background: #ff4d4f;
    color: white;
}

.danger:hover {
    background: #d9363e;
}

.basket {
    background: #2a7fff;
    color: white;
    text-decoration: none;
}


.basket:hover {
    background: #236ddb;
}




@media (max-width: 640px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
