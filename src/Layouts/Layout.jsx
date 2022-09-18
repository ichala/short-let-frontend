import Sidebar from '../components/SideBar';
import Styles from './layout.module.css';

function Layout({ children }) {
  return (
    <>
      <div className={Styles.main_container}>
        <Sidebar />
        <main className="container-fluid">{children}</main>
      </div>
    </>
  );
}

export default Layout;
