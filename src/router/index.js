import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: () => import("@/views/HomeView.vue"),
    },
    /**
     * pages
     */
    {
      path: "/login",
      name: "LoginView",
      component: () => import("@/views/pages/LoginView.vue"),
    },
    {
      path: "/error",
      name: "ErrorView",
      component: () => import("@/views/pages/ErrorView.vue"),
    },
  ],
});

export default router;
