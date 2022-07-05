import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Leads from '@/components/vendas/Leads.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Lead from '@/components/vendas/Lead.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home,
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
                name: 'lead'
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
        component: Site

    },
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


// -- fim das rotas
