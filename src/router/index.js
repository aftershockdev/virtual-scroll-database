import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Databases from "../views/Databases/index.vue"
import database from "../views/Databases/_id.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/databases",
    name: "databases",
    component: Databases
  },
  {
    path: "/databases/:id",
    name: "database",
    component: database
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
