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

    /**
     * components - tables
     */
    {
      path: "/tables/basic",
      name: "TableBasicView",
      component: () => import("@/views/components/tables/TableBasicView.vue"),
    },
    {
      path: "/tables/expand",
      name: "TableExpandView",
      component: () => import("@/views/components/tables/TableExpandView.vue"),
    },
    {
      path: "/tables/select",
      name: "TableSelectView",
      component: () => import("@/views/components/tables/TableSelectView.vue"),
    },

    /**
     * components - maps
     */
    {
      path: "/maps/basic",
      name: "MapBasicView",
      component: () => import("@/views/components/maps/MapBasicView.vue"),
    },
  ],
});

export default router;
