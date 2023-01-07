import { FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import menuItem from '../config/sidebar';
import { Logout } from '../redux/slices/auth';
import './sidebar.css';

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="collapse d-md-none" id="navbarToggleExternalContent">
        <div className="bg-light p-2">
          <ul className="nav nav-pills flex-column mb-auto">

            {menuItem.map((item, index) => (
              <li key={index} className={`${((user && !item.protected) || ((!(user?.role === 'admin') && item.admin)) || (!user && item.protected)) && !(item.name === 'Home') && 'd-none'} nav-item text-dark text-decoration-none`}>
                <NavLink
                  to={item.path}
                  className="nav-link text-decoration-none text-dark d-flex gap-3"
                  end={item.end}
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              </li>
            ))}
            {user
            && (
            <li className="nav-link text-decoration-none text-dark d-flex">
              <button
                onClick={() => {
                  dispatch(Logout());
                }}
                type="button"
                className="btn  btn-success d-flex align-items-center bg-"
              >
                <FaPowerOff />
                <span className="fw-bold ms-1">Logout</span>
              </button>
            </li>
            )}
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-light bg-light d-md-none">
        <div className="container-fluid">
          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>

      <div className="d-flex border-end flex-column flex-shrink-0 pt-3 d-md-block d-none shadow-sm sidebar" style={{ width: '280px' }}>
        <a href="sqs" className="d-flex align-items-center mb-3 ps-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src="/images/logo.png" className="logo" alt="logo" />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">

          {menuItem.map((item, index) => (
            <li key={index} className={`${((user && !item.protected) || ((!(user?.role === 'admin') && item.admin)) || (!user && item.protected)) && !(item.name === 'Home') && 'd-none'} nav-item  text-dark text-decoration-none`}>
              <NavLink
                to={item.path}
                className="nav-link text-decoration-none text-dark d-flex gap-3"
                end={item.end}
              >
                <div className="icon">{item.icon}</div>
                <div
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            </li>
          ))}
          {user && (
          <li className="nav-link text-decoration-none text-dark d-flex gap-3 absolute">
            <button
              onClick={() => {
                dispatch(Logout());
              }}
              type="button"
              className="btn logout btn-success d-flex align-items-center bg-"
            >
              <FaPowerOff />
              <span className="fw-bold ms-1">Logout</span>
            </button>
          </li>
          ) }
        </ul>

      </div>

    </>
  );
};
export default Sidebar;
