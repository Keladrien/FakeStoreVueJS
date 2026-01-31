import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const cart = ref([]);
  const isConnected = ref(false);

  const disconnect = () => {
    user.value = null;
    isConnected.value = false;
    signOut(auth);
  };

  const getCart = (uidToCheck) => {
    if (cart.value.find((c) => c.uid === uidToCheck)) {
      return cart.value.find((c) => c.uid === uidToCheck).cartItems;
    }
  };

  const addCart = (uid, itemId) => {
    let userCart = cart.value.find((c) => c.uid === uid);

    if (!userCart) {
      userCart = {
        uid,
        cartItems: [],
      };
      cart.value.push(userCart);
    }

    const item = userCart.cartItems.find((i) => i.id === itemId);

    if (item) {
      item.qty++;
    } else {
      userCart.cartItems.push({
        id: itemId,
        qty: 1,
      });
    }
  };

  const rmvCart = (uid, itemId) => {
    const userCart = cart.value.find((c) => c.uid === uid);
    if (!userCart) return;

    const index = userCart.cartItems.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      userCart.cartItems.splice(index, 1);
    }
  };

  return {
    user,
    isConnected,
    disconnect,
    cart,
    addCart,
    rmvCart,
    getCart,
  };
});
