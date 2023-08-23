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
  ],
});

export default router;
