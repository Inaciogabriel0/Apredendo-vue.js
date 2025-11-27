import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const route = [
    { path: '/hello', component: HelloWorld  },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router