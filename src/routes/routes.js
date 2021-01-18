const routes = [
    {
        mode: 'history',
        path: '/',
        redirect: {name: 'Home'},
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: '/saved',
                name: 'saved',
                component: () => import('../pages/Saved.vue')
            }
        ]
    },
    {
        path: '*',
        component: () => import('../pages/Error404.vue')
    }
];

export default routes;
