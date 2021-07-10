import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Regex from "../views/Regex.vue";
import CadastroFinalizado from "../views/CadastroFinalizado.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/regex",
    name: "Regex",
    component: Regex,
  },
  {
    path: "/cadastrofinalizado",
    name: "CadastroFinalizado",
    component: CadastroFinalizado,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
