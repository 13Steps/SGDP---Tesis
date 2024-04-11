import { createRouter, createWebHashHistory } from 'vue-router'

  // Vistas
import DashboardVista from '../views/DashboardVista.vue'
import LoginVista from '../views/LoginVista.vue'
import PortafolioVista from '../views/PortafolioVista.vue'
import FichaEntrada from '../views/FichaEntradaVista.vue'

  // Componentes

  // Funciones
import { estaAutenticado } from './guard';

  // Rutas
const routes = [
  {
    path: '/', name: 'LoginVista', component: LoginVista,
  },
  { beforeEnter: [estaAutenticado],
    path: '/dashboard', name: 'DashBoard',
    children: [
      {
        path: '',
        name: '',
        component: DashboardVista
      },
    ]},
  { beforeEnter: [estaAutenticado],
    path: '/portafolio', name: 'Portafolio',
    children : [
      {
        name : '',
        path : '',
        component : PortafolioVista
      },
    ]},
  { beforeEnter: [estaAutenticado],
    path: '/fichaEntrada', name: 'FichaEntrada',
    children: [
      {
        path: '',
        name: '',
        component: FichaEntrada
      },
    ]}, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
