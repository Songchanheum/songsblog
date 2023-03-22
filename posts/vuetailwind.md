---
title: TailwindCSS / Vue Project — Authenticated
subtitle: Tailwind CSS + VueJS Login Authenticated
date: "2021-08-17"
baseimage: tailwindcssvue.png
---

별로 로그인기능을 넣을 생각은 없었지만 기존에 만들어두었던 로그인용 솔루션이 생각나서 넣어봤다.

Vuex와 Router를 이용한다. Vuex의 Store에 로그인관련한 Token을 관리하고 Router에서 해당 Token을 이용하여 페이지에 접근할 것인지 로그인페이지로 redirect할 것인지 판단하는 로직이다.

- store/index.js

```js
import Vue from "vue";
import Vuex from "vuex";
import socket from "./modules/socket";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    socket,
  },
  state: {
    token: localStorage.getItem("token"),
  },
  getters: {
    isAuthenticated(state) {
      if (state.token) {
        return true;
      } else {
        return false;
      }
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    getToken(state, user) {
      state.token = localStorage.getItem("token");
      state.user = user;
    },
    delToken(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  actions: {},
  strict: debug,
});
```

로그인 완료 시 localStorage에 token값을 저장하고 Store에서 해당 token을 관리한다.

getters에 isAuthenticated function을 추가하여 토큰유무를 판단할 수 있도록 만들었고 해당 function을 router에서 이용하는 방식이다.

- router/index.js

```js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreatUser from "../views/auth/CreateUser.vue";
import ChatLogin from "../views/chat/ChatLogin.vue";
import ChatRoom from "../views/chat/ChatRoom.vue";
import User from "../views/auth/User.vue";
import store from "../store/index";

Vue.use(VueRouter);

const requireAuth = (path) => async (to, from, next) => {
  const require = await store.getters.isAuthenticated;
  if (require) {
    return next();
  }
  next("/sign?returnPath=" + path);
};

const About = () => {
  return import("../views/About.vue");
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => About(),
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatLogin,
    redirect: "/chat/login",
    children: [
      {
        path: "login",
        component: ChatLogin,
        beforeEnter: requireAuth("chat"),
      },
    ],
  },
  {
    path: "/char-room/:username",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth("chat/login"),
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
```

앞으로 page routing을 관리할 router 코드이다.

requireAuth function에서 store의 isAuthenticated function을 호출하여 토큰 유무에 따라 page를 routing한다.

그리고 requireAuth function은 page route할 때 beforeEnter에 삽입하여 페이지 로드 전 호출 할 수 있도록 하였다.
