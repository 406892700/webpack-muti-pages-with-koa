import Vue from 'vue';
import Router from 'vue-router';


import Index from './page/Index';
import List from './page/List';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'userManage',
            meta: { title: 'index' },
            component: Index,
        },
        {
            path: '/list',
            name: '33dd',
            meta: { title: 'index' },
            component: List,
        },
    ],
});

