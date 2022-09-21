import AdminRoutes from '../components/Auth/AdminRoutes';
import PrivateRoutes from '../components/Auth/PrivateRoutes';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Home from '../Pages/Home/Home';
import MyReservations from '../Pages/Users/MyReservations';
import Profile from '../Pages/Users/Profile';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    element: <PrivateRoutes />, // <-- check if user authenticated
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/my-reservations',
        element: <MyReservations />,
      },
    ],

  },
  {
    element: <AdminRoutes />, // <-- check if user authenticated
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default routesConfig;
