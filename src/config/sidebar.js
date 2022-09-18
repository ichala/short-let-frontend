import {
  FaTh,
  FaUserAlt,
  FaSignInAlt,
} from 'react-icons/fa';

const menuItem = [
  {
    path: '/',
    name: 'Home',
    icon: <FaTh />,
    end: true,

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
    path: '/logout',
    name: 'logout',
    icon: <FaSignInAlt />,
    end: false,
    protected: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <FaSignInAlt />,
    end: false,
    protected: true,
  },
];

export default menuItem;
