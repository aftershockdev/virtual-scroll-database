import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Databases from "../views/Databases/index.vue"
import data from "../views/Databases/data.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/databases/:slug",
    name: "database",
    component: data
  },
  {
    path: "/databases",
    name: "databases",
    component: Databases
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
