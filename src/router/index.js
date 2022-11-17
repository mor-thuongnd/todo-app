import Vue from "vue";
import VueRouter from "vue-router";
import LayoutComponent from "../layout/LayoutComponent.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Todo from "../components/Todo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutComponent,
    children: [
      {
        path: "",
        name: "Home",
        component: HelloWorld,
      },
      {
        path: "/todo",
        name: "Todo",
        component: Todo,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
