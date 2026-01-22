import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  const isConnecte = computed(() => user.value !== null);

  const connexion = (data) => {
    user.value = data;
  };
  const deconnexion = () => {
    user.value = null;
  };

  const cart = [];

  const addCart = (itemId) => {
    cart.push(itemId);
  };

  const rmvCart = (index) => {
    cart.splice(index, 1);
  };

  return { user, isConnecte, connexion, deconnexion, cart, addCart, rmvCart };
});
