import Vue from 'vue'
import Router from 'vue-router'
import EditorTab from '@/components/EditorTab'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: EditorTab
        },
        {
            path: '/preview',
            component: () => import('@/components/PreviewTab.vue') 
        }
    ]
})
