<template>
    <div>
        <h1>
            <RouterLink to="/">FakeStore</RouterLink>
        </h1>


        <div v-if="!isUserConnected">
            <ul>
                <li>
                    Connexion
                </li>
                <li>
                    <RouterLink to="/newUser">Créé un compte</RouterLink>
                </li>
            </ul>
        </div>
        <div v-else>
            <ul>
                <li>Connected</li>
            </ul>
        </div>

    </div>

    <button @click="connectedUser.isConnecte">tests</button>
</template>

<script>
import { useUserStore } from '@/stores/connected';

const connectedUser = useUserStore



</script>

<style scoped></style>