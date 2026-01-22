<template>
    <div>
        <form @submit="creerUtilisateur">
            <input type="email" v-model="email" placeholder="Entrez l'email" />
            <br />
            <input type="password" v-model="pwd" placeholder="Entrez le mot de passe" />
            <br />
            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "@/stores/connected";
import router from "@/router";

const utilisateur = ref({});
const connectedUser = useUserStore()
const email = ref("");
const pwd = ref("");


const creerUtilisateur = async (e) => {
    e.preventDefault();
    try {
        const result = await createUserWithEmailAndPassword(auth, email.value, pwd.value);
        utilisateur.value = result.user;
        console.log(utilisateur.value);
        connectedUser.user = result
        connectedUser.connexion()
        router.push("/")
    } catch (error) {
        console.error("Échec de la création de l'utilisateur", error);
    }
};
</script>