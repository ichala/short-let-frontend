import {
  FaTh,
  FaUserAlt,
  FaSignInAlt,
  FaUser,
  FaClipboard,
  FaBuilding,
  FaRegChartBar,
  FaBookOpen,
} from 'react-icons/fa';

const menuItem = [
  {
    path: '/',
    name: 'Home',
    icon: <FaTh />,
    end: true,
  },
  {
    path: '/halls',
    name: 'Halls',
    icon: <FaBuilding />,
    end: false,
    protected: true,
  },
  {
    path: '/register',
    name: 'Register',
    icon: <FaUserAlt />,
    end: false,
    protected: false,
  },
  {
    path: '/login',
    name: 'Login',
    icon: <FaSignInAlt />,
    end: false,
    protected: false,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <FaUser />,
    end: false,
    protected: true,
  },
  {
    path: '/reservation',
    name: 'Reservation',
    icon: <FaBookOpen />,
    end: false,
    protected: true,
  },
  {
    path: '/my-reservations',
    name: 'My Reservations',
    icon: <FaClipboard />,
    end: false,
    protected: true,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: <FaRegChartBar />,
    end: false,
    protected: true,
    admin: true,
  },
];

export default menuItem;
