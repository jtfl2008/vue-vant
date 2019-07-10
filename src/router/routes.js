const Home = () => import('@/views/home/Index.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
export default routes
