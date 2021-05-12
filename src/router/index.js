import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Recommend from '@/views/Recommend'
import Notification from '@/views/Notification'
import Gwangju from '@/views/Region/Gwangju'
import Naju from '@/views/Region/Naju'
import Jeonju from '@/views/Region/Jeonju'
import Damyang from '@/views/Region/Damyang'
import Yeongam from '@/views/Region/Yeongam'

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
    {
        path: '/Gwangju',
        name: 'Gwangju',
        component: Gwangju
    },
    {
        path: '/Naju',
        name: 'Naju',
        component: Naju
    },
    {
        path: '/Jeonju',
        name: 'Jeonju',
        component: Jeonju
    },
    {
        path: '/Damyang',
        name: 'Damyang',
        component: Damyang
    },
    {
        path: '/Yeongam',
        name: 'Yeongam',
        component: Yeongam
    },
]

const router = new Router({
    mode: 'history',
    routes
})

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};

export default router