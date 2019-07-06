import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routerLink = new Router({
    routes: [
        {
            path: "/",
            name: 'index',
            meta: {
                title: "首页"
            },
            component: () => {
                return import('./views/index.vue')
            },
            children: [
                {
                    path: "/index",
                    name: 'hotMusic',
                    meta: {
                        title: "热门歌单"
                    },

                    component: () => {
                        return import('./views/indexPages/hotMusic.vue')
                    }
                }
            ]
        }
    ]
})


export default routerLink