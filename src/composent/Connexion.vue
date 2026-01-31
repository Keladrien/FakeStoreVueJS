<template>
    <div class="auth-container">
        <form class="auth-card" @submit="connexionEmailPassword">
            <h2>Connexion</h2>

            <input type="email" v-model="email" placeholder="Entrez l'email" />
            <input type="password" v-model="pwd" placeholder="Entrez le mot de passe" />

            <button type="submit">Connexion</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from
    "firebase/auth";
import { useUserStore } from "@/stores/connected";
import router from "@/router";
const utilisateur = ref({});
const connecte = ref(false);
const email = ref("");
const pwd = ref("");

const connectedUser = useUserStore();
const connexionEmailPassword = async (e) => {
    e.preventDefault();
    console.log(email.value, pwd.value);
    try {
        const result = await signInWithEmailAndPassword(auth, email.value, pwd.value);

        utilisateur.value = result.user;
        connecte.value = true;
        connectedUser.user = result
        connectedUser.isConnected = true;
        console.log(utilisateur.value);
        router.push("/");
    }
    catch (error) {
        console.error("Échec de la connexion", error);
    }
};
</script>

<style scoped>
.auth-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
}

.auth-card {
    background: #ffffff;
    padding: 2.5rem;
    width: 100%;
    max-width: 380px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.auth-card h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: #333;
}

.auth-card input {
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-size: 1rem;
    transition: border 0.2s, box-shadow 0.2s;
}

.auth-card input:focus {
    outline: none;
    border-color: #2c5364;
    box-shadow: 0 0 0 2px rgba(44, 83, 100, 0.2);
}

.auth-card button {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background: #2c5364;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
}

.auth-card button:hover {
    background: #203a43;
}

.auth-card button:active {
    transform: scale(0.97);
}
</style>
