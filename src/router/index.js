import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Recommend from '@/views/Recommend'
import Notification from '@/views/Notification'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend
    },
    {
        path: '/notification',
        name: 'Notification',
        component: Notification
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router