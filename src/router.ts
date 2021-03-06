import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () =>
        import(/* webpackChunkName: "welcome" */ "./views/Welcome.vue"),
    },
  ],
})
