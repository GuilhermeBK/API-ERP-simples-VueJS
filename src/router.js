const Home = () => import( '@/views/Home.vue')
const Login = () => import( '@/views/Login.vue')
const PaginaNaoEncontrada = () => import( '@/views/PaginaNaoEncontrada.vue')
const Site = () => import( '@/views/Site.vue')
const Vendas = () => import( /* webPackChunkName: "vendas" */'@/components/vendas/Vendas.vue')
const Servicos = () => import( /* webPackChunkName: "servicos" */'@/components/servicos/Servicos.vue')
const Servico = () => import( /* webPackChunkName: "servicos" */ '@/components/servicos/Servico.vue')
const Indicadores = () => import( /* webPackChunkName: "servicos" */ '@/components/servicos/Indicadores.vue')
const Opcoes = () => import( /* webPackChunkName: "servicos" */ '@/components/servicos/Opcoes.vue')
const Leads = () => import( /* webPackChunkName: "vendas" */'@/components/vendas/Leads.vue')
const Contratos = () => import( /* webPackChunkName: "vendas" */'@/components/vendas/Contratos.vue')
const Dashboard = () => import( /* webPackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import( /* webPackChunkName: "dashboard" */ '@/components/dashboard/DashboardRodape.vue')
const Lead = () => import( /* webPackChunkName: "vendas" */ '@/components/vendas/Lead.vue')
//lazy load
const  VendasPadrao = () => import('@/components/vendas/VendasPadrao.vue')


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home,
        meta: {
            requerAutorizacao: false
        },
        children: [{
            path: 'vendas',
            component: Vendas,
            children: [{
                path: 'leads',
                component: Leads
            },
            {
                path: 'contratos',
                component: Contratos,
                name: 'contratos'
            },
            {
                path: 'leads/:id',
                component: Lead,
                name: 'lead',
                props: true
            },
            {
                path: '',
                component: VendasPadrao
            }]
        },
        {
            path: 'servicos',
            component: Servicos,
            name: 'servicos',
            children: [
                {
                    path: ':id',
                    props: {
                        default: true,
                        indicadores: true,
                        opcoes: true
                    },
                    name: 'servico',
                    components: {
                        default: Servico,
                        opcoes: Opcoes,
                        indicadores: Indicadores
                    }

                }
            ]
        },
        {
            path: 'dashboard',
            components: {
                default: Dashboard,
                rodape: DashboardRodape
            }
        }]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    },
    {
        path: '/', //localhost:8080/site
        component: Site,
        meta: {
            requerAutorizacao: false
        }

    },
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {

        if(savedPosition){
            return savedPosition
        }

        if (to.hash) {
            console.log(to.hash)
            return {

                el: to.hash
            }
        }
        return {
            left: 0,
            top: 0
        }
    },
    routes
})

router.beforeEach((to, from) => {

})

export default router


// -- fim das rotas
