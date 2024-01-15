import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {name: "index", path: "/", component: () => import("../components/Home.vue"), props: {readLocal: true}},
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
