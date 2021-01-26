import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

const product = () => import('./views/Product')
const addna = () => import('./views/Addna')
const addkna = () => import('./views/Addkna')
const addk = () => import('./views/Addk')
const news = () => import('./views/News')
const addnew = () => import('./views/Addnew')
const addvideo = () => import('./views/Addvideo')
const editlist = () => import('./views/EditList')
const editnews = () => import('./views/Editnews')
const editvideo = () => import('./views/Editvideo')
const message = () => import('./views/Message')
const login = () => import('./views/Login')
const backstage = () => import('./views/Backstage')
const b = () => import('./views/b')
const refresh = () => import('./views/refresh')

export default new Router({
    mode: 'hash',
    routes: [{
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/refresh',
            component:refresh
        },
        {
            path: '/b',
            component: b,
            children: [
                {
                    path: '',
                    redirect: 'product'
                },

                {
                    path: 'product',
                    component: product
                }, {
                    path: 'addna',
                    component: addna
                }, {
                    path: 'news',
                    component: news
                }, {
                    path: 'addk',
                    component: addk
                }, {
                    path: 'addkna',
                    component: addkna
                }, {
                    path: 'addnew',
                    component: addnew
                }, {
                    path: 'addvideo',
                    component: addvideo
                }, {
                    path: 'editlist',
                    component: editlist
                }, {
                    path: 'editnews',
                    component: editnews
                }, {
                    path: 'editvideo',
                    component: editvideo
                }, {
                    path: 'message',
                    component: message
                },
            ]
        }

    ]
})