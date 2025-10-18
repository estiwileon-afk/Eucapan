import Cart from "@/views/Cart.vue";
import DetailsProduct from "@/views/DetailsProduct.vue";
import Inicio from "@/views/Inicio.vue";
import Productos from "@/views/Productos.vue";
import SobreNosotros from "@/views/SobreNosotros.vue";
import Usuario from "@/views/Usuario.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Inicio", component: Inicio },
    { path: "/Productos", name: "Productos", component: Productos },
    { path: "/Productos/:name", name: "Details", component: DetailsProduct },
    { path: "/SobreNosotros", name: "SobreNosotros", component: SobreNosotros },
    { path: "/MisPedidos", name: "MisPedidos", component: Usuario },
    { path: "/Carrito", name: "Carrito", component: Cart },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
