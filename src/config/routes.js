import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Home from '../Pages/Home/Home';

const routes = [
  {
    path: '/',
    component: <Home />,
    protected: false,
  },
  {
    path: '/login',
    component: <Login />,
    protected: false,
  },
  {
    path: '/register',
    component: <Register />,
    protected: false,
  },

];

export default routes;
