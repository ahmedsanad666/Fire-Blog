import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage";
import BlogPage from "../views/BlogPage";
import AuthPage from "../views/AuthPage";
import ForgetPass from "../components/Auth/ForgetPass";
import ProfilePage from "../views/ProfilePage";
import CreatPost from "../views/CreatPost";

import BlogPreview from '../views/BlogPreview';

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogPage,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    children: [
      {
        path: "resetpassword",
        name: "password",
        component: ForgetPass,
        meta: {
          title: "password",
        },
      },
    ],
    meta: {
      title: "register",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    meta: {
      title: "profile",
    },
  },
  {
    path: "/CreatPost",
    name: "creatPost",
    component: CreatPost,
    meta: {
      title: "CreatPost",
    },
  },
  {
    path: "/BlogPreview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: "postReview",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});

export default router;
