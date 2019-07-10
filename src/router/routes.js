const Index = () => import('@/views/index/Index.vue')
const Home = () => import('@/views/home/Index.vue')
const Discovery = () => import('@/views/discovery/Index.vue')
const Publish = () => import('@/views/publish/Index.vue')
const Mine = () => import('@/views/mine/Index.vue')
const Detail = () => import('@/views/detail/Index.vue')
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/discovery',
        name: 'discovery',
        component: Discovery
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]
export default routes
