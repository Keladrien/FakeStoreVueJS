import Details from "@/composent/Details.vue";
import Home from "@/composent/Home.vue";
import NewUser from "@/composent/NewUser.vue";
import ProductList from "@/composent/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/products", component: ProductList },
    { path: "/products/detail", component: Details },
    { path: "/newUser", component: NewUser },
  ],
});

export default router;
