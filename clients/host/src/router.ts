import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    meta: {
      title: "Host"
    },
    component: () => import("./components/MainPage.vue"),
    children: [
      {
        path: '/',
        meta: {
          title: "Home",
          isHide: true,
        },
        component: () => import("./components/HomePage.vue")
      },
      {
        path: '/remote',
        meta: {
          title: "Remote"
        },
        component: () => import("./components/remotes/RemoteAppWrapper.vue"),
        children: [
          {
            path: '/:pathMatch(.*)*',
            component: () => import("./components/remotes/RemoteAppWrapper.vue"),
            isHide: true,
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;