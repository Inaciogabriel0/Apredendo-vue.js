import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import FormComponente from '@/components/FormComponente.vue';

const route = [
    { path: '/cadastro', component: Home  },
    { path: '/login', component: FormComponente  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router