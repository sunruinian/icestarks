// import Layout from '@/Layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import performance from '@/pages/performance';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

const routerConfig = [
  {
    path: '/',
    // component: Layout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      }, 
      {
        path: '/',
        exact: true,
        component: Home,
      }, 
      {
        path: '/performance',
        component: performance,
      },
      {
        component: NotFound,
      },
  ]
  },
];

export default routerConfig;