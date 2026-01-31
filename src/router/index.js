import Cart from "@/composent/Cart.vue";
import Connexion from "@/composent/Connexion.vue";
import Home from "@/composent/Home.vue";
import NewUser from "@/composent/NewUser.vue";
import ProductList from "@/composent/ProductList.vue";
import { useUserStore } from "@/stores/connected";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/products", component: ProductList },
    { path: "/newUser", component: NewUser },
    { path: "/signIn", component: Connexion },
    { path: "/cart", component: Cart, meta: { requiresAuth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isConnected) {
    next("/signIn");
  } else {
    next();
  }
});

export default router;
