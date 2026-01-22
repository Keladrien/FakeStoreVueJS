import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  const isConnected = ref(false);

  const disconnect = () => {
    user.value = null;
    isConnected.value = false;
  };
  const cart = [];

  const addCart = (itemId) => {
    cart.push(itemId);
  };

  const rmvCart = (index) => {
    cart.splice(index, 1);
  };

  return { user, isConnected, disconnect, cart, addCart, rmvCart };
});
