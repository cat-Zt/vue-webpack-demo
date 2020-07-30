import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export const routeConfig = [{
    path: '/',
    name: 'home',
    redirect: '/index',
    fdId: '1',
    fdFrontLink: '/index.html',
    component: Home,
    children: [
        {
            path: '/',
            name: 'home',
            fdId: '11',
            fdFrontLink: '/',
            component: () => import('./views/Home.vue'),
            meta: {
                title: 'index_page'
            }
        }
    ]
}];

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: routeConfig
});
