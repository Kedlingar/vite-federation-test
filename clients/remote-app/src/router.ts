import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    meta: {
      title: "Remote"
    },
    component: () => import("./components/MainPage.vue"),
    children: [
      {
        path: '/',
        meta: {
          title: "Home",
          isHide: true,
        },
        component: () => import("./components/HomePage.vue"),
      },
      {
        path: '/video-player',
        meta: {
          title: "Video-player"
        },
        component: () => import("./components/Video/VideoPlayer.vue"),
      },
      {
        path: '/user-profile',
        meta: {
          title: "User profile"
        },
        component: () => import("./components/User/UserProfile.vue"),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory('/remote/'),
  routes,
})

export default router;