import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { showSidebar: true },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: { showSidebar: false },
  },
  {
    path: "/Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    meta: { showSidebar: false },
  },

  {
    path: "/Dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
    meta: { showSidebar: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
