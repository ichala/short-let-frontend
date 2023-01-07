import AdminRoutes from '../components/Auth/AdminRoutes';
import PrivateRoutes from '../components/Auth/PrivateRoutes';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import Users from '../Pages/Admin/Users/Users';
import AllRequests from '../Pages/Admin/Requests/AllRequests';
import ManageRequests from '../Pages/Admin/Requests/ManageRequests';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Hall from '../Pages/Admin/Hall';
import HallDetails from '../Pages/Halls/HallDetails';
import Halls from '../Pages/Halls/Halls';
import Home from '../Pages/Home/Home';
import Reservation from '../Pages/Reservation/Reservation';
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
        path: '/reservation',
        element: <Reservation />,
      },
      {
        path: '/my-reservations',
        element: <MyReservations />,
      },
      {
        path: '/halls',
        element: <Halls />,
      },
      {
        path: '/halls/:id',
        element: <HallDetails />,
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
      {
        path: '/admin/dashboard/halls',
        element: <Hall />,
      },
      {
        path: '/admin/dashboard/users',
        element: <Users />,
      },
      {
        path: '/admin/dashboard/pending-requests',
        element: <ManageRequests />,
      },
      {
        path: '/admin/dashboard/requests',
        element: <AllRequests />,
      },
    ],
  },
];

export default routesConfig;
