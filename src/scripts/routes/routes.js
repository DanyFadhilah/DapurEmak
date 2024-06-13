import HomePage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
