<template>
    <div>
        <form @submit="connexionEmailPassword">
            <input type="email" v-model="email" placeholder="Entrez l'email" />
            <br />
            <input type="password" v-model="pwd" placeholder="Entrez le mot de passe" />
            <br />
            <button type="submit">Se connecter</button>
        </form>
        <div v-if="connecte">
            <h3>Vous êtes connecté </h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from
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