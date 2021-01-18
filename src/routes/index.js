import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    mode: 'history',
    routes
});

export default router;
