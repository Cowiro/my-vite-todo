import { setBlockTracking } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';
import Blog from '/src/pages/Blog.vue';
import NotFound from '/src/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: MainTodo,
  },
  {
    path: '/mainTodo',
    name: 'MainTodo',
    component: MainTodo,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/src/pages/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/:pathMatch(.*)*', // 存在しないアドレスのマッチ
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
