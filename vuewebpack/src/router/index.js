import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child1';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', // 元件接下來會呈現的名稱
            path: '/index', //元件的虛擬路徑 (在網址上輸入的路徑)
            component: Home, //對應的元件
        },
        {
            name: '分頁', // 元件接下來會呈現的名稱
            path: '/page', //元件的虛擬路徑 (在網址上輸入的路徑)
            component: Page, //對應的元件
            children: [
                {
                    name: '卡片 1', // 元件接下來會呈現的名稱
                    path: '', //沒有輸入路徑 , 就是預設會代入預設頁面的部份
                    component: child, //對應的元件
                },
                {
                    name: '卡片 2', // 元件接下來會呈現的名稱
                    path: 'child2', //元件的虛擬路徑 (在網址上輸入的路徑)
                    component: child2, //對應的元件
                },
                {
                    name: '卡片 3', // 元件接下來會呈現的名稱
                    path: 'child3', //元件的虛擬路徑 (在網址上輸入的路徑)
                    component: child3, //對應的元件
                },
            ],
        }
    ]
});